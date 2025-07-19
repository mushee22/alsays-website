import { HeroSection, SubCategorySection } from "@/components/sections/product/category";
import { categoryService } from "@/service/strapi";
import { unstable_cache } from "next/cache";

const getCacheCategoryDetails = unstable_cache(
    async (slug: string) => {
        return categoryService.findBySlug(slug, {
            populate: {
                image: true,
                subCategories: {
                    populate: {
                        image: true,
                    }
                }
            }
        });
    }
    , ['category'], {
    tags: ['category']
})

export default async function DynamicContentSection({ slug }: { slug: string }) {

    const { data } = await getCacheCategoryDetails(slug)

    const category = data?.[0];

    return (
        <>
            <HeroSection
                description={category?.description || ''}
                name={category?.name || ''}
                image={category?.image || null}
            />
            {
                category?.subCategories && category?.subCategories.length > 0 &&
                <SubCategorySection name={category.name} subCategories={category.subCategories} slug={category.slug} />
            }
        </>
    )
}
