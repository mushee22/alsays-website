import { getBlogs } from "@/api/blog";
import { BlogListSection, LatestBlogSection } from "@/components/sections/blog";




export default async function BlogPage() {

  const { data: blogs = [] } = await getBlogs();

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
