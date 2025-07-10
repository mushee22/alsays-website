import Link from "next/link";

interface News {
  title: string;
  createdAt?: string;
}

export default function NewsCard({ title, createdAt }: News) {
  return (
    <Link className="group" href="/news/1">
      <div className="flex flex-col gap-y-2 sm:flex-row gap-x-6 items-center p-2 md:p-6">
        <div className="aspect-[264/180] w-full sm:max-w-[264px] bg-grey-800 rounded-[8px]">

        </div>
        <div className="flex flex-col gap-y-4 flex-1">
          <span className="uppercase title-sm text-grey-800">IN THE NEWS</span>
          <p className="title-xl text-grey-900 leading-7">{title}</p>
          <span className="body-sm text-grey-800 text-xs">{createdAt}</span>
        </div>
      </div>
    </Link>
  )
}
