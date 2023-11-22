import MaxWidthWrapper from "@/components/layout/MaxWidthWrapper"
import Hero from "@/components/hero/Hero"

export default function Home() {
  return (
    // <MaxWidthWrapper>
      <div className="flex flex-col grow  mx-auto text-center ">
        <Hero />
      </div>
    // </MaxWidthWrapper>
  )
}
