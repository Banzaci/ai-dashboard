"use client";

import { useRouter } from "next/navigation";
import { usePrompt } from "@/providers/PromptProvider";

export default function LogOut() {
  const { showPrompt } = usePrompt();
  const router = useRouter();
  async function handleLogout() {
    showPrompt({
      message: "Are you sure you want to log out?",
      onConfirm: async () =>  {
        localStorage.removeItem("token");
        router.push("/login");
      }
    })
  }

  return (
    <button
      onClick={handleLogout}
      className="
        fixed bottom-4 right-4
        flex items-center gap-2
        bg-red-500 hover:bg-red-600
        text-white font-semibold
        px-4 py-2 rounded-full
        transition-colors duration-200
        shadow-md hover:shadow-lg
        z-50
      "
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-5 w-5"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={2}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1m0-11V5"
        />
      </svg>
      Logout
    </button>
  );
}