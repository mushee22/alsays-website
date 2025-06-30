'use client'
import { BannerOneImage, BannerThreeImage, BannerTwoImage } from '@/assets'
import { cn } from '@/lib/utils'
import Autoplay from 'embla-carousel-autoplay'
import useEmblaCarousel, { type UseEmblaCarouselType, } from 'embla-carousel-react'
import Image from 'next/image'
import { useCallback, useEffect, useState } from 'react'


type CarouselApi = UseEmblaCarouselType[1];

export default function HeroBannerSlider() {
    const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true }, [Autoplay({
        delay: 3000
    })])

    const { selectedIndex, scrollSnaps, onDotButtonClick } =
        useDotButton(emblaApi)

    return (
        <div className="embla relative" ref={emblaRef}>
            <div className="embla__container ">
                <div className="embla__slide">
                    <div className="aspect-[1441/542] min-h-[340px]  relative w-full bg-red-100">
                        <Image
                            src={BannerOneImage}
                            alt="Hero Section Image"
                            fill
                            className='object-cover'
                        />
                    </div>
                </div>
                <div className="embla__slide">
                    <div className="aspect-[1441/542] min-h-[340px]  relative w-full bg-yellow-200">
                        <Image
                            src={BannerTwoImage}
                            alt="Hero Section Image"
                            fill
                            className='object-cover'
                        />
                    </div>
                </div>
                <div className="embla__slide">
                    <div className="aspect-[1441/542] min-h-[340px]   relative w-full bg-green-200">
                        <Image
                            src={BannerThreeImage}
                            alt="Hero Section Image"
                            fill
                            className='object-cover'
                        />
                    </div>
                </div>
            </div>
            <div className='absolute bottom-4 -translate-x-1/2 left-1/2 flex gap-x-2'>
                {
                    scrollSnaps.map((_, index) => (
                        <DotButton 
                         key={index} 
                         className={selectedIndex == index ? 'bg-[#D9D9D9]' : 'bg-[#D9D9D9]/40'}
                         onClick={() => onDotButtonClick(index)}
                        />
                    ))
                }
            </div>
        </div>
    )
}

export const useDotButton = (
    emblaApi: CarouselApi | undefined,
    onButtonClick?: (emblaApi: CarouselApi) => void
) => {
    const [selectedIndex, setSelectedIndex] = useState(0)
    const [scrollSnaps, setScrollSnaps] = useState<number[]>([])

    const onDotButtonClick = useCallback(
        (index: number) => {
            if (!emblaApi) return
            emblaApi.scrollTo(index)
            if (onButtonClick) onButtonClick(emblaApi)
        },
        [emblaApi, onButtonClick]
    )

    const onInit = useCallback((emblaApi: CarouselApi) => {
        if (!emblaApi) return
        setScrollSnaps(emblaApi?.scrollSnapList())
    }, [])

    const onSelect = useCallback((emblaApi: CarouselApi) => {
        if (emblaApi)
            setSelectedIndex(emblaApi?.selectedScrollSnap())
    }, [])

    useEffect(() => {
        if (!emblaApi) return

        onInit(emblaApi)
        onSelect(emblaApi)

        emblaApi.on('reInit', onInit).on('reInit', onSelect).on('select', onSelect)
    }, [emblaApi, onInit, onSelect])

    return {
        selectedIndex,
        scrollSnaps,
        onDotButtonClick
    }
}


function DotButton({ className, onClick }: { className?: string, onClick?: VoidFunction }) {
    return (
        <button onClick={onClick} className={cn(' size-2.5 md:size-3.5  rounded-full', className)}></button>
    )
}