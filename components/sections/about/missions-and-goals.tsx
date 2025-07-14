import { AboutLeftImage } from "@/assets";
import Container from "@/components/ui/container";
import { cn } from "@/lib/utils";
import Image from "next/image";

export default function OurMissionsAndGoalsSection() {
  return (
    <Container className="section-spacing pt-12 md:pt-24">
      <div className="flex flex-col lg:flex-row gap-4">
        <div className="flex-1 flex flex-col  gap-y-5 md:gap-y-10">
          <span className="subheading">MISSION, VISION + GOALS</span>
          <h2 className="heading-md text-primary">
            At AL Says, we always focus on quality and consistency with good enough market acceptance
          </h2>
          <div className="aspect-[3/4] max-h-[463px] relative  lg:hidden  bg-grey-100 rounded-3xl">
            <Image
              src={AboutLeftImage}
              alt="About AL Says"
              fill
            />
          </div>
          <p className="body-md text-primary">
            As mentioned above, we are expanding our product portfolio beyond flooring mats to include FMCG products,
            automotive spare parts, heavy equipment parts, HVAC products, oilfield equipment, construction materials, foodstuffs,
            and climate change & environmental safety products.
            We are committed to helping customers access a diverse range of products and services by
            collaborating with leading international brands. This enables us to ensure the supply of
            high-quality products at the most competitive prices, aiming to compete in the global market
            and drive continued success. By taking flexible strategic steps, we operate with a highly
            customer-focused approach and pursue sustainable growth with a boundaryless vision.
            <br />
            AL Says serves the needs of B2B, B2G, B2C, and C2C customers across offline, online, wholesale,
            and above-wholesale channels. AL Says has been committed to sustaining the ecosystems aligned with sustainability goals.
            Guided by our core values, we embrace the mandate of caring for the natural environment,
            social well-being, and economic development simultaneously.
          </p>
          <span className="title-lg text-primary">
            Thereof, we as a flagship business organization, let this be a good moment for our valuable customers hereof for a {"‘’"}big picture{"’’"} together with AL Says
          </span>
        </div>
        <div className="aspect-[412/463] hidden relative lg:block w-[412px] bg-grey-100 rounded-3xl">
          <Image
            src={AboutLeftImage}
            alt="About AL Says"
            fill
          />
        </div>
      </div>
      <div className="flex flex-col md:flex-row mt-5 md:mt-10 gap-2.5">
        <MissionAndVisionCard
          description="To Sustain as a Flagship Company on the World Map of Boundaryless Market Ecosystems."
          title="Our Vision"
          type="vision"
        />
        <MissionAndVisionCard
          description="Uprooting from the grassroots, we are reshaping the logic behind our business approaches by interconnecting the “common good” with a healthy organizational ecology. This enables us to fulfil and satisfy the needs of all our stakeholders in a sustainable manner by providing high-quality product brands and the best services across diverse industries, in line with global sustainability goals."
          title="Our Mission"
          type="mission"
        />
      </div>
    </Container>
  )
}


function MissionAndVisionCard({ title, description, type }: { title: string, description: string, type: "mission" | "vision" }) {

  const classMap = {
    "vision": " md:basis-[30%] bg-linear-(--secondary-gradient)",
    "mission": "flex-1 bg-success-100"
  }

  return (
    <div className={cn(' p-8 lg:p-12 rounded-2xl space-y-6', classMap[type])}>
      <h3 className="heading-sm">{title}</h3>
      <span className="body-md">{description}</span>
    </div>
  )
}