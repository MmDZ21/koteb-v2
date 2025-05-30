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
