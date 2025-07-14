import TrustedBrandMarquee from "@/components/elements/trusted-brands-marquee";
import Container from "@/components/ui/container";

export default function TrustedBrandsSection() {
  return (
    <Container className="section-spacing">
        <h3 className="title-xl text-grey-800  text-center">OUR TRUSTED STAKEHOLDERS</h3>
        <div className="mt-10">
          <TrustedBrandMarquee/>
        </div>
    </Container>
  )
}
