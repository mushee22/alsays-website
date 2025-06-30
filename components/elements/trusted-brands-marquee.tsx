import { ClientLogoOneImage, ClientLogoThreeImage, ClientLogoTwoImage } from "@/assets";
import Image, { StaticImageData } from "next/image";
import Marquee from "react-fast-marquee";

export default function TrustedBrandMarquee() {
    return (
        <Marquee gradient autoFill
         style={{
            
         }}
        >
            <MarqueeItem 
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
            />

        </Marquee>
    )
}


function MarqueeItem({src }: { src: string | StaticImageData }) {
    return (
        <Image
            src={src}
            alt="Client Image"
        />
    )
}