import { GridLayoutBg } from "@/assets"
import HeroBannerSlider from "@/components/elements/hero-banner-slider"
import LinkButton from "@/components/ui/link-button"
import { homeBannerService } from "@/service/strapi"
import { unstable_cache } from "next/cache"
import Image from "next/image"

const getCacheBanners = unstable_cache(async () => {
    return homeBannerService.find({
        populate: {
            image: true
        }
    })
}, [], { tags: ['banners'] })

export default async function HeroSection() {

    const { data: banners = [] } = await getCacheBanners();

    return (
        <section className="section-spacing  lg:pt-28">
            <div className="absolute container hidden md:block left-1/2 -top-0 -translate-x-1/2 px-6">
                <Image
                    src={GridLayoutBg}
                    alt="Grid Background"
                    className="absolute pointer-events-none"
                />
            </div>
            <div className="container pt-20 md:pt-28">
                <div className=" gap-y-7 flex justify-end items-center text-center flex-col pb-12">
                    <h1 className="heading-xl text-primary text-center max-w-[900px]">
                        Comprehensive Trading & Contracting <br /> Solutions Under One Roof
                    </h1>
                    <p className="max-w-[659px] text-grey-800 body-md">
                        From procurement to project execution, Alsais Trading Co. delivers tailored solutions with <br />
                        unmatched reliability and professionalism.
                    </p>
                    <LinkButton href={"/contact-us"}>
                        Submit an Enquiry
                    </LinkButton>
                </div>

            </div>
            <HeroBannerSlider banners={banners} />
        </section>
    )
}
