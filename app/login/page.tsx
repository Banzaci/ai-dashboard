"use client"

import { useForm } from "react-hook-form"
import { loginAction } from "../actions/login"
import { FormData } from "../actions/types"
import Link from "next/link"
import { Input } from "../components/Input"
import { Button } from "../components/Button"

export default function Login() {
  const { register, handleSubmit } = useForm<FormData>()

  async function onSubmit(data: FormData) {
    const res = await loginAction(data)
    localStorage.setItem("token", res.access_token)
  }

  return (
    <div className="md:min-w-2xl">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="max-w-sm mx-auto space-y-4 mt-20 mb-8"
      >
        <Input
          placeholder="Email"
          {...register("email")}
          className="border p-2 w-full"
        />
        <Input
          type="password"
          placeholder="Password"
          {...register("password")}
          className="border p-2 w-full"
        />
        <Button className="bg-black text-white w-full p-2">
          Login
        </Button>
      </form>
      <p className="text-center text-sm text-gray-800">
        Don&apos;t have an account?{" "}
        <Link
          href="/register"
          className="font-medium text-black hover:underline"
        >
          Register
        </Link>
      </p>
    </div>
  )
}