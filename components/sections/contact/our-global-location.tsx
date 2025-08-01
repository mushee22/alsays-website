import Container from "@/components/ui/container";

import { OurMarketBoundariesSection } from "../market-presence";

export default function OurGlobalLocationSection() {


  return (
    <Container className="section-spacing">
      {/* <h2 className="title text-center">{title}</h2> */}
      <div className=" pt-5 md:pt-10">
        <OurMarketBoundariesSection />
      </div>
      <div className="aspect-[1248/414] min-h-[414px] w-full rounded-[10px] overflow-hidden">
        <iframe
          className="w-full h-full "
          src={`https://maps.google.com/maps?q=${26.166753},${50.610746}&output=embed`}
        ></iframe>
      </div>
    </Container>
  );
}
