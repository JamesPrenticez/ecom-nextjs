import React from 'react'
import Link from 'next/link'
import { Button, buttonVariants } from '../ui/button'
import TransparentTextEffect from '../effects/TransparentTextEffect'
import { HERO_SUB_TITLE, HERO_TITLE } from '@/constants/settings'
import { cn } from '@/lib/utils'

const Hero = () => {
  return (
    // <div className="bg-gradient-to-r from-primary w-full h-[75vh]">
    <div className="
        flex flex-col items-center justify-center
        bg-gradient-to-r from-[#d946ef] via-[#f43f5e] to-[#facc15] w-full h-[75vh]
      "
    >

      <TransparentTextEffect text={HERO_TITLE}/>
      <h2 className="text-5xl text-secondary font-bold">{HERO_SUB_TITLE}</h2>


      <Button asChild variant="success">
        <Link href="/products" className={"w-[300px] mt-12"}>
          SHOP NOW
        </Link>
      </Button>

    </div>
  )
}

export default Hero