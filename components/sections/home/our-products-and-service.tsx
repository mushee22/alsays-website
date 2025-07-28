import ServiceAndProductCard from "@/components/elements/service-and-products-card";
import Container from "@/components/ui/container";
// import LinkButton from "@/components/ui/link-button";

import data from "@/data/home.json";

export default function OurProductAndServicesSection() {

    const { title, subHeading, description, action, productsAndServices } = data.sections.ourProductAndService

    return (
        <Container className="section-spacing">
            <div id="title-section" className="flex flex-col items-center gap-y-7">
                <span className="title-lg text-grey-800">{subHeading}</span>
                <h2 className="text-primary heading-md">{title}</h2>
                <span className="body-md text-grey-800 max-w-[660px] text-center">{description}</span>
                {/* <LinkButton href={action.path}>{action.title}</LinkButton> */}
            </div>
            <div className="mt-8 md:mt-16 space-y-4 md:space-y-8">
                {
                    productsAndServices.map((productsAndService, index) => (
                        <ServiceAndProductCard
                            btnLabel={productsAndService.action.title}
                            path={productsAndService.action.path}
                            description={productsAndService.description}
                            services={productsAndService.services}
                            name={productsAndService.name}
                            key={productsAndService.name + index}
                            coverImage={productsAndService.coverImage}
                        />
                    ))
                }
            </div>
        </Container>
    )
}
