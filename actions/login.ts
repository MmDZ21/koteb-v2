"use server";

import { signIn } from "@/auth";

export default async function login(formData: FormData) {
    console.log("formdata: ", formData)
   formData.append('redirectTo', '/dashboard');
    try {
      await signIn("credentials", formData)
    } catch (error) {
      console.log("login error: " + error)
    }
  }