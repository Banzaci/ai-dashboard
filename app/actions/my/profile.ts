export async function myProfileAction(data: FormData) {
  const res = await fetch("http://localhost:8000/my/profile", {
    method: "GET",
    credentials: "include",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  })
  const result = await res.json()
  if (!res.ok) {
    return {
      error: result.error || "An error occurred during my profile fetch",
    }
  }
  return result
}