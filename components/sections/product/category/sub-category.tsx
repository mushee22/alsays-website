import SubCategoryCard from "@/components/elements/sub-category-card";
import Container from "@/components/ui/container";

export default function SubCategorySection() {
    return (
        <section className="py-12 md:py-24 bg-[#F7F8F6] max-w-screen">
            <Container className="">
                <div className="flex flex-col justify-center">
                    <span className="title-lg text-grey-800 text-center">Categories for you</span>
                    <h2 className="heading-md text-primary text-center">Collect insights you can trust</h2>
                </div>
                <div className="grid min-[420px]:grid-cols-2 md:grid-cols-3 gap-3 md:gap-5 mt-10">
                    <SubCategoryCard />
                    <SubCategoryCard />
                    <SubCategoryCard />
                </div>
            </Container>
        </section>
    )
}
