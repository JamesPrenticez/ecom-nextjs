"use client"

import Logo from '@/components/layout/Logo'
import { Button } from '@/components/ui/button'
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { cn } from "@/lib/utils"
import { AuthCredentialsValidationSchema, TAuthCredentialsValidationSchema } from "@/lib/validators/account-credentials-validation"
import { trpc } from "@/tRPC/client"
import { zodResolver } from "@hookform/resolvers/zod"
import { ArrowRight } from "lucide-react"
import Link from "next/link"
import { useRouter, useSearchParams } from "next/navigation"
import { useForm } from "react-hook-form"
import { toast } from "sonner"
import { ZodError } from "zod"

const SignInPage = () => {

  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm<TAuthCredentialsValidationSchema>({
    resolver: zodResolver(AuthCredentialsValidationSchema)
  })

  const router = useRouter();
  const searchParams = useSearchParams();
  const origin = searchParams.get("origin");

  const { 
    mutate: mutateCreateUser,
    isLoading: isLoadingCreateUser,
  } = trpc.auth.signIn.useMutation({
    onSuccess: () => {
      toast.success("Signed in successfully");

      router.refresh();

      if(origin) {
        router.push(`/${origin}`)
        return
      }

      router.push('/')
    },
    onError: (err) => {
      if(err.data?.code === "UNAUTHORIZED") {
        toast.error("Invalid email or password.")
      }
    }
  })

  const onSubmit = ({email, password}: TAuthCredentialsValidationSchema) => {
    mutateCreateUser({ email, password })
  }

  return (
    <>
      <div className="container relative flex flex-col pt-20 items-center justify-center lg:px-0">
        <div className="flex flex-col justify-center w-full mx-auto space-y-6 sm:w-[350px]">
          <div className="flex flex-col items-center text-center space-y-2">
            <Logo width={100} height={100} />
            <h1 className="text-2xl font-extrabold">Sign in to your account</h1>

            <div>
              <p>Don&apos;t have and accout?</p>
              <Button asChild variant="link" className="pt-0 mt-0">
                <Link href="/sign-up" className="gap-1">
                  Sign up
                  <ArrowRight width={18} height={18} />
                </Link>
              </Button>
            </div>
          </div>

          <div className="grid gap-6">
            <form onSubmit={handleSubmit(onSubmit)}>
              <div className="grid gap-2">
                <div className="grid gap-1 py-2">
                  <Label htmlFor="email">Email</Label>
                  <Input
                    {...register("email")}
                    placeholder="example@domain.com"
                    className={cn({
                      "focus-visible:ring-red-500": errors.email,
                    })}
                  />
                  {errors?.email && (
                    <p className="text-sm text-red-500">
                      {errors.email.message}
                    </p>
                  )}
                </div>

                <div className="grid gap-1 py-2">
                  <Label htmlFor="email">Password</Label>
                  <Input
                    {...register("password")}
                    type="password"
                    placeholder="password"
                    className={cn({
                      "focus-visible:ring-red-500": errors.password,
                    })}
                  />
                  {errors?.password && (
                    <p className="text-sm text-red-500">
                      {errors.password.message}
                    </p>
                  )}
                </div>

                <Button>Sign In</Button>
              </div>
            </form>

            <div className='relative'>
              <div
                aria-hidden='true'
                className='absolute inset-0 flex items-center'>
                <span className='w-full border-t' />
              </div>
              <div className='relative flex justify-center text-xs uppercase'>
                <span className='bg-background px-2 text-muted-foreground'>
                  or
                </span>
              </div>
            </div>

            <Button
              variant='secondary'
              disabled={isLoadingCreateUser}>
              Facebook
            </Button>
            <Button
              variant='secondary'
              disabled={isLoadingCreateUser}>
              Google
            </Button>

          </div>
        </div>
      </div>
    </>
  );
}

export default SignInPage;