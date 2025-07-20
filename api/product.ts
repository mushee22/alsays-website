import { MODEL_NAME } from "@/constant/strapi"
import { categoryService, productService, subCategoryService } from "@/service/strapi"
import { unstable_cache } from "next/cache"

export const getCategoriesWithSubCategory = unstable_cache(async () => {
    return categoryService.find({
        populate: {
            image: true,
            subCategories: true
        },
        sort: {
            order: "ASC"
        }
    })
}, [], { tags: [MODEL_NAME.category, MODEL_NAME.subCategory]})

export const getCategoryBySlug = unstable_cache(
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

export const getSubCategorybySlug = unstable_cache(async (slug: string) => {
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
}, [MODEL_NAME.subCategory], { tags: [MODEL_NAME.subCategory] })

export const getProductBySlug = unstable_cache(async (slug: string) => {
  return productService.findBySlug(slug, {
    populate: {
      image: true,
      subCategory: true,
    }
  })
}, [], {
  tags: [MODEL_NAME.product]
})

