import ProductCard from "@/components/elements/product-card";
import Container from "@/components/ui/container";

export default function ProductSection() {
  return (
    <Container className="pt-12 md:pt-24 space-y-6 md:space-y-14">
        <h2 className="heading-md text-primary text-center">Products</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
            <ProductCard/>
            <ProductCard/>
            <ProductCard/>
            <ProductCard/>
            <ProductCard/>
            <ProductCard/>
            <ProductCard/>
            <ProductCard/>
        </div>
    </Container>
  )
}
