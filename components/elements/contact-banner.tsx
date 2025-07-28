import { ContactCardBg } from "@/assets"
import Image from "next/image"
import { Button } from "../ui/button"
import Link from "next/link"

export default function ContactBanner({ title, description }: { title: string, description: string }) {
    return (
        <div className="bg-linear-(--primary-gradient) group p-6 min-h-[334px] aspect-[1248/334] w-full flex gap-y-4 md:gap-y-8 flex-col justify-center relative items-center rounded-3xl overflow-hidden">
            <Image
                src={ContactCardBg}
                alt="Contact Card Bg"
                fill
                className="-z-10 group-hover:scale-125 origin-center transition-transform duration-500"
            />
            <h2 className="heading-md text-center">{title}</h2>
            <p className="body-lg max-w-[415px] text-center">{description}</p>
            <Link href={"/contact-us"}>
                <Button>Contact us</Button>
            </Link>
        </div>
    )
}
