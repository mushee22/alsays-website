import { SustainabilityAboutSectionImage } from "@/assets";
import Container from "@/components/ui/container";
import Image from "next/image";

export default function AbouSection() {
    return (
        <Container className="section-spacing flex flex-col md:flex-row  gap-x-4 justify-between items-center">
            <div className="flex-1 lg:max-w-[575px] space-y-7">
                <h3 className="heading-md text-primary">
                    AL Says is committed to social and environmental initiatives that strengthen the social fabric within the regions we serve.
                </h3>
                <div className="aspect-[487/529] relative overflow-hidden w-full h-[265px] md:hidden lg:w-[487px] bg-grey-800 rounded-3xl">
                    <Image
                        src={SustainabilityAboutSectionImage}
                        alt=""
                        fill
                        className="object-cover"
                    />
                </div>
                <p className="text-grey-800 body-md">
                    We have undertaken several green initiatives,
                    such as planting trees and reducing the use of plastics and other environmentally harmful materials.
                    As a leading distributor of products and services, 
                    AL Says works with suppliers who align with recognized sustainability standards and the principles of sustainability science. 
                    We also maintain green spaces by planting trees around our warehouse premises. 
                    AL Says embraces its role in social responsibility by supporting welfare-oriented programs,
                    including healthcare, education, and food aid.
                </p>
            </div>
            <div className="aspect-[487/529] w-[400px] relative overflow-hidden hidden md:block lg:w-[487px] bg-grey-800 rounded-3xl">
                <Image
                    src={SustainabilityAboutSectionImage}
                    alt=""
                    fill
                />
            </div>
        </Container>
    )
}
