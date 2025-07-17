import { trustedPartnersService } from "@/service/api";
import Image, { StaticImageData } from "next/image";
import Marquee from "react-fast-marquee";

export default async function TrustedBrandMarquee() {

    const { data: brands = [] } = await trustedPartnersService.find({
        populate: {
            logo: true
        }
    });

    

    return (
        <Marquee gradient autoFill>
            {
                brands.map((brand, index) => (
                    <MarqueeItem
                        key={index}
                        src={brand.logo?.url ?? ""}
                        alt={brand.title ?? 'Trusted Brand Logo'}
                    />
                ))
            }
        </Marquee>
    )
}


function MarqueeItem({ src }: { src: string | StaticImageData, alt?: string }) {

    if (!src) {
        return null;
    }

    return (
        <div className="aspect-[260/80] h-[80px] relative max-w-[320px]">
            <Image
                src={src}
                alt="Client Image"
                fill
                className="object-contain"
            />
        </div>
    )
}