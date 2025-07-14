import {
    BrandImageEight,
    BrandImageEleven,
    BrandImageFive,
    BrandImageFour,
    BrandImageNine,
    BrandImageOne,
    BrandImageSeven,
    BrandImageSix,
    BrandImageTen,
    BrandImageThree,
    BrandImageTwelve,
    BrandImageTwo,
} from "@/assets";
import Image, { StaticImageData } from "next/image";
import Marquee from "react-fast-marquee";


const trustedBrands = [
    BrandImageOne,
    BrandImageTwo,
    BrandImageThree,
    BrandImageFour,
    BrandImageFive,
    BrandImageSix,
    BrandImageSeven,
    BrandImageEight,
    BrandImageNine,
    BrandImageTen,
    BrandImageEleven,
    BrandImageTwelve    
]

export default function TrustedBrandMarquee() {
    return (
        <Marquee gradient autoFill
        
        >
            {
                trustedBrands.map((brand, index) => (
                    <MarqueeItem
                        key={index}
                        src={brand}
                    />
                ))
            }
            {/* <MarqueeItem 
             src={ClientLogoOneImage}
            />
            <MarqueeItem 
             src={ClientLogoTwoImage}
            />
            <MarqueeItem 
             src={ClientLogoThreeImage}
            />
            <MarqueeItem 
             src={ClientLogoOneImage}
            />
            <MarqueeItem 
             src={ClientLogoThreeImage}
            /> */}

        </Marquee>
    )
}


function MarqueeItem({src }: { src: string | StaticImageData }) {
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