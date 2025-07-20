
import { getSubCategorybySlug } from "@/api/product";
import { ContactBannerSection, HeroSection, OurStrategicSection, ProductSection, TrustedBrandsSection, WhyChooseUsSection } from "@/components/sections/product/category";

export default async function SubCategoryPage({ slug = '' }: { slug?: string }) {
    const { data } = await getSubCategorybySlug(slug)

    const subCategory = data?.[0];
    return (
        <>
            <HeroSection
                name={subCategory?.name}
                description={subCategory?.description}
                image={subCategory?.image}
                categoryName={subCategory?.category?.name}
            />
            <OurStrategicSection />
            {
                subCategory?.products && subCategory?.products.length > 0 && <ProductSection products={subCategory.products} />
            }
            <WhyChooseUsSection />
            <TrustedBrandsSection />
            <ContactBannerSection />
        </>
    )
}
