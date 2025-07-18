
import { ContactBannerSection, DynamicContentSection, TrustedBrandsSection, WhyChooseUsSection } from "@/components/sections/product/category";
import CategoryPageFallback from "@/components/shimmer/category";
import { Suspense } from "react";

export default async function CategoryPage({ slug = '' }: { slug?: string }) {
  return (
    <>
      <Suspense fallback={<CategoryPageFallback />}>
        <DynamicContentSection slug={slug} />
      </Suspense>
      <WhyChooseUsSection />
      <TrustedBrandsSection />
      <ContactBannerSection />
    </>
  )
}
