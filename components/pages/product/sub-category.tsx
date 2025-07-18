
import { ContactBannerSection, SubCategoryDynamicSection, TrustedBrandsSection, WhyChooseUsSection } from "@/components/sections/product/category";
import SubcategoryPageFallBack from "@/components/shimmer/sub-category";
import { Suspense } from "react";

export default async function SubCategoryPage({ slug = '' }: { slug?: string }) {
    return (
        <>
            <Suspense fallback={<SubcategoryPageFallBack />}>
                <SubCategoryDynamicSection slug={slug} />
            </Suspense>
            <WhyChooseUsSection />
            <TrustedBrandsSection />
            <ContactBannerSection />
        </>
    )
}
