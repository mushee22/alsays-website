import Container from "@/components/ui/container";
import LinkButton from "@/components/ui/link-button";

import { SustainabilityAboutSectionImage } from "@/assets";

import AchievementCard from "@/components/elements/achievement-card";
import data from "@/data/home.json";
import Image from "next/image";

export default function AboutSection() {

    const { subHeading, title, description, action, statistics } = data.sections.about

    return (
        <Container className="section-spacing">
            <div className="flex flex-col-reverse lg:flex-row justify-between">
                <div className="flex items-start flex-1 flex-col gap-y-7 lg:max-w-[650px]">
                    <span className="uppercase text-grey-800 title-lg">{subHeading}</span>
                    <h2 className="text-primary heading-md">
                        {title}
                    </h2>
                    <span className="body-md text-grey-800">
                        {description}
                    </span>
                    <LinkButton href={action.path}>
                        {action.title}
                    </LinkButton>
                    <div className="grid  sm:grid-cols-3 gap-2.5">
                        {
                            statistics.map((statistic) => (
                                <AchievementCard
                                    key={statistic.name}
                                    count={statistic.count}
                                    description={statistic.description}
                                    type={statistic.name}
                                    variant="home"
                                />
                            ))
                        }
                    </div>
                </div>
                <div className="py-6">
                    <div className="aspect-[487/529] relative rounded-2xl overflow-hidden lg:w-[487px]">
                        <Image
                            src={SustainabilityAboutSectionImage}
                            alt={title}
                            fill
                        />
                    </div>
                </div>
            </div>
        </Container>
    )
}
