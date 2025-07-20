import { newsService } from "@/service/strapi"
import { unstable_cache } from "next/cache"

export const getNews = unstable_cache(async () => {
  return newsService.find({
    populate: {
      cover: true,
    }
  })
}, [], { tags: ['news-and-publication'] })

export const getNewsByslug = unstable_cache(async (slug: string) => {
    return newsService.findBySlug(slug, {
        populate: {
            cover: true,
        }
    }
    )
}, [], { tags: ['news-and-publication'] })