import { WhyChooseUsImage } from "@/assets";
import Container from "@/components/ui/container";
import Image from "next/image";

export default function WhyChooseUsSection() {
    return (
        <Container className="section-spacing flex flex-col gap-y-6 lg:flex-row justify-between">
            <div className="max-w-[578px] flex flex-col gap-y-5 items-start">
                <p className="title-lg text-grey-800">Why Choose Us</p>
                <h2 className="heading-md text-primary">Collect insights you can trust</h2>
                <p className="body-sm text-grey-800">
                    Alsais Trading Co. stands out for its commitment to quality, reliability, and customer satisfaction.
                    Our expert team combines technical knowledge with hands-on experience
                    to deliver efficient Operations and Maintenance solutions tailored to your business.
                    With flexible service plans and 24/7 support,
                    we ensure smooth, uninterrupted operations you can trust.
                </p>
                <div className="aspect-[488/466] hidden md:block h-[466px] self-center relative">
                    <Image
                        src={WhyChooseUsImage}
                        alt="Why choose us"
                        fill
                    />
                </div>
            </div>
            <div className="max-w-[545px] space-y-8">
                {
                    ourFeatures.map((feature) => (
                        <Feature
                            description={feature.description}
                            feature={feature.feature}
                            key={feature.feature}
                        />
                    ))
                }
            </div>
        </Container>
    )
}


const Feature = ({ feature, description }: { feature: string, description: string }) => {
    return (
        <div className="flex gap-x-2 items-baseline pb-4 border-b border-grey-100">
            <div>
                <svg
                    width={12}
                    height={14}
                    viewBox="0 0 12 14"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path
                        d="M10.3595 1.74689L6.69288 0.373555C6.31288 0.233555 5.69288 0.233555 5.31288 0.373555L1.64621 1.74689C0.939544 2.01355 0.366211 2.84022 0.366211 3.59355V8.99355C0.366211 9.53355 0.719544 10.2469 1.15288 10.5669L4.81954 13.3069C5.46621 13.7936 6.52621 13.7936 7.17288 13.3069L10.8395 10.5669C11.2729 10.2402 11.6262 9.53355 11.6262 8.99355V3.59355C11.6329 2.84022 11.0595 2.01355 10.3595 1.74689ZM8.31954 5.48022L5.45288 8.34689C5.35288 8.44689 5.22621 8.49355 5.09954 8.49355C4.97288 8.49355 4.84621 8.44689 4.74621 8.34689L3.67954 7.26689C3.48621 7.07355 3.48621 6.75355 3.67954 6.56022C3.87288 6.36689 4.19288 6.36689 4.38621 6.56022L5.10621 7.28022L7.61954 4.76689C7.81288 4.57355 8.13288 4.57355 8.32621 4.76689C8.51954 4.96022 8.51954 5.28689 8.31954 5.48022Z"
                        fill="#085E5C"
                    />
                </svg>
            </div>
            <div className="flex-1">
                <p className="title-lg text-grey-900">{feature}</p>
                <span className="body-md text-grey-800">{description}</span>
            </div>
        </div>
    )
}

const ourFeatures = [
    {
        feature: "Proven track record in O&M services across industrial, commercial, and governmental sectors",
        description: "Understand the correlation of community involvement and customer retention and renewals."
    },
    {
        feature: "Compliance with international safety and quality standards",
        description: "Understand the correlation of community involvement and customer retention and renewals."
    },
    {
        feature: "Customized service plans based on client requirements",
        description: "Understand the correlation of community involvement and customer retention and renewals."
    },
    {
        feature: "Reliable support and efficient turnaround times",
        description: "Understand the correlation of community involvement and customer retention and renewals."
    }
]