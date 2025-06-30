import { BlogDetailsHeroSection, ContentSection, RelatedBlogsListSection } from "@/components/sections/blog"
export default function DetailsPage() {
    return (
        <>
            <BlogDetailsHeroSection
                createdAt="February 18, 2025"
                title="Coming soon! New updates & features for Ionic’s Open Source projects"
            />
            <ContentSection/>
            <RelatedBlogsListSection/>
        </>
    )
}
