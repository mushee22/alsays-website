import NewsCard from "@/components/elements/news-card";
import Container from "@/components/ui/container";
import { NewsAndPublication } from "@/types";

export default function ListSection({ news }: { news?: NewsAndPublication[] }) {
  return (
    <Container className="lg:mt-24 pt-24 pb-12 lg:py-24">
      <h1 className="text-primary heading-lg">AL Says Newsroom</h1>
      <p className="body-md text-grey-800">
        Browse recent press releases and media coverage
      </p>
      <div className="flex flex-row items-start mt-6">
        <div className=" flex-1 md:border-r-0">
          {news?.map((item, index) => (
            <NewsCard key={index} {...item} />
          ))}
        </div>
        {/* <div className="md:w-[285px]  md:pl-6 space-y-8 sticky top-[120px]">
          <p className="title-lg text-grey-900 max-md:hidden">Follow along</p>
          <div className="flex flex-col gap-y-3 md:flex-row gap-x-4">
            {footer.socialIcons.map((icon) => (
              <Link
                href={icon.link}
                key={icon.name}
                className="inline-block mr-4"
              >
                <Image src={icon.icon} alt={icon.name} width={30} height={30} />
              </Link>
            ))}
          </div>
        </div> */}
      </div>
    </Container>
  );
}
