"use server";

import { signIn } from "@/auth";

export default async function login(formData: FormData) {
  console.log("formdata: ", formData);
  formData.append("redirectTo", "/dashboard");
  await signIn("credentials", formData);
}
