"use client"
import { useUserStore } from "@/store/user";

export default function Home() {
const user = useUserStore((state) => state.user);
  return (
    <div className="bg-red-500 text-white p-10 text-3xl">
      My profile
      {user ? (
        <div className="mt-5">
          <p><strong>Name:</strong> {user.first_name} {user.last_name}</p>
          <p><strong>Email:</strong> {user.email}</p>
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  )
}
