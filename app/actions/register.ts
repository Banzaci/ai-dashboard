"use server"

import { FormData } from "./types"

export async function registerAction(data: FormData) {
  const res = await fetch("http://localhost:8000/register", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  })

  const result = await res.json()

  if (!res.ok) {
    return {
      error: result.error || "An error occurred during registration",
    }
  }

  return result
}