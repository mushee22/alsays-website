import { BlogListSection, LatestBlogSection } from "@/components/sections/blog";
import { blogService } from "@/service/api";


export default async function BlogPage() {

  const { data: blogs = [] } = await blogService.find({
    populate: {
      cover: true,
    }
  })

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
