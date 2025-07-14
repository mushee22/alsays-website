import { MarketPresenceMapImage } from "@/assets";
import Container from "@/components/ui/container";
import Image from "next/image";

export default function OurMarketBoundariesSection() {
    return (
        <Container className="pt-12 md:pt-24 mb-12 px-0 mx-3 @7xl:mx-auto rounded-3xl  md:mb-24   bg-linear-(--primary-gradient)">
            <div className="max-w-[960px] mx-auto text-center pb-10 md:pb-20 px-2">
                <h2 className="heading-md mb-5 md:mb-10">Our markets are boundaryless!</h2>
                <p className="body-lg">
                    At AL Says, we have direct offices and a market presence in 12 countries, and we sell products across 100 countries around the globe, holding a strong market share across diverse industries.
                </p>
                <br />
                <br />
                  
                <p className="body-lg">
                    While our corporate office is in Dubai, United Arab Emirates, AL Says also has an active presence in the <strong className="title-xl"> USA, POLAND, SPAIN, KUWAIT, UKRAIN, KENYA, IRAQ, QATAR, BAHRAIN, KSA, INDIA, </strong> 
                    and other countries.
                </p>
            </div>
            <div className="relative aspect-[1248/338] w-full min-h-[338px] max-sm:hidden">
                <Image
                    src={MarketPresenceMapImage}
                    alt="our presence in map"
                    fill
                    className="object-cover"
                />
            </div>
        </Container>
    )
}
