import CareerCard from "@/components/elements/career-card";
import Container from "@/components/ui/container";
import data from "@/data/career.json";

export default function CareerListSection() {

    const section = data.sections.career

    return (
        <section className="bg-primary py-12 md:py-24 space-y-5 md:space-y-10">
            <h2 className="text-center heading-md">Current Openings</h2>
            <Container>
                <div className="space-y-6 md:space-y-12.5">
                    {
                        section.openings.map((opening, index) => (
                            <CareerCard
                                name={opening.title}
                                type={opening.type}
                                key={index}
                            />
                        ))
                    }
                </div>
            </Container>
        </section>
    )
}
