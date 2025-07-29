import Container from "@/components/ui/container";
import Image from "next/image";

import { AboutHeroSectionBgImage } from "@/assets";
import AchievementCard from "@/components/elements/achievement-card";

export default function HeroSection() {
    return (
        <Container className="max-w-screen relative pt-24 lg:pt-24 pb-12.5">
            <Image
                src={AboutHeroSectionBgImage}
                alt=""
                fill
                className="-z-10"
            />
            <div className="container lg:pt-24 flex flex-col items-center space-y-7 max-w-[900px] pb-12">
                <h1 className="heading-lg">About AL Says</h1>
                <p className="text-center body-md">
                    AL SAYS COMPANY FZE, the flagship business organization, has been widely known as “AL Says”, 
                    with its headquarters in Dubai, United Arab Emirates. It was founded in 2016, with a direct market presence in 12 countries and product sales across 100 countries, 
                    achieving a strong market share across diverse industries. 
                    At AL Says, our story began with the distribution of high-quality pure rubber flooring mats. 
                    We have always focused on quality and consistency, earning solid market acceptance. 
                    Adaptability and change are key aspects of continued evolution, and as a result, AL Says recognized the need to diversify its product range to ensure future growth.
                </p>
            </div>
            <div className="container flex flex-wrap justify-center gap-y-4 mt-3 md:mt-7 ">
                <AchievementCard
                    count="200+"
                    type="Project"
                    description="Successfully Completed Across Saudi Arabia"
                    className="items-center max-w-[220px]"
                    data-text="center"
                    variant="about"
                />
                <AchievementCard
                    count="50+"
                    type="Clients"
                    description="Trusted Partners in Public & Private Sectors"
                    className="items-center max-w-[220px]"
                    data-text="center"
                    variant="about"
                />
                <AchievementCard
                    count="100%"
                    type="Commitments"
                    description="To Quality, Safety & Client Satisfaction"
                    className="items-center max-w-[220px]"
                    data-text="center"
                    variant="about"
                />
            </div>
        </Container>
    )
}
