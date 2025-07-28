import { BlogImage } from "@/assets";
import { getStrapiImageURL } from "@/lib/config";
import { cn } from "@/lib/utils";
import { Blog } from "@/types";
import Image from "next/image";
import Link from "next/link";

interface BlogCardProps extends Blog {
  className?: string;
}

export default function BlogCard({
  title,
  createdAt,
  className,
  slug,
  cover,
}: BlogCardProps) {
  const createdAtFormatted = new Date(createdAt).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return (
    <Link
      href={`/blog/${slug}`}
      className={cn("space-y-3 md:space-y-6", className)}
    >
      <div className="aspect-[2/1]  w-full bg-primary-700 rounded-3xl relative overflow-hidden">
        <Image
          src={getStrapiImageURL(cover?.url ?? "") ?? BlogImage}
          alt={title}
          fill
          className="hover:scale-110 object-cover transition-transform duration-500"
        />
      </div>
      <div className="space-y-4">
        <span className="body-sm text-grey-800" data-data>
          {createdAtFormatted}
        </span>
        <p className="text-grey-900 heading-sm line-clamp-2" data-title>
          {title}
        </p>
      </div>
    </Link>
  );
}
