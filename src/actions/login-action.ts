"use server";

import { redirect } from "next/navigation";

export async function login() {
  console.log("login action!");

  const res = await fetch("http://localhost:8000/api/auth/url/google");

  const resBody = await res.json();

  const redirectUrl = resBody.data;
  console.log(`redirectUrl: ${redirectUrl}`);

  redirect(redirectUrl);
}
