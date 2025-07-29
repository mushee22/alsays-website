import AchievementCard from "@/components/elements/achievement-card";
import Container from "@/components/ui/container";
import data from "@/data/home.json";

export default function OurVisionAndMissionSection() {
    const statistics = data.sections.about.statistics
    return (
        <Container className="py-12 md:py-24">
            <div className="space-y-7 max-w-[1063px]">
                <h2 className="heading-md text-primary">
                Our sustainability strategy is guided by our vision and mission and is shaped by our core values, 
                which are rooted in the idea of serving the greater good for future generations. 
                It emphasizes three key dimensions: planet, people, and stakeholders, all addressed simultaneously.
            </h2>
            <p className="body-md text-grey-800">
                 At AL Says, we aim to achieve this through our processes, high-quality product brands and services, 
                 and efficient distribution channels that contribute to a resource-efficient, zero-emission, 
                 and environmentally sustainable future.
            </p>
            <div className="flex gap-x-3.5 md:gap-x-6 lg:gap-x-8 max-md:flex-wrap gap-y-3">
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
