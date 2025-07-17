import { getStrapiImageURL } from "@/lib/config";
import { SubCategory } from "@/types";
import Image from "next/image";
import Link from "next/link";

interface Props extends Pick<SubCategory, 'name' | 'description' | 'slug' | 'image'> {
    categoryName?: string,
    categorySlug?: string,
}

export default function SubCategoryCard({ name, image, description, slug, categoryName, categorySlug }: Props) {
    return (
        <Link href={`/product/${categorySlug}/${slug}`} className="flex flex-col ">
            <div className="aspect-square bg-grey-100 rounded-2xl relative mb-3 md:mb-6 ">
                {
                    image?.url ?
                    <Image
                     src={getStrapiImageURL(image?.url) ?? ''}
                     alt={name}
                     fill
                    />
                    :
                    <></>
                }
            </div>
            <span className="text-primary title-sm">{categoryName}</span>
            <h3 className="text-primary title-xl md:mt-4">{name}</h3>
            <p className="line-clamp-2 text-grey-800 body-sm md:mt-2.5">
                {description}
            </p>
        </Link>
    )
}
