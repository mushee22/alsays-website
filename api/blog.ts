import { blogService } from "@/service/strapi"
import { unstable_cache } from "next/cache"

export const getBlogs = unstable_cache(async () => {
  return blogService.find({
    populate: {
      cover: true,
    }
  })
}, [], {tags: ['blog']})

export const getBlogBySlug = unstable_cache(async (slug: string) => {
    return blogService.findBySlug(slug, {
        populate: {
            cover: true,
        }
    }
    )
}, [], {tags: ['blog']})