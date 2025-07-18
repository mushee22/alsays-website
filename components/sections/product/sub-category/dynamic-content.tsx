
import { HeroSection, OurStrategicSection, ProductSection } from "@/components/sections/product/category";
import { subCategoryService } from "@/service/api";
import { unstable_cache } from "next/cache";

const getCacheSubCategoryDetails = unstable_cache(async (slug: string) => {
    return subCategoryService.findBySlug(slug, {
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
}, ['sub-category'], { revalidate: 3600 })

export default async function SubCategoryDynamicSection({ slug }: { slug: string }) {

    const { data } = await getCacheSubCategoryDetails(slug)

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
        </>
    )
}
