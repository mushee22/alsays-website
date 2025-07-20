import { getNews } from "@/api/new-and-publication"
import { ListSection } from "@/components/sections/news"

export default async function BlogPage() {

  const { data: news = [] } = await getNews()

  return (
    <>
      <ListSection news={news} />
    </>
  )
}
