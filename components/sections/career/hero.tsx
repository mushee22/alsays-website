
import { CareerImage } from "@/assets"
import Container from "@/components/ui/container"
import LinkButton from "@/components/ui/link-button"
import data from "@/data/career.json"
import Image from "next/image"

export default function HeroSection() {

    const section = data.sections.hero

    return (
        <Container className="lg:mt-24 py-12 lg:py-24">
            <div className="flex flex-col items-center gap-y-4 md:gap-y-7">
                <h1 className="title text-primary text-center">{section.heading}</h1>
                <p className="text-grey-800 max-w-[715px] mx-auto text-center">{section.description}</p>
                <LinkButton href="#CAREERS">View positions</LinkButton>
            </div>
            <div className="aspect-[1006/566]  max-w-[1006px] relative mx-auto mt-5 md:mt-10 lg:mt-20">
                <Image
                    src={CareerImage}
                    alt="career page"
                    fill
                />
            </div>
        </Container>
    )
}
