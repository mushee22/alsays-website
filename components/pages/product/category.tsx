
import { getCategoryBySlug } from "@/api/product";
import { ContactBannerSection, HeroSection, SubCategorySection, TrustedBrandsSection, WhyChooseUsSection } from "@/components/sections/product/category";

export default async function CategoryPage({ slug = '' }: { slug?: string }) {

  const { data } = await getCategoryBySlug(slug)

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
      <WhyChooseUsSection />
      <TrustedBrandsSection />
      <ContactBannerSection />
    </>
  )
}
