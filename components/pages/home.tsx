
import { AboutSection, ContactSection, HeroSection, OurProductAndServicesSection, TrustedBrandsSection, WhatIsNewSection, WhatWeAreSection } from "@/components/sections/home"

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <TrustedBrandsSection />
      {/* <ServiceSection /> */}
      <AboutSection />
      <OurProductAndServicesSection />
      <WhatWeAreSection/>
      <WhatIsNewSection/>
      <ContactSection />
    </>
  )
}
