import Container from "../ui/container";

export default function ProductPageLoadingShimmer() {
    return (
        <>
            <Container className="py-12 md:py-24 md:mt-12">
                <div className="flex flex-col md:flex-row gap-y-6 gap-x-12 items-center">
                    <div className="flex flex-col gap-y-3 md:gap-y-7 items-start flex-1">
                        <h1 className="title text-primary bg-grey-100 py-3 animate-pulse w-[220px] mb-3"></h1>
                        <div className="aspect-[630/497] bg-grey-200 w-full block sm:hidden  lg:h-[497px] rounded-3xl relative animate-pulse"></div>
                        <p className="body-md h-[100px] animate-pulse bg-grey-100  w-[80%] "></p>
                    </div>
                    <div className="aspect-[630/497] animate-pulse bg-grey-200 h-[320px] hidden sm:block relative lg:h-[497px] rounded-3xl"></div>
                </div>
            </Container>
            <section className="py-12 md:py-24 mb-12 md:mb-24 bg-[#F7F8F6] max-w-screen">
                <Container className="">
                    <div className="flex flex-col justify-center">
                        <div className="py-2 w-[200px] bg-grey-100 animate-pulse"></div>
                        <div className="py-2 w-[200px] bg-grey-100 animate-pulse"></div>
                    </div>
                    <div className="grid min-[420px]:grid-cols-2 md:grid-cols-3 gap-3 md:gap-5 mt-10">
                        <div className="flex flex-col gap-y-2">
                            <div className="aspect-square w-full animate-pulse bg-grey-100"></div>
                            <div className="py-2 w-[200px] bg-grey-100 animate-pulse"></div>
                            <div className="py-2 w-[200px] bg-grey-100 animate-pulse"></div>
                        </div>
                        <div className="flex flex-col gap-y-2">
                            <div className="aspect-square w-full animate-pulse bg-grey-100"></div>
                            <div className="py-2 w-[200px] bg-grey-100 animate-pulse"></div>
                            <div className="py-2 w-[200px] bg-grey-100 animate-pulse"></div>
                        </div>
                        <div className="flex flex-col gap-y-2">
                            <div className="aspect-square w-full animate-pulse bg-grey-100"></div>
                            <div className="py-2 w-[200px] bg-grey-100 animate-pulse"></div>
                            <div className="py-2 w-[200px] bg-grey-100 animate-pulse"></div>
                        </div>
                    </div>
                </Container>
            </section>
            <section className="py-12 md:py-24 mb-12 md:mb-24 bg-[#F7F8F6] max-w-screen">
                <Container className="">
                    <div className="flex flex-col justify-center">
                        <div className="py-2 w-[200px] bg-grey-100 animate-pulse"></div>
                        <div className="py-2 w-[200px] bg-grey-100 animate-pulse"></div>
                    </div>
                    <div className="grid min-[420px]:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 md:gap-5 mt-10">
                        <div className="flex flex-col gap-y-2">
                            <div className="aspect-square w-full animate-pulse bg-grey-100"></div>
                            <div className="py-2 w-[200px] bg-grey-100 animate-pulse"></div>
                            <div className="py-2 w-[200px] bg-grey-100 animate-pulse"></div>
                        </div>
                         <div className="flex flex-col gap-y-2">
                            <div className="aspect-square w-full animate-pulse bg-grey-100"></div>
                            <div className="py-2 w-[200px] bg-grey-100 animate-pulse"></div>
                            <div className="py-2 w-[200px] bg-grey-100 animate-pulse"></div>
                        </div>
                         <div className="flex flex-col gap-y-2">
                            <div className="aspect-square w-full animate-pulse bg-grey-100"></div>
                            <div className="py-2 w-[200px] bg-grey-100 animate-pulse"></div>
                            <div className="py-2 w-[200px] bg-grey-100 animate-pulse"></div>
                        </div>
                         <div className="flex flex-col gap-y-2">
                            <div className="aspect-square w-full animate-pulse bg-grey-100"></div>
                            <div className="py-2 w-[200px] bg-grey-100 animate-pulse"></div>
                            <div className="py-2 w-[200px] bg-grey-100 animate-pulse"></div>
                        </div>
                         <div className="flex flex-col gap-y-2">
                            <div className="aspect-square w-full animate-pulse bg-grey-100"></div>
                            <div className="py-2 w-[200px] bg-grey-100 animate-pulse"></div>
                            <div className="py-2 w-[200px] bg-grey-100 animate-pulse"></div>
                        </div>
                         <div className="flex flex-col gap-y-2">
                            <div className="aspect-square w-full animate-pulse bg-grey-100"></div>
                            <div className="py-2 w-[200px] bg-grey-100 animate-pulse"></div>
                            <div className="py-2 w-[200px] bg-grey-100 animate-pulse"></div>
                        </div>
                         <div className="flex flex-col gap-y-2">
                            <div className="aspect-square w-full animate-pulse bg-grey-100"></div>
                            <div className="py-2 w-[200px] bg-grey-100 animate-pulse"></div>
                            <div className="py-2 w-[200px] bg-grey-100 animate-pulse"></div>
                        </div>
                         <div className="flex flex-col gap-y-2">
                            <div className="aspect-square w-full animate-pulse bg-grey-100"></div>
                            <div className="py-2 w-[200px] bg-grey-100 animate-pulse"></div>
                            <div className="py-2 w-[200px] bg-grey-100 animate-pulse"></div>
                        </div>
                    </div>
                </Container>
            </section>
        </>
    )
}
