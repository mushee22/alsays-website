import { NewsContentSection, NewsDetailsHeroSection, } from "@/components/sections/news";
import { newsService } from "@/service/strapi";
export default async function DetailsPage({ slug }: { slug: string }) {

    const { data: news } = await newsService.findBySlug(slug, {
        populate: {
            cover: true,
        }
    }
    )

    const { createdAt, title, cover, content } = news[0] || {};

    return (
        <>
            <NewsDetailsHeroSection
                createdAt={createdAt}
                title={title}
                cover={cover?.url || ""}
            />
            <NewsContentSection content={content}/>
        </>
    )
}