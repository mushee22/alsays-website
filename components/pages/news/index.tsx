import { ListSection } from "@/components/sections/news"
import { newsService } from "@/service/strapi"
import { unstable_cache } from "next/cache"

const getCacheNews = unstable_cache(async () => {
  return newsService.find({
    populate: {
      cover: true,
    }
  })
}, [], { tags: ['news-and-publication'] })

export default async function BlogPage() {

  const { data: news = [] } = await getCacheNews()

  return (
    <>
      <ListSection news={news} />
    </>
  )
}
