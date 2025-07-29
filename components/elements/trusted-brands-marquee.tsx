
import { getTrustedBrands } from "@/api/common";
import { getStrapiImageURL } from "@/lib/config";
import Image, { StaticImageData } from "next/image";
import Marquee from "react-fast-marquee";

export default async function TrustedBrandMarquee() {
 
  const { data: brands = [] } = await getTrustedBrands();

  return (
    <div className="relative">
      {/* Desktop version with gradient */}
      <div className="hidden md:block">
        <Marquee gradient autoFill>
          {brands.map((brand, index) => (
            <MarqueeItem
              key={index}
              src={getStrapiImageURL(brand.logo?.url) ?? ""}
              alt={brand.title ?? "Trusted Brand Logo"}
            />
          ))}
        </Marquee>
      </div>
      
      {/* Mobile version without gradient */}
      <div className="md:hidden">
        <Marquee autoFill>
          {brands.map((brand, index) => (
            <MarqueeItem
              key={index}
              src={getStrapiImageURL(brand.logo?.url) ?? ""}
              alt={brand.title ?? "Trusted Brand Logo"}
            />
          ))}
        </Marquee>
      </div>
    </div>
  );
}

function MarqueeItem({ src }: { src: string | StaticImageData; alt?: string }) {
  if (!src) {
    return null;
  }

  return (
    <div className="aspect-[260/80] h-[80px] relative max-w-[280px] md:max-w-[320px]">
      <Image src={src} alt="Client Image" fill className="object-contain" />
    </div>
  );
}
