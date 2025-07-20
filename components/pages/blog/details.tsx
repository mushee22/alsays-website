import { BlogDetailsHeroSection, ContentSection } from "@/components/sections/blog";
import { blogService } from "@/service/strapi";
import { unstable_cache } from "next/cache";

const getCacheBlogDetailsBySlug = unstable_cache(async (slug: string) => {
    return blogService.findBySlug(slug, {
        populate: {
            cover: true,
        }
    }
    )
}, [], 
{
    tags: ['blog']
})

export default async function DetailsPage({ slug }: { slug: string }) {

    const { data: blog } = await getCacheBlogDetailsBySlug(slug)

    const { createdAt, title, cover, content } = blog[0] || {};

    return (
        <>
            <BlogDetailsHeroSection
                createdAt={createdAt}
                title={title}
                cover={cover?.url || ""}
            />
            <ContentSection content={content} />
        </>
    )
}
