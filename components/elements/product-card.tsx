import { Product } from "@/types";
import Image from "next/image";

export default function ProductCard(product: Product) {
    return (
        <div className="flex flex-col hover:shadow transition-all duration-500 cursor-pointer hover:rounded-2xl">
            <div className="aspect-square bg-grey-100 rounded-2xl mb-3 md:mb-6 relative">
                {
                    product.image && product.image.length && product.image[0]?.url &&
                    <Image
                        src={product.image[0]?.url}
                        alt={product.title ?? "Product Image"}
                        fill
                    />
                }
            </div>
            {
                product.title && <h3 className="text-primary title-xl md:mt-4">{product.title}</h3>
            }
            {
                product.description && <p className="line-clamp-2 text-grey-800 body-sm md:mt-2.5">{product.description}</p>
            }
        </div>
    )
}
