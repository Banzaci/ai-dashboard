"use server"

import { FormData } from "./types"

export async function loginAction(data: FormData) {
  const res = await fetch("http://localhost:8000/login", {
   method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    credentials: "include",
    body: JSON.stringify(data),
  })
  const result = await res.json();
  if (!res.ok) {
    return {
      error: result.error || "An error occurred during login",
    }
  }
  return result;
}