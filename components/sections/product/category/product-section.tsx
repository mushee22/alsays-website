import ProductCard from "@/components/elements/product-card";
import Container from "@/components/ui/container";
import { Product } from "@/types";

export default function ProductSection({ products }: { products: Product[] }) {
  return (
    <Container className="pb-12 md:pb-24 space-y-6 md:space-y-14">
      <h2 className="heading-md text-primary text-center">Products</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
        {
          products.map((product) => (
            <ProductCard 
             {...product}
             key={product.id}
            />
          ))
        }
      </div>
    </Container>
  )
}
