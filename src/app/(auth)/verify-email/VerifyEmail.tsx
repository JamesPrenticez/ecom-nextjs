"use client"

import React from 'react'
import { trpc } from "@/tRPC/client"
import { ArrowRightToLine, Loader2, XCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import EmailVerifiedIcon from "./EmailVerifiedIcon";

interface Props {
  token: string;
}

const VerifyEmail = ({token}: Props) => {
  const { data, isLoading, isError } = trpc.auth.verifyEmail.useQuery({
    token,
  })

  if(isError) {
    return (
      <div className="flex flex-col items-center gap-2">
        <XCircle className="text-danger h-8 w-8"/>
        <h3 className="font-semibold text-xl">There was a problem</h3>
        <p className="text-muted-foreground text-sm">
          This token is not valid or might be expired.
        </p>
        <p className="text-muted-foreground text-sm">
          Please try again
        </p>
      </div>
    )
  }

  if(data?.success) {
    return (
      <div className="flex h-full flex-col items-center justify-center">
        <div className="mb-6">
          <EmailVerifiedIcon />
        </div>
        <h3 className="font-semibold text-3xl">
          You&apos;re all set!
        </h3>
        <p className="text-muted-foreground text-center mt-1">
          Thank you for verifying your email.
        </p>
        <Button asChild variant="default" className="mt-4 cursor-pointer">
          <span className="space-x-2">
            <Link href="/sign-in">Sign in</Link>
            <ArrowRightToLine className="w-5 h-5"/>
          </span>
        </Button>
      </div>
    )
  }

  if(isLoading) {
    return (
      <div className="flex flex-col items-center gap-2">
        <Loader2 className="h-8 w-8 text-zinc-300 animate-spin "/>
        <h3 className="font-semibold text-xl">Verifying...</h3>
         <p className="text-muted-foreground text-sm">
          This won&apos;t take long.
        </p>
      </div>
    )

  }
}

export default VerifyEmail