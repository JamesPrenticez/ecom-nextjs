import React from 'react'
import Link from 'next/link'
import { Button } from '../ui/button'
import TransparentTextEffect from '../effects/TransparentTextEffect'
import { hero } from '@/constants/settings'
import MaxWidthWrapper from '../layout/MaxWidthWrapper'

const Hero = () => {
  return (
    // <div className="bg-gradient-to-r from-primary w-full h-[75vh]">
    <div className="
        flex flex-col items-center justify-center
        bg-gradient-to-r from-[#d946ef] via-[#f43f5e] to-[#facc15] w-full h-[75vh]
      "
    >
      <MaxWidthWrapper>
      <TransparentTextEffect text={hero.title}/>
      <h2 className="text-2xl sm:text-5xl text-secondary font-bold">{hero.subtitle}</h2>


      <Button asChild variant="success">
        <Link href="/products" className={"w-1/2 sm:w-[300px] mt-12"}>
          SHOP NOW
        </Link>
      </Button>
      </MaxWidthWrapper>
    </div>
  )
}

export default Hero