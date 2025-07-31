import { MarketPresenceHeroImage } from "@/assets";
import Container from "@/components/ui/container";
import Image from "next/image";

export default function HeroSection() {
  return (
    <Container className="pt-24 lg:pt-[164px] pb-12 lg:pb-24 flex flex-col gap-y-6 md:flex-row items-center gap-x-12">
      <div className="space-y-7 basis-[45%] lg:w-[570px]">
        <h1 className="title text-primary">
          Expanding Market Reach and Building Trust Across cross-Sectors
        </h1>
        <div className="aspect-[630/497] md:hidden flex-1 max-md:w-full bg-grey-200 relative rounded-3xl overflow-hidden">
          <Image
            src={MarketPresenceHeroImage}
            alt="market presence image"
            fill
          />
        </div>
        {/* <p className="text-grey-800 body-md">
          Ensure smooth, uninterrupted performance of your facilities and
          infrastructure with our comprehensive Operations and Maintenance (O&M)
          solutions. Alsais Trading Co. delivers expert-managed services that
          optimize system reliability, reduce downtime, and extend asset life.
        </p> */}
        {/* <LinkButton href="">View Services</LinkButton> */}
      </div>
      <div className="aspect-[630/497] flex-1 hidden md:block bg-grey-200 relative rounded-3xl overflow-hidden">
        <Image src={MarketPresenceHeroImage} alt="market presence image" fill />
      </div>
    </Container>
  );
}
