import { OurCultureImage } from "@/assets";
import Container from "@/components/ui/container";
import data from "@/data/career.json";
import Image from "next/image";

export default function OurWorkCultureSection() {

    const section = data.sections.ourWorkCulture

    return (
        <Container className="section-spacing flex flex-col lg:flex-row gap-x-20">
            <div className="space-y-4 md:space-y-4 flex-1">
                <p className="subheading">{section.subHeading}</p>
                <h2 className="heading-md text-primary">{section.title}</h2>
                <p className="body-md text-grey-800">{section.description}</p>
                <div>
                    <Image
                     src={OurCultureImage}
                     alt="our culture image"
                    />
                </div>
            </div>
            <div className="flex-1 flex gap-x-2 max-lg:hidden">
                <div className="flex flex-col gap-y-6.5">
                    <div className="aspect-[241/273] w-[241px] bg-[#d9d9d9] rounded-3xl ml-4"></div>
                    <div className="aspect-[241/273] w-[241px] bg-[#d9d9d9] rounded-3xl"></div>
                </div>
                <div className="flex flex-col justify-center">
                    <div className="aspect-[333/377] h-[337px] bg-[#d9d9d9] rounded-3xl"></div>
                </div>
            </div>
            <div className="flex-1 flex gap-x-2 lg:hidden ">
                    <div className="aspect-[241/273] w-[241px] bg-[#d9d9d9] rounded-3xl"></div>
                    <div className="aspect-[241/273] w-[241px] bg-[#d9d9d9] rounded-3xl"></div>
                    <div className="aspect-[241/273] w-[241px] bg-[#d9d9d9] rounded-3xl"></div>
            </div>
        </Container>
    )
}
