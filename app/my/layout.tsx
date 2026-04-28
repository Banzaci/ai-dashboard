import { Toaster } from "react-hot-toast";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import LogOut from "../components/LogOut";

export default async function ProtectedLayout({ children }: { children: React.ReactNode }) {
  const cookieStore = await cookies();
  const token = cookieStore.get("token");

  if (!token) {
    redirect("/login");
  }
  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex flex-col flex-1 max-w-7xl px-4 sm:px-6 lg:px-8 pt-30 mx-auto">
        {children}
      </main>
      <LogOut />
      <Toaster position="top-right" />
    </div>
  );
}
