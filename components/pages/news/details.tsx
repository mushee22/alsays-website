import { NewsContentSection, NewsDetailsHeroSection, } from "@/components/sections/news";
import { newsService } from "@/service/strapi";
import { unstable_cache } from "next/cache";

const getCacheNewsByslug = unstable_cache(async (slug: string) => {
    return newsService.findBySlug(slug, {
        populate: {
            cover: true,
        }
    }
    )
}, [], { tags: ['news-and-publication'] })

export default async function DetailsPage({ slug }: { slug: string }) {

    const { data: news } = await getCacheNewsByslug(slug)

    const { createdAt, title, cover, content } = news[0] || {};

    return (
        <>
            <NewsDetailsHeroSection
                createdAt={createdAt}
                title={title}
                cover={cover?.url || ""}
            />
            <NewsContentSection content={content} />
        </>
    )
}