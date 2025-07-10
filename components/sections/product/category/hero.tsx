import { Button } from "@/components/ui/button";
import Container from "@/components/ui/container";

export default function HeroSection() {
    return (
        <Container className="py-12 md:py-24 md:mt-12">
            <div className="flex flex-col md:flex-row gap-y-6 gap-x-12 items-center">
                <div className="flex flex-col gap-y-3 md:gap-y-7 items-start">
                    <p className="title-lg text-grey-800 ">FMCG</p>

                    <h1 className="title text-primary leading-7.5">Rubber Mats</h1>
                    <div className="aspect-[630/497] bg-grey-200 w-full block sm:hidden lg:h-[497px] rounded-3xl"></div>
                    <p className="body-md text-grey-800">
                        At All Says specialized in flooring solutions distribute high quality of rubber mats for gyms,
                        swimming pools, stable, and industrial mats including the PP mats and all types of coir mats.
                    </p>
                    <Button>View Products</Button>
                </div>
                <div className="aspect-[630/497] bg-grey-200 h-[320px] hidden sm:block lg:h-[497px] rounded-3xl"></div>
            </div>
        </Container>
    )
}
