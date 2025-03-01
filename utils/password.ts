import { randomBytes, pbkdf2Sync } from "crypto";

export async function saltAndHashPassword(password: string): Promise<string> {
  const salt = randomBytes(16).toString("hex");
  const hash = pbkdf2Sync(password, salt, 1000, 64, `sha512`).toString(`hex`);
  return `${salt}:${hash}`;
}

export const verifyPassword = async (
  password: string,
  hashedPassword: string
): Promise<boolean> => {
  const [salt, originalHash] = hashedPassword.split(":");
  const hash = pbkdf2Sync(password, salt, 1000, 64, `sha512`).toString(`hex`);
  return hash === originalHash;
};
