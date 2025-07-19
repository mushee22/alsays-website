
import { NewsDetaisPage } from "@/components/pages"
import { newsService } from "@/service/strapi"
import { PageParams } from "@/types"

export async function generateStaticParams() {
  const { data } = await newsService.find()
  return data.map((news) => ({
    slug: news.slug,
  }))
}


export default async function Page({params}: PageParams) {
   const { slug } = await params
  return (
    <NewsDetaisPage slug={slug}/>
  )
}