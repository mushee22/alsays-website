
import { ContactBannerSection, HeroSection, OurStrategicSection, ProductSection, TrustedBrandsSection, WhyChooseUsSection } from "@/components/sections/product/category";
import { subCategoryService } from "@/service/api";

export default async function SubCategoryPage({ slug = '' }: { slug?: string }) {

    const { data } = await subCategoryService.findBySlug(slug, {
        populate: {
            image: true,
            category: true,
            products: {
                populate: {
                    image: true,
                }
            }
        }
    });

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
                subCategory?.products && subCategory?.products.length > 0 && <ProductSection products={subCategory.products}/>
            }
            <WhyChooseUsSection />
            <TrustedBrandsSection />
            <ContactBannerSection />
        </>
    )
}
