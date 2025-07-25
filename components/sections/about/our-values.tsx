import ValueCard from "@/components/elements/value-card";
import Container from "@/components/ui/container";

export default function OurValuesSection() {
    return (
        <section className=" bg-[#F5F5F7]">
            <Container className="py-12 md:py-24">
                <div className="flex flex-col items-center max-w-[750px] space-y-7 mx-auto">
                    <h2 className="title">Our Values</h2>
                    <span className="text-grey-800 body-sm text-center">
                        We value integrity, excellence, safety, and customer satisfaction, driving every service with trust, quality, and commitment.
                    </span>
                </div>
                <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6 mt-10">
                    {
                        valus.map((value, index) => (
                            <ValueCard
                                key={value.title + index}
                                title={value.title}
                                description={value.description}
                            />
                        ))
                    }
                   
                </div>
            </Container>
        </section>
    )
}


const valus = [
    {
        title: "Common Good",
        description: "We act with honesty, fairness, and responsibility in all our dealings."
    },
    {
        title: "Collaborations",
        description: "We strive for the highest standards in quality, service, and performance."
    },
    {
        title: "People-first at work",
        description: "Our clients are at the center of everything we do."
    },
    {
        title: "Clean Natural Environment",
        description: "We uphold strict safety protocols and regulatory compliance in all operations."
    },
    {
        title: "Reduce the environmental warming",
        description: "mprove services and exceed expectations."
    },
    {
        title: "Continuous learning",
        description: "We value teamwork and long-term relationships with our clients, partners, and employees."
    },
    {
        title: "Resilience",
        description: "We value teamwork and long-term relationships with our clients, partners, and employees."
    },
    {
        title: "Interdependent and interconnected",
        description: "Relationships with our clients, partners, and employees."
    },
    {
        title: "Integrity",
        description: "We value teamwork and long-term relationships with our clients, partners, and employees."
    }
]