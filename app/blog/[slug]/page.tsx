import { BlogDetailsPage } from "@/components/pages"
import { blogService } from "@/service/strapi"
import { PageParams } from "@/types"

export async function generateStaticParams() {
  const { data } = await blogService.find()
  return data.map((blog) => ({
    slug: blog.slug,
  }))
}

export default async function page({params}: PageParams) {
  const { slug } = await params
  return (<BlogDetailsPage slug={slug} />)
}
