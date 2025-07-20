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
}, [], { tags: ['category', 'sub-category']})


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
}, ['sub-category'], { tags: ['sub-category'] })

export const getProductBySlug = unstable_cache(async (slug: string) => {
  return productService.findBySlug(slug, {
    populate: {
      image: true,
      subCategory: true,
    }
  })
}, [], {
  tags: ['product']
})

