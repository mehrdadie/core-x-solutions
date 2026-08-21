import Header from "@/components/sections/Header"
import Hero from "@/components/sections/Hero"
import PlatformStrip from "@/components/sections/PlatformStrip"
import Problems from "@/components/sections/Problems"
import CaseStudies from "@/components/sections/CaseStudies"
import Positioning from "@/components/sections/Positioning"
import Capabilities from "@/components/sections/Capabilities"
import Architecture from "@/components/sections/Architecture"
import Process from "@/components/sections/Process"
import About from "@/components/sections/About"
import BestFit from "@/components/sections/BestFit"
import FinalCta from "@/components/sections/FinalCta"
import Footer from "@/components/sections/Footer"
import StructuredData from "@/components/StructuredData"

export default function Home() {
  return (
    <>
      <StructuredData />
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[60] focus:rounded-lg focus:bg-signal focus:px-4 focus:py-2 focus:text-pit"
      >
        Skip to content
      </a>

      <Header />

      <main id="main">
        <Hero />
        <PlatformStrip />
        <Problems />
        <CaseStudies />
        <Positioning />
        <Capabilities />
        <Architecture />
        <Process />
        <About />
        <BestFit />
        <FinalCta />
      </main>

      <Footer />
    </>
  )
}
