import { BlogImage } from "@/assets";
import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
interface Blog {
    title: string;
    createdAt: string;
    coverImage?: string;
    className?: string;
}

export default function BlogCard({ title, createdAt, className }: Blog) {
    return (
        <Link href={"/blog/1"} className={cn("space-y-3 md:space-y-6", className)}>
            <div className="aspect-[2/1]  w-full bg-primary-700 rounded-3xl relative overflow-hidden">
                <Image
                    src={BlogImage}
                    alt={title}
                    fill
                    className="hover:scale-110 transition-transform duration-500"
                />
            </div>
            <div className="space-y-4">
                <span className="body-sm text-grey-800" data-data>{createdAt}</span>
                <p className="text-grey-900 heading-sm line-clamp-2" data-title>{title}</p>
            </div>
        </Link>
    )
}
