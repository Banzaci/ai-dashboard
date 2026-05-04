"use server"

import { redirect } from "next/navigation"

export async function logoutAction() {
  const res = await fetch("http://localhost:8000/logout", {
   method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
  })
  const result = await res.json();
  if (!res.ok) {
    return {
      error: result.error || "An error occurred during logout",
    }
  }

  redirect("/login")
}