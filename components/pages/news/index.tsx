import { ListSection } from "@/components/sections/news"
import { newsService } from "@/service/api"

export default async function BlogPage() {

  const { data: news = [] } = await newsService.find({
    populate: {
      cover: true,
    }
  })

  return (
    <>
     <ListSection news={news}/>
    </>
  )
}
