import BlogCard from "@/components/elements/blog-card";
import Container from "@/components/ui/container";
import { Blog } from "@/types";

export default function LatestBlogSection({ blogs }:{ blogs?: Blog[] }) {
    return (
        <Container className="md:mt-24 pt-24 pb-12 md:py-24">
            <h2 className="heading-lg text-primary mb-3 md:mb-6">The Latest from Al Says</h2>
            <p className="body-md text-grey-800 ">
                Discover a curated selection of dependable, industry-grade products designed to support growth, performance,
                and long-term success across diverse sectors.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-y-5 md:gap-x-14 mt-5 md:mt-10">
                {
                    blogs?.map((blog, index) => (
                        <BlogCard
                            key={index}
                            {...blog}
                        />  
                    ))
                }
            
            </div>
        </Container>
    )
}
