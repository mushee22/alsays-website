import BlogCard from "@/components/elements/blog-card";
import Container from "@/components/ui/container";
import { Blog } from "@/types";

export default function BlogListSection({ blogs }: { blogs?: Blog[] }) {
  return (
    <Container className="section-spacing">
      <h2 className="heading-md text-primary">More from the blog</h2>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 mt-5 md:mt-10">
        {
          blogs?.map((blog, index) => (
            <BlogCard
              key={index}
              {...blog}
            />
          ))
        }

        {/* <BlogCard
          createdAt="February 18, 2025"
          title="Coming soon! New updates & features for Ionic’s Open Source projects"
          className="**:data-title:text-lg"
          coverImage={BlogImageOne}
        />
        <BlogCard
          createdAt="February 18, 2025"
          title="Coming soon! New updates & features for Ionic’s Open Source projects"
          className="**:data-title:text-lg"
          coverImage={BlogImageTwo}
        />
        <BlogCard
          createdAt="February 18, 2025"
          title="Coming soon! New updates & features for Ionic’s Open Source projects"
          className="**:data-title:text-lg"
          coverImage={BlogImageThree}
        />
        <BlogCard
          createdAt="February 18, 2025"
          title="Coming soon! New updates & features for Ionic’s Open Source projects"
          className="**:data-title:text-lg"
        />
        <BlogCard
          createdAt="February 18, 2025"
          title="Coming soon! New updates & features for Ionic’s Open Source projects"
          className="**:data-title:text-lg"
        />
        <BlogCard
          createdAt="February 18, 2025"
          title="Coming soon! New updates & features for Ionic’s Open Source projects"
          className="**:data-title:text-lg"
        />
        <BlogCard
          createdAt="February 18, 2025"
          title="Coming soon! New updates & features for Ionic’s Open Source projects"
          className="**:data-title:text-lg"
        />
        <BlogCard
          createdAt="February 18, 2025"
          title="Coming soon! New updates & features for Ionic’s Open Source projects"
          className="**:data-title:text-lg"
        />
        <BlogCard
          createdAt="February 18, 2025"
          title="Coming soon! New updates & features for Ionic’s Open Source projects"
          className="**:data-title:text-lg"
        /> */}
      </div>
    </Container>
  )
}
