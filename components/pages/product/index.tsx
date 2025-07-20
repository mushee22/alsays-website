
import { getProductBySlug } from "@/api/product";
import {
  ContactBannerSection,
  HeroSection,
  RelatedServiceSection
} from "@/components/sections/product";



export default async function ProductPage({ slug = '' }: { slug?: string }) {

  const { data: products } = await getProductBySlug(slug);

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
