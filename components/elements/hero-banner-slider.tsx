'use client'
import { BannerImageFive, BannerImageFour, BannerImageOne, BannerImageSeven, BannerImageSix, BannerImageThree, BannerImageTwo } from '@/assets'
import Autoplay from 'embla-carousel-autoplay'
import useEmblaCarousel, { type UseEmblaCarouselType, } from 'embla-carousel-react'
import Image from 'next/image'
import { useCallback, useEffect, useState } from 'react'


type CarouselApi = UseEmblaCarouselType[1];

const bannerImages = [
    BannerImageOne,
    BannerImageTwo,
    BannerImageThree,
    BannerImageFour,
    BannerImageFive,
    BannerImageSix,
    BannerImageSeven
]

export default function HeroBannerSlider() {
    const [emblaRef] = useEmblaCarousel({ loop: true, axis: 'y' }, [Autoplay({
        delay: 3000
    })])

    return (
        <div className="embla" >
            <div className="embla__viewport" ref={emblaRef}>
                <div className="embla__container">
                    {
                    bannerImages.map((image, index) => (
                        <div className="embla__slide" key={index}>
                            <div className="aspect-[1441/542] min-h-[340px] relative w-full">
                                <Image
                                    src={image}
                                    alt={`Hero Section Image ${index + 1}`}
                                    fill
                                    className='object-cover'
                                />
                            </div>
                        </div>
                    ))
                }
                </div>
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


// function DotButton({ className, onClick }: { className?: string, onClick?: VoidFunction }) {
//     return (
//         <button onClick={onClick} className={cn(' size-2.5 md:size-3.5  rounded-full', className)}></button>
//     )
// }