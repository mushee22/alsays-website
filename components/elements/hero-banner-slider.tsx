"use client";
import { getStrapiImageURL } from "@/lib/config";
import { HomeBenner } from "@/types";
import Autoplay from "embla-carousel-autoplay";
import useEmblaCarousel from "embla-carousel-react";
import Image from "next/image";
import { useEffect, useState } from "react";

export default function HeroBannerSlider({
  banners = [],
}: {
  banners: HomeBenner[];
}) {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkIsMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    checkIsMobile();
    window.addEventListener('resize', checkIsMobile);

    return () => window.removeEventListener('resize', checkIsMobile);
  }, []);

  const [emblaRef] = useEmblaCarousel({ 
    loop: true, 
    axis: isMobile ? "x" : "y",
    ...(isMobile && {
      slidesToScroll: 1,
      containScroll: "trimSnaps"
    })
  }, [
    Autoplay({
      delay: 5000,
      stopOnInteraction: false,
      stopOnMouseEnter: false,
    }),
  ]);

  if (banners.length === 0) {
    return null; // Don't render anything if no banners
  }

  return (
    <div className="embla relative overflow-hidden">
      <div className="embla__viewport" ref={emblaRef}>
        <div className="embla__container">
          {banners.map((banner, index) => (
            <div className="embla__slide" key={index}>
              <div className="aspect-[1441/542] min-h-[542px] relative w-full">
                <Image
                  src={getStrapiImageURL(banner.image?.url) ?? ""}
                  alt={banner?.altText ?? "Banner Image"}
                  fill
                  className="object-cover"
                  priority={index === 0}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}


