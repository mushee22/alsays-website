import { NewsContentSection, NewsDetailsHeroSection, } from "@/components/sections/news"
export default function DetailsPage() {
    return (
        <>
            <NewsDetailsHeroSection
                createdAt="February 18, 2025"
                title="Coming soon! New updates & features for Ionic’s Open Source projects"
            />
            <NewsContentSection/>
        </>
    )
}