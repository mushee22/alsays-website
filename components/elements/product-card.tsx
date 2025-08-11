import { getStrapiImageURL } from "@/lib/config";
import { Product } from "@/types";
import Image from "next/image";

export default function ProductCard(product: Product) {
  return (
    <div className="flex flex-col">
      <div className="aspect-square bg-grey-100 rounded-2xl  relative overflow-hidden">
        {product.image && product.image.length && product.image[0]?.url && (
          <Image
            src={getStrapiImageURL(product.image[0]?.url) ?? ""}
            alt={product.title ?? "Product Image"}
            fill
          />
        )}
      </div>
      {product.title && (
        <h3 className="text-primary title-xl mt-3 pl-2 pr-1">{product.title}</h3>
      )}
      {product.description && (
        <p className="line-clamp-2 text-grey-800 body-sm md:mt-2.5 pl-2 pr-1">
          {product.description}
        </p>
      )}
    </div>
  );
}
