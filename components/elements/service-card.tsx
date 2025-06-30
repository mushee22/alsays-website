import { ServiceIcon, ServiceImage } from "@/assets"

import Image from "next/image"
import { Button } from "../ui/button"

export default function ServiceCard() {
    return (
        <div className="py-5.5 px-6 service-item flex justify-between flex-col sm:flex-row transition-all duration-500 rounded-2xl bg-primary overflow-x-hidden">
            <div className="py-6.5  flex flex-col w-[258px]  h-[388px] items-start justify-between ">
                <div className="space-y-6">
                    <div className="p-2.5 rounded-xl w-fit bg-primary-foreground ">
                        <Image
                            src={ServiceIcon}
                            alt="Service Icon"
                        />
                    </div>
                    <h3 className="heading-sm">Food Services</h3>
                </div>
                <div className="space-y-5 md:space-y-10 min-w-[252px]">
                    <span className="inline-block body-md">
                        Lorem ipsum dolor sit amet consectetur. Ultricies enim euismod.
                    </span>
                    <Button variant="outline" className="text-primary-foreground">Know More</Button>
                </div>
            </div>
            <div className="aspect-[258/388]  max-md:w-[258px] max-[420px]:hidden lg:h-full  relative overflow-hidden rounded-xl">
                <Image
                    src={ServiceImage}
                    alt="Service Icon"
                    fill
                />
            </div>
        </div>
    )
}
