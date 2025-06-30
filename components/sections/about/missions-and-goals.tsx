import Container from "@/components/ui/container";
import { cn } from "@/lib/utils";

export default function OurMissionsAndGoalsSection() {
  return (
    <Container className="section-spacing pt-12 md:pt-24">
      <div className="flex flex-col lg:flex-row gap-4">
        <div className="flex-1 flex flex-col  gap-y-5 md:gap-y-10">
          <span className="subheading">MISSION, VISION + GOALS</span>
          <h2 className="heading-md text-primary">At All Says, we always focus on quality and consistency with good enough market acceptance</h2>
          <div className="aspect-[3/4] max-h-[463px]  lg:hidden  bg-grey-100 rounded-3xl">

          </div>
          <p className="body-md text-primary">
            At All Says, our story started with the distribution of high-quality pure rubber flooring mats.
            Adaptability and change are key aspects to continued evolution, and as a result, All Says recognized the need to diversify its product
            range to ensure future growth. Accordingly, we have been enlarged our portfolios from flooring mats to FMCG products,
            Automotive Spare parts, Heavy Equipment parts, HVAC products, Oilfield equipment, construction materials, foodstuffs,
            and Climate changes & Environmental safety products committed to helping customers to buy a diverse range of products and services.
            All Says have been in care of sustaining the ecosystems of sustainability sciences, thus, by our core values, as a mandate of caring the environment,
            human, and the economic goals simultaneously. All Says serves B2B, B2G, B2C,
            and C2C customer’s needs including both offline and the online channels as well.
            As customers are seeking for better products and services, All Says’ dedication to customer satisfaction, reliability, flexibility, speedy, faster
            responses,
            and good value for money offerings with the rational that every market inquiry is as an exceptional.
          </p>
          <span className="title-lg text-primary">With us, let it be a good moment, we, the All Says, welcome to do business with us!</span>
        </div>
        <div className="aspect-[412/463] hidden lg:block w-[412px] bg-grey-100 rounded-3xl">

        </div>
      </div>
      <div className="flex flex-col md:flex-row mt-5 md:mt-10 gap-2.5">
        <MissionAndVisionCard
          description="To Sustain as a Flagship Company on the World Map of Boundaryless Market Ecosystems.  "
          title="Our Vision"
          type="vision"
        />
        <MissionAndVisionCard
          description="Uprooting through the grassroots changes on the logics for our approaches to businesses interconnecting the ‘’common good’’ with the healthy organizational ecology which fulfil & satisfy the needs of our total stakeholders in a sustainable manner with providing high quality product brands and the best services across diverse industries in line with the principles of sustainability sciences"
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