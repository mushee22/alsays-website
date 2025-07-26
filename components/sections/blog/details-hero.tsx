import Container from "@/components/ui/container";
import { getStrapiImageURL } from "@/lib/config";
import Image from "next/image";

interface Props {
    title: string;
    createdAt: string;
    cover?: string;
    className?: string;
}

export default function BlogDetailsHeroSection({ title, createdAt, cover, }:Props) {

    const formattedDate = new Date(createdAt).toLocaleDateString("en-US", {
        year: "numeric",
        month: "long",
        day: "numeric",
    });

    return (
        <Container className="max-w-4.5xl lg:mt-24 pt-6  lg:pt-24">
            <div className="space-y-4 px-3 md:px-12">
                <span className="body-sm text-grey-800" data-data>{formattedDate}</span>
                <p className="text-grey-900 heading-xl" data-title>{title}</p>
            </div>
            <div className="aspect-[914/457] w-full bg-primary-100 overflow-hidden relative rounded-3xl mt-5 md:mt-10">
              <Image
                src={getStrapiImageURL(cover ?? "") || ""}
                alt={title}
                fill
            
              />
            </div>
        </Container>
    )
}
