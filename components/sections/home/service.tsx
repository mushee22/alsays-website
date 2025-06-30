import ServiceCard from "@/components/elements/service-card";
import Container from "@/components/ui/container";
import LinkButton from "@/components/ui/link-button";

export default function ServiceSection() {
    return (
        <Container className="section-spacing">
            <div className="grid md:grid-cols-2 gap-y-4 gap-x-6">
                <h2 className="text-primary heading-md">
                    Explore cutting-edge tools for efficient finance management and strategic insights.
                </h2>
                <div className="space-y-9">
                    <p className="body-md text-grey-800">
                        Lorem ipsum dolor sit amet consectetur. Nec velit ipsum velit ac vulputate suspendisse arcu.
                        Eget eu amet sed quam cursus scelerisque velit.
                    </p>
                    <LinkButton href={""}>
                        Explore services
                    </LinkButton>
                </div>
            </div>
            <div className="mt-10 flex max-sm:justify-center w-full gap-y-4 flex-col md:flex-row gap-x-4 service-container">
                <ServiceCard />
                <ServiceCard />
                <ServiceCard />
            </div>
        </Container>
    )
}
