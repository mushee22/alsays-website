import { AboutHeroSectionBgImage } from "@/assets";
import CareerApplicationForm from "@/components/elements/career-application-form";
import { CareerOpening } from "@/types";
import Image from "next/image";


export default function CareerDetailHeroSection({ positionName, documentId, locationType, description }: CareerOpening) {
    return (
        <section className="relative pt-24 lg:pt-24 pb-12.5">
            <Image
                src={AboutHeroSectionBgImage}
                alt=""
                fill
                className="-z-10"
            />
            <div className="container md:pt-24  max-w-[900px] md:pb-12 flex flex-col md:flex-row gap-x-2.5 justify-between gap-y-5 md:items-end">
                <div className="flex flex-col gap-y-5 md:gap-y-8">
                    <span>{locationType}</span>
                    <h1 className="heading-md">
                        {positionName}
                    </h1>
                    <p className=" body-md line-clamp-2">
                        {description}
                    </p>
                </div>
                <CareerApplicationForm id={documentId} />
            </div>
        </section>
    )
}
