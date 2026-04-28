"use server"
import { cookies } from "next/headers"
import { redirect } from "next/navigation"
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
    return {
      error: result.error || "An error occurred during login",
    }
  }
  (await cookies()).set("token", result.access_token, {
    httpOnly: true,
    secure: true,
    sameSite: "lax"
  })

  redirect("/my")
}