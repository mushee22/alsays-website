import Container from "@/components/ui/container";
import { getStrapiImageURL } from "@/lib/config";
import { StrapiImage } from "@/types";
import Image from "next/image";

interface Props {
    name: string,
    description: string,
    image?: StrapiImage | null,
    categoryName?: string
}

export default async function HeroSection({ name, description, image, categoryName }: Props) {

    return (
        <Container className="pt-24 pb-12 md:py-24 md:mt-12">
            <div className="flex flex-col md:flex-row gap-y-6 gap-x-12 items-center">
                <div className="flex flex-col gap-y-3 md:gap-y-7 items-start">
                    {
                        categoryName && <p className="title-lg text-grey-800 ">{categoryName}</p>
                    }

                    <h1 className="title text-primary ">{name}</h1>
                    <div className="aspect-[630/497] bg-grey-200 w-full block sm:hidden  lg:h-[497px] rounded-3xl relative">
                        {
                            image?.url ?
                                <Image
                                    src={getStrapiImageURL(image?.url) ?? ''}
                                    alt={name}
                                    fill
                                    className="rounded-3xl"
                                />
                                :
                                <></>
                        }
                    </div>
                    <p className="body-md text-grey-800">
                        {
                            description
                        }
                    </p>
                    {/* <Button>View Products</Button> */}
                </div>
                <div className="aspect-[630/497] bg-grey-200 h-[320px] hidden sm:block relative lg:h-[497px] rounded-3xl">
                    {
                        image?.url ?
                            <Image
                                src={getStrapiImageURL(image?.url) ?? ''}
                                alt={name}
                                fill
                                className="rounded-3xl"
                            />
                            :
                            <></>
                    }
                </div>
            </div>
        </Container>
    )
}
