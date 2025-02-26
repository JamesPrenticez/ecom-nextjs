import MaxWidthWrapper from "@/components/layout/MaxWidthWrapper"
import Hero from "@/components/hero/Hero"
import Test from "@/components/test/Test"

export default function Home() {
  return (
    // <MaxWidthWrapper>
      <div>
        <Hero />
        <Test />
      </div>
    // </MaxWidthWrapper>
  )
}
