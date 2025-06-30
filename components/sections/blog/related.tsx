import BlogCard from "@/components/elements/blog-card";
import Container from "@/components/ui/container";

export default function RelatedBlogsListSection() {
  return (
    <Container className="section-spacing">
        <h3 className="text-primary heading-md">Related blogs</h3>
        <div className="grid  md:grid-cols-3 gap-5 mt-5 md:mt-10">
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
        </div>
    </Container>
  )
}
