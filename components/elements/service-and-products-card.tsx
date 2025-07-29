import Image from "next/image";

interface Product {
    name: string;
    description: string;
    services: Array<string>,
    path: string;
    btnLabel: string;
    coverImage?: string; 
}

export default function ServiceAndProductCard({ name, description, coverImage }:Product) {
    return (
        <div className="border rounded-[40px] gap-7 flex flex-col lg:flex-row lg:items-center p-6 border-grey-100 md:sticky top-0 bg-grey-50">
            <div className="aspect-square lg:h-[352px] lg:w-[352px] bg-grey-100 relative rounded-3xl">
                {coverImage && <Image src={coverImage} alt={name} fill />}
            </div>
            <div className="py-5 space-y-4 md:space-y-8 flex-1">
                <h3 className="title-xl text-grey-900">{name}</h3>
                <p className="text-grey-800 body-md">{description}</p>
            </div>
        </div>
    )
}
