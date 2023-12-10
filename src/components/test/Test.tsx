import React from 'react'
import { Button } from "../ui/button"
import Link from "next/link"

const Test = () => {
  return (
    <div className="flex flex-col items-start justify-center">
      <Button asChild variant="link">
        <Link href="/sign-up">sign-up</Link>
      </Button>
      <Button asChild variant="link">
        <Link href="/sell">sell</Link>
      </Button>
      <Button asChild variant="link">
        <Link href="/verify-email?to=test@email.com">sent email</Link>
      </Button>
      <Button asChild variant="link">
        <Link href="/verify-email?to=test@email.com&token=asdf">verified email</Link>
      </Button>
    </div>
  )
}

export default Test