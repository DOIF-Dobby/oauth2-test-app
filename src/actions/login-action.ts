"use server";

import { redirect } from "next/navigation";

export async function login() {
  console.log("login action!");

  const res = await fetch(
    "http://localhost:8080/oauth2/redirect-uri?provider=GOOGLE"
  );

  const resBody = await res.json();

  const redirectUri = resBody.detail.redirectUri;

  redirect(redirectUri);
}
