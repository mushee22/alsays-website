import { getStrapiImageURL } from "@/lib/config";
import { NewsAndPublication } from "@/types";
import Image from "next/image";
import Link from "next/link";

interface News extends NewsAndPublication {
  className?: string;
}

export default function NewsCard({ title, createdAt, slug, cover }: News) {

  const formattedDate = new Date(createdAt).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return (
    <Link className="group" href={`/news/${slug}`}>
      <div className="flex flex-col gap-y-2 sm:flex-row gap-x-6 items-center p-2 md:p-6">
        <div className="aspect-[264/180] w-full sm:max-w-[264px] overflow-hidden bg-grey-800 rounded-[8px] relative">
          <Image
            src={getStrapiImageURL(cover?.url ?? "") || ""}
            alt={title}
            fill
            className="object-cover"
          />
        </div>
        <div className="flex flex-col gap-y-4 flex-1">
          <span className="uppercase title-sm text-grey-800">IN THE NEWS</span>
          <p className="title-xl text-grey-900 leading-7">{title}</p>
          <span className="body-sm text-grey-800 text-xs">{formattedDate}</span>
        </div>
      </div>
    </Link>
  )
}
