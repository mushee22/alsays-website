import { SustainabilityAboutSectionImage } from "@/assets";
import Container from "@/components/ui/container";
import Image from "next/image";

export default function AbouSection() {
    return (
        <Container className="section-spacing flex flex-col md:flex-row  gap-x-4 justify-between items-center">
            <div className="flex-1 lg:max-w-[575px] space-y-7">
                <h3 className="heading-md text-primary">
                    All Says is committed to social and environmental initiatives to strengthen the social fabric within the products and services offerings of the regions.
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
                    All Says have been done some initiatives in care of green environment such as growing trees and reduces the use of plastics and the environmentally harmful articles. As a leading distributor of products and services,
                    All Says add suppliers who are in line with the standards of sustainability and the principles of sustainability sciences. All Says have been maintained to grow trees around its warehouse premises. All Says takes into the role of the welfare state through the provision of social programs,
                    including health care, education and food aid.
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
