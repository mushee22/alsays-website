
import { AboutSection, ContactSection, HeroSection, OurProductAndServicesSection, ServiceSection, TrustedBrandsSection, WhatWeAreSection } from "@/components/sections/home"

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <TrustedBrandsSection />
      <ServiceSection />
      <AboutSection />
      <OurProductAndServicesSection />
      <WhatWeAreSection/>
      <ContactSection />
    </>
  )
}
