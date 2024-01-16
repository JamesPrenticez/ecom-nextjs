import React from "react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

function SignInButton(){
  return (
    <Button asChild variant="ghost">
      <Link href="/sign-in">
        Sign in
      </Link>
    </Button>
  )
}

export default SignInButton;