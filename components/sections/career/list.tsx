import CareerCard from "@/components/elements/career-card";
import Container from "@/components/ui/container";
import { careerService } from "@/service/strapi";
import { unstable_cache } from "next/cache";

const getCacheCareer = unstable_cache(async () => {
    return careerService.find({})
}, [], { tags: ['career'] })

export default async function CareerListSection() {

    const { data: careers } = await getCacheCareer()

    return (
        <section id="CAREERS" className="bg-primary py-12 md:py-24 space-y-5 md:space-y-10">
            <h2 className="text-center heading-md">Current Openings</h2>
            <Container>
                <div className="space-y-6 md:space-y-12.5">
                    {
                        careers.map((opening, index) => (
                            <CareerCard
                                {...opening}
                                key={index}
                            />
                        ))
                    }
                </div>
            </Container>
        </section>
    )
}
