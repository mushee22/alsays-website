import { BlogListSection, LatestBlogSection } from "@/components/sections/blog";
import { blogService } from "@/service/strapi";
import { unstable_cache } from "next/cache";

const getCacheBlog = unstable_cache(async () => {
  return blogService.find({
    populate: {
      cover: true,
    }
  })
}, [], {
  tags: ['blog']
})


export default async function BlogPage() {

  const { data: blogs = [] } = await getCacheBlog();

  const latestBlogs = blogs.slice(0, 2);
  const otherBlogs = blogs.slice(2);

  return (
    <>
      {
        latestBlogs.length > 0 && <LatestBlogSection blogs={latestBlogs} />
      }
      {
        otherBlogs.length > 0 && <BlogListSection blogs={otherBlogs} />
      }
    </>
  )
}
