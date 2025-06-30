import Container from "@/components/ui/container";
import Image from "next/image";

import { AboutHeroSectionBgImage } from "@/assets";
import AchievementCard from "@/components/elements/achievement-card";

export default function HeroSection() {
    return (
        <Container className="max-w-screen relative pt-12 lg:pt-24 pb-12.5">
            <Image
                src={AboutHeroSectionBgImage}
                alt=""
                fill
                className="-z-10"
            />
            <div className="container lg:pt-24 flex flex-col items-center space-y-7 max-w-[900px] pb-12">
                <h1 className="heading-lg">About AL Says</h1>
                <p className="text-center body-md">AL SAYS COMPANY FZE has been known as All Says, the ‘’flagship’’ company owns by a group of company widely known as ZAZ Global Trading one of the world’s largest shipping & the logistics companies with headquarters in Dubai – United Arab Emirates was found in 2006 with direct market presence in 12 countries sell products across 100 countries with good market share from diverse industries.</p>
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
                    count="200+"
                    type="Project"
                    description="Successfully Completed Across Saudi Arabia"
                    className="items-center max-w-[220px]"
                    data-text="center"
                    variant="about"
                />
                <AchievementCard
                    count="200+"
                    type="Project"
                    description="Successfully Completed Across Saudi Arabia"
                    className="items-center max-w-[220px]"
                    data-text="center"
                    variant="about"
                />
            </div>
        </Container>
    )
}
