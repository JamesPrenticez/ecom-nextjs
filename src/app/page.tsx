import MaxWidthWrapper from "@/components/layout/MaxWidthWrapper"
import Hero from "@/components/hero/Hero"
import Test from "@/components/test/Test"

export default function Home() {
  return (
    // <MaxWidthWrapper>
      <div className="flex flex-col grow mx-auto text-center ">
        <Hero />
        <Test />
      </div>
    // </MaxWidthWrapper>
  )
}
