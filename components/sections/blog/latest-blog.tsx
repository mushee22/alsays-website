import BlogCard from "@/components/elements/blog-card";
import Container from "@/components/ui/container";

export default function LatestBlogSection() {
    return (
        <Container className="md:mt-24 py-12 md:py-24">
            <h2 className="heading-lg text-primary mb-3 md:mb-6">The Latest from Al Says</h2>
            <p className="body-md text-grey-800 ">
                Discover a curated selection of dependable, industry-grade products designed to support growth, performance,
                and long-term success across diverse sectors.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-y-5 md:gap-x-14 mt-5 md:mt-10">
               <BlogCard
                title="Coming soon! New updates & features for Ionic’s Open Source projects"
                createdAt="February 18, 2025"
               />
               <BlogCard
                title="Coming soon! New updates & features for Ionic’s Open Source projects"
                createdAt="February 18, 2025"
               />
            </div>
        </Container>
    )
}
