import CareerApplicationForm from "@/components/elements/career-application-form";
import { CareerDetailHeroSection, ContentSection } from "@/components/sections/career";
import Container from "@/components/ui/container";
import { careerService } from "@/service/strapi";
import { unstable_cache } from "next/cache";

const getCacheCareerBySlug = unstable_cache(async (slug: string) => {
  return careerService.findBySlug(slug, {})
}, [], { tags: ['career'] })

export default async function Page({ slug }: { slug: string }) {

  const { data } = await getCacheCareerBySlug(slug);

  const openning = data[0]

  return (
    <>
      <CareerDetailHeroSection {...openning} />
      <Container className="max-w-[900px] py-12 space-y-5 md:space-y-10">
        <ContentSection content={openning?.description ?? ""} />
        <CareerApplicationForm id={openning?.documentId ?? ""} />
      </Container>
    </>
  )
}
