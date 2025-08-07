import { getBanners } from "@/api/common";
import { GridLayoutBg } from "@/assets";
import HeroBannerSlider from "@/components/elements/hero-banner-slider";
import LinkButton from "@/components/ui/link-button";
import Image from "next/image";

export default async function HeroSection() {
  const { data: banners = [] } = await getBanners();

  return (
    <section className="section-spacing  lg:pb-14">
      <HeroBannerSlider banners={banners} />
      <div className="absolute container hidden md:block left-1/2 -top-0 -translate-x-1/2 px-6">
        <Image
          src={GridLayoutBg}
          alt="Grid Background"
          className="absolute pointer-events-none"
        />
      </div>
      <div className="container pt-10 md:pt-12">
        <div className=" gap-y-7 flex justify-end items-center text-center flex-col pb-12">
          <h1 className="heading-xl text-primary text-center max-w-[900px]">
            Comprehensive Trading Solutions <br /> Under One Roof
          </h1>
          <p className="max-w-[659px] text-grey-800 body-md">
            AL Says Company FZE delivers tailored solutions with unmatched
            reliability and professionalism.
          </p>
          <LinkButton href={"/contact-us"}>Submit an Enquiry</LinkButton>
        </div>
      </div>
      
    </section>
  );
}
