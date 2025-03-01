import NextAuth from "next-auth";
import { ZodError } from "zod";
import Credentials from "next-auth/providers/credentials";
import { signInSchema } from "./lib/zod";
import { prisma } from "@/lib/prisma";
import { PrismaAdapter } from "@auth/prisma-adapter";
import { ExtendedUser } from "./types/types";

import bcrypt from "bcryptjs";

export async function saltAndHashPassword(password: string): Promise<string> {
  const saltRounds = 10; // Adjust the cost factor according to your security requirements
  const salt = await bcrypt.genSalt(saltRounds); // Asynchronously generate a salt
  const hash = await bcrypt.hash(password, salt); // Asynchronously hash the password
  return hash; // Return the hash directly as a string
}

export const verifyPassword = async (
  password: string,
  hashedPassword: string
): Promise<boolean> => {
  try {
    return await bcrypt.compare(password, hashedPassword);
  } catch (error) {
    console.error("Password verification error:", error);
    return false;
  }
};


export const { handlers, auth, signIn, signOut } = NextAuth({
  adapter: PrismaAdapter(prisma),
  session: { strategy: "jwt" },
  providers: [
    Credentials({
      credentials: {
        email: {},
        password: {},
      },
      authorize: async (credentials) => {
        try {
          let user = null
          const { email, password } = await signInSchema.parseAsync(
            credentials
          );

          // Look up the user in the database
          user = await prisma.user.findUnique({
            where: { email },
          });

          // If no user is found or the password is incorrect, return null
          if (!user) {
            throw new Error("Invalid credentials.")
          }

          const isPasswordValid = await verifyPassword(password, user.password);
          if (!isPasswordValid) {
            throw new Error("Invalid credentials.")
          }

          // Return the user object if valid
          return {
            id: user.id,
            name: user.name,
            email: user.email,
            role: user.role,
          };
        } catch (error) {
          if (error instanceof ZodError) {
            console.error("Validation error:", error.errors);
            return null;
          }

          console.error("Authorization error:", error);
          return null;
        }
      },
    }),
  ],
  secret: process.env.NEXTAUTH_SECRET,
  callbacks: {
    jwt({ token, user }) {
      if (user) {
        console.log("User in jwt callback:", user); // Add this line
        token.user = user;
      }
      return token;
    },
    session({ session, token }) {
      session.user = token.user as ExtendedUser;
      return session;
    },
  },
});
