import Link from "next/link";

export default function ProductCard() {
    return (
        <Link href={"/product/rubber-mat"} className="flex flex-col ">
            <div className="aspect-square bg-grey-100 rounded-2xl mb-3 md:mb-6">

            </div>
            <h3 className="text-primary title-xl md:mt-4">GYM Mats</h3>
            <p className="line-clamp-2 text-grey-800 body-sm md:mt-2.5">Understand the correlation of community involvement and customer retention and renewals.</p>
        </Link>
    )
}
