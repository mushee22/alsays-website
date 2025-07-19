import { CareerDetailPage } from "@/components/pages"
import { careerService } from "@/service/strapi"
import { PageParams } from "@/types"

export async function generateStaticParams() {
  const { data } = await careerService.find()
  return data.map((opening) => ({
    slug: opening.id.toString(10) // Assuming the slug is the ID converted to string,
  }))
}

export default async function Page({params}: PageParams) {
   const { slug } = await params
  return (<CareerDetailPage slug={slug}/>)
}
