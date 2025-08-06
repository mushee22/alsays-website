"use client";
import { getStrapiImageURL } from "@/lib/config";
import { HomeBenner } from "@/types";
import Image from "next/image";
import { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';

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

  if (banners.length === 0) {
    return null; // Don't render anything if no banners
  }

  return (
    <div className="relative w-full" style={{ height: '542px' }}>
      <Swiper
        modules={[Autoplay]}
        spaceBetween={0}
        slidesPerView={1}
        loop={true}
        direction={isMobile ? "horizontal" : "vertical"}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
          pauseOnMouseEnter: false,
        }}
        className="hero-swiper"
        style={{
          width: '100%',
          height: '100%'
        }}
      >
        {banners.map((banner, index) => (
          <SwiperSlide key={index}>
            <div className="aspect-[1441/542] min-h-[542px] relative w-full">
              <Image
                src={getStrapiImageURL(banner.image?.url) ?? ""}
                alt={banner?.altText ?? "Banner Image"}
                fill
                className="object-cover"
                priority={index === 0}
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}


