import { MarketPresenceMapImage } from "@/assets";
import Container from "@/components/ui/container";
import Image from "next/image";

export default function OurMarketBoundariesSection() {
    return (
        <Container className="pt-12 md:pt-24 mb-12 px-0 mx-3 @7xl:mx-auto rounded-3xl  md:mb-24   bg-linear-(--primary-gradient)">
            <div className="max-w-[960px] mx-auto text-center pb-10 md:pb-20 px-2">
                <h2 className="heading-md mb-5 md:mb-10">Our markets are boundaryless!</h2>
                <p className="body-lg">At All Says, we do have direct offices and the market presence in 12 countries while also sell products across 100 countries around the globe with good market share from diverse industries. </p>
                <br />
                <br />
                <p className="body-lg">
                    While our corporate office is located in Dubai – United Arab Emirates, All Says, actively presence also in <strong className="title-xl"> USA, POLAND, SPAIN, KUWAIT, UKRAIN, KENYA, IRAQ, QATAR, BAHRAIN, KSA, INDIA,</strong> and other countries as well. We serve B2G, B2B, B2C, and C2C. We do serve both online and the offline markets.
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
