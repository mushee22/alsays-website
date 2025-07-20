import { MODEL_NAME } from "@/constant/strapi"
import { careerService } from "@/service/strapi"
import { unstable_cache } from "next/cache"

export const getCareers = unstable_cache(async () => {
    return careerService.find({})
}, [], { tags: [MODEL_NAME.career] })

export const getCareerBySlug =  unstable_cache(async (slug: string) => {
  return careerService.findBySlug(slug, {})
}, [], { tags: [MODEL_NAME.career] })