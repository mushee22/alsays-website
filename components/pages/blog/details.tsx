import { BlogDetailsHeroSection, ContentSection } from "@/components/sections/blog";
import { blogService } from "@/service/strapi";
export default async function DetailsPage({ slug }: { slug: string }) {

    const { data: blog } = await blogService.findBySlug(slug, {
        populate: {
            cover: true,
        }
    }
    )

    const { createdAt, title, cover, content } = blog[0] || {};

    return (
        <>
            <BlogDetailsHeroSection
                createdAt={createdAt}
                title={title}
                cover={cover?.url || ""}
            />
            <ContentSection content={content}/>
            {/* <RelatedBlogsListSection /> */}
        </>
    )
}
