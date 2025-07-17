import { CategoryPage, ProductPage, SubCategoryPage } from "@/components/pages";
import { notFound } from "next/navigation";
export default async function Page({ params }: { params: Promise<{ slug: string[] }> }) {

  const { slug } = await params;
  if (!slug || slug.length === 0) {
    return notFound();
  }



  if (slug.length == 1) {
    return <CategoryPage slug={slug[0]} />
  }

  if (slug.length == 2) {
    return <SubCategoryPage slug={slug[1]} />;
  }

  return (<ProductPage />)
}
