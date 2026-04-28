"use client"

import { useForm } from "react-hook-form"
import { registerAction } from "../actions/register"
import { FormData } from "../actions/types"
import { Input } from "../components/Input"
import { Button } from "../components/Button"

export default function Register() {
  const {
    register,
    handleSubmit,
    setError,
    formState: { errors }
  } = useForm<FormData>()

  async function onSubmit(data: FormData) {
     try {
      const result = await registerAction(data)
      if (result.error) {
        setError("email", { message: result.error })
      }
    } catch {
      setError("root", {
        type: "server",
        message: "Server error"
      });
    }
  }

  return (
    <div className="md:min-w-2xl">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="max-w-sm mx-auto space-y-4 mt-20"
      >
        <h1 className="text-xl font-semibold">Register</h1>
        <Input
          placeholder="Email"
          {...register("email")}
          className="border p-2 w-full"
          value="test@example.com"
        />
        <Input
          type="password"
          placeholder="Password"
          {...register("password")}
          className="border p-2 w-full"
          value="password123"
        />
        {errors.email && <p>{errors.email.message}</p>}
        {errors.root && <p>{errors.root.message}</p>}
        <Button className="bg-black text-white w-full p-2">
          Create account
        </Button>
      </form>
    </div>
  )
}