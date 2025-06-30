import AchievementCard from "@/components/elements/achievement-card";
import Container from "@/components/ui/container";
import data from "@/data/home.json";

export default function OurVisionAndMissionSection() {
    const statistics = data.sections.about.statistics
    return (
        <Container className="py-12 md:py-24">
            <div className="space-y-7 max-w-[1063px]">
                <h2 className="heading-md text-primary">
                Our sustainability strategy has been framed by our vision and the mission while synthesized and blended by our core values rooted from and for common good for the good of generations stressing the focuses on three dimensions planet,
                people, and the stakeholders simultaneously.
            </h2>
            <p className="body-md text-grey-800">
                At All Says, we intend to achieve this through our processes, high quality products brands and services, and the distribution channels towards the resource- efficient, Zero emission, and the reduced environmental warming future.
            </p>
            <div className="flex gap-x-2.5 max-md:flex-wrap gap-y-3">
                {
                    statistics.map((achievement, index) => (
                        <AchievementCard
                            key={index}
                            count={achievement.count}
                            description={achievement.description}
                            type={achievement.name}
                            className="max-w-[213px]"
                        />
                    ))
                }
            </div>
            </div>
        </Container>
    )
}
