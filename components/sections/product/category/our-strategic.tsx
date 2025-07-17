import ValueCard from "@/components/elements/value-card";
import Container from "@/components/ui/container";

export default function OurStrategicSection() {
    return (
        <Container className="pb-12 md:pb-24 space-y-7 md:space-y-14">
            <h2 className="text-primary text-center heading-md max-w-[832px] mx-auto">
                Explore cutting-edge tools for efficient finance management and strategic insights.
            </h2>
            <div className=" grid gap-y-4 md:grid-cols-2 lg:flex gap-x-9">
                {
                    ourValues.map((item, index) => (
                        <ValueCard
                            className="[&>.icon-container]:bg-grey-100 [&>.icon-container]:rounded-full flex-1"
                            description={item.description}
                            title={item.title}
                            key={index}
                        />
                    ))
                }
            </div>
        </Container>
    )
}


const ourValues = [
    {
        title: "Wide Range of Food Products",
        description: "From dry goods to perishable items, we offer a comprehensive selection tailored to client requirements."
    },
    {
        title: "Wide Range of Food Products",
        description: "From dry goods to perishable items, we offer a comprehensive selection tailored to client requirements."
    },
    {
        title: "Wide Range of Food Products",
        description: "From dry goods to perishable items, we offer a comprehensive selection tailored to client requirements."
    },
    {
        title: "Wide Range of Food Products",
        description: "From dry goods to perishable items, we offer a comprehensive selection tailored to client requirements."
    }
]