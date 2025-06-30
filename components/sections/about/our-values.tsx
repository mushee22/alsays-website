import ValueCard from "@/components/elements/value-card";
import Container from "@/components/ui/container";

export default function OurValuesSection() {
    return (
        <section className=" bg-[#F5F5F7]">
            <Container className="py-12 md:py-24">
                <div className="flex flex-col items-center max-w-[750px] space-y-7 mx-auto">
                    <h2 className="title">Our Values</h2>
                    <span className="text-grey-800 body-sm text-center">We value integrity, excellence, safety, and customer satisfaction, driving every service with trust, quality, and commitment.</span>
                </div>
                <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6 mt-10">
                    <ValueCard
                        description="We act with honesty, fairness, and responsibility in all our dealings."
                        title="Common Good"
                    />
                    <ValueCard
                        description="We act with honesty, fairness, and responsibility in all our dealings."
                        title="Common Good"
                    />
                    <ValueCard
                        description="We act with honesty, fairness, and responsibility in all our dealings."
                        title="Common Good"
                    />
                    <ValueCard
                        description="We act with honesty, fairness, and responsibility in all our dealings."
                        title="Common Good"

                    />
                    <ValueCard
                        description="We act with honesty, fairness, and responsibility in all our dealings."
                        title="Common Good"

                    />
                    <ValueCard
                        description="We act with honesty, fairness, and responsibility in all our dealings."
                        title="Common Good"
                    />
                    <ValueCard
                        description="We act with honesty, fairness, and responsibility in all our dealings."
                        title="Common Good"
                    />
                </div>
            </Container>
        </section>
    )
}
