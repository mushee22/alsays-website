import Image from "next/image";

interface Product {
    name: string;
    description: string;
    services: Array<string>,
    path: string;
    btnLabel: string;
    coverImage?: string; 
}

export default function ServiceAndProductCard({ name, description, services = [], coverImage }:Product) {
    return (
        <div className="border rounded-[40px] gap-7 flex flex-col lg:flex-row p-6 border-grey-100 md:sticky top-0 bg-grey-50">
            <div className="aspect-square lg:h-[352px] lg:w-[352px] bg-grey-100 relative rounded-3xl">
                {coverImage && <Image src={coverImage} alt={name} fill />}
            </div>
            <div className="py-5 space-y-4 md:space-y-8 flex-1">
                <h3 className="title-xl text-grey-900">{name}</h3>
                <p className="text-grey-800 body-md">{description}</p>
                <div className="title-sm text-grey-800 flex flex-wrap gap-y-2 -ml-2">
                    {
                        services.map((service, index) => (
                            <div className=" px-2 border-r  first-line:pl-0 last:border-0 border-grey leading-3.5" key={service + index}>
                                <span className="">{service}</span>
                            </div>
                        ))
                    }
                </div>
                {/* <LinkButton variant="link" className="[&_path]:fill-primary !pl-0" href={path}>
                    {btnLabel}
                </LinkButton> */}
            </div>
        </div>
    )
}
