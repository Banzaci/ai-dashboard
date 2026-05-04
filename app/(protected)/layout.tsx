'use client'
import { Toaster } from "react-hot-toast";
import { useRouter } from "next/navigation";
import LogOut from "../components/LogOut";
import MyNavigation from "./MyNavigation";
import { useEffect } from "react";
import { UserStore, useUserStore } from "@/store/user";

export default function ProtectedLayout({ children }: { children: React.ReactNode }) {
  const router = useRouter();
  const {user, setUser} = useUserStore((state:UserStore) => state);
  useEffect(() => {
    async function checkAuth() {
      const token = localStorage.getItem("token");

      if (!token) {
        router.push("/login");
        return;
      }

      const result = await fetch("http://localhost:8000/auth/me", {
        headers: {
          Authorization: `Bearer ${token}`, // ✅ rätt sätt
        },
        cache: "no-store",
      });

      if (!result.ok) {
        router.push("/login");
      } else {
        const user = await result.json();
        setUser(user);
      }
    }

    checkAuth();
  }, [router, setUser]);

  if (!user) {
    return <div>Loading...</div>;
  }
  return (
    <div className="flex flex-col min-h-screen">
      <MyNavigation />
      <main className="flex flex-col flex-1 px-4 sm:px-6 lg:px-8">
        {children}
      </main>
      <LogOut />
      <Toaster position="top-right" />
    </div>
  );
}
