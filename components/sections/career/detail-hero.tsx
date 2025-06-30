import { AboutHeroSectionBgImage } from "@/assets";
import LinkButton from "@/components/ui/link-button";
import Image from "next/image";


export default function CareerDetailHeroSection() {
    return (
        <section className="relative pt-14 lg:pt-24 pb-12.5">
            <Image
                src={AboutHeroSectionBgImage}
                alt=""
                fill
                className="-z-10"
            />
            <div className="container md:pt-24  max-w-[900px] md:pb-12 flex flex-col md:flex-row gap-x-2.5 justify-between gap-y-5 md:items-end">
                <div className="flex flex-col gap-y-5 md:gap-y-8">
                    <span>Remote · Full-Time</span>
                    <h1 className="heading-md">
                        Senior Application Engineer, Business Platform
                    </h1>
                    <p className=" body-md">
                      Understand the correlation of community involvement and customer retention and renewals.
                    </p>
                </div>
                <LinkButton href={""}>Applya now</LinkButton>
            </div>
        </section>
    )
}
