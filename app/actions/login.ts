"use server"

import { FormData } from "./types"

export async function loginAction(data: FormData) {
  const res = await fetch("http://localhost:8000/login", {
   method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  })
  const result = await res.json()
  if (!res.ok) {
    throw new Error(result.detail || "Login failed")
  }
  return result
}