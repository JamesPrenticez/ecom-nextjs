"use-client"

import React from "react"
import Logo from '@/components/layout/Logo'
import { Button } from '@/components/ui/button'
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { cn } from "@/lib/utils"
import { ArrowRight } from "lucide-react"
import Link from "next/link"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { AuthCredentialsValidationSchema, TAuthCredentialsValidationSchema } from "@/lib/validators/account-credentials-validation"

const Page = () => {

  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm<TAuthCredentialsValidationSchema>({
    resolver: zodResolver(AuthCredentialsValidationSchema)
  })

  const onSubmit = ({email, password}: TAuthCredentialsValidationSchema) => {
    // send data to server
  }

  return (
    <>
    <div className="container relative flex flex-col pt-20 items-center justify-center lg:px-0">
      <div className="flex flex-col justify-center w-full mx-auto space-y-6 sm:w-[350px]">
        <div className="flex flex-col items-center text-center space-y-2">

          <Logo width={100} height={100} />
          <h1 className="text-2xl font-extrabold">
            Create an account
          </h1>

          <div>
            <p>Already have an account?</p>
            <Button asChild variant="link" className="pt-0 mt-0">
              <Link href="/sign-in" className="gap-1">
                Sign In 
                <ArrowRight width={18} height={18}/>
              </Link>
            </Button>
          </div>
          
        </div>

        <div className="grid gap-6">
          <form onSubmit={handleSubmit(onSubmit)} >
            <div className="grid gap-2">

              <div className="grid gap-1 py-2">
                <Label htmlFor="email">Email</Label>
                <Input 
                  placeholder="example@domain.com"
                  className={cn({
                    "focus-visible:ring-red-500": errors.email
                  })}
                  {...register("email")}
                />
              </div>

              <div className="grid gap-1 py-2">
                <Label htmlFor="email">Password</Label>
                <Input 
                  placeholder="password"
                  className={cn({
                    "focus-visible:ring-red-500": errors.password
                  })}
                  {...register("password")}
                />
              </div>

              <Button>
                Sign Up
              </Button>

            </div>
          </form>
        </div>
          
      </div>
    </div>
    </>
  )
}

export default Page