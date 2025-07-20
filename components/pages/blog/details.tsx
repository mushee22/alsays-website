import { getBlogBySlug } from "@/api/blog";
import { BlogDetailsHeroSection, ContentSection } from "@/components/sections/blog";

export default async function DetailsPage({ slug }: { slug: string }) {

    const { data: blog } = await getBlogBySlug(slug)

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
