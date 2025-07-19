
import {
  ContactBannerSection,
  HeroSection,
  RelatedServiceSection
} from "@/components/sections/product"
import { productService } from "@/service/strapi"
import { unstable_cache } from "next/cache"

const getCacheProductsQuery = unstable_cache(async (slug: string) => {
  return productService.findBySlug(slug, {
    populate: {
      image: true,
      subCategory: true,
    }
  })
}, [], {
  tags: ['products']
})

export default async function ProductPage({ slug = '' }: { slug?: string }) {

  const { data: products } = await getCacheProductsQuery(slug);

  const product = products?.[0];

  return (
    <>
      <HeroSection 
        description={product?.description ?? ''}
        title={product?.title ?? ''}
        image={product?.image}
      />
      <RelatedServiceSection />
      <ContactBannerSection />
    </>
  )
}
