import { getNewsByslug } from "@/api/new-and-publication";
import { NewsContentSection, NewsDetailsHeroSection, } from "@/components/sections/news";

export default async function DetailsPage({ slug }: { slug: string }) {

    const { data: news } = await getNewsByslug(slug)

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