import { Button } from "@/components/ui/button";
import Container from "@/components/ui/container";

export default function HeroSection() {
    return (
        <Container className="py-12 md:py-24 md:mt-12">
            <div className="flex flex-col md:flex-row gap-y-6 gap-x-12">
                <div className="aspect-[630/497] bg-grey-200 h-[320px] hidden sm:block lg:h-[497px] rounded-3xl"></div>
                <div className="flex flex-col gap-y-3 md:gap-y-7 items-start">
                    <h1 className="heading-lg text-primary leading-7.5">Rubber Mats</h1>
                    <div className="aspect-[630/497] bg-grey-200 w-full block sm:hidden lg:h-[497px] rounded-3xl"></div>
                    <p className="body-md text-grey-800">
                       SF Rubber Flooring is available to order in pack of 10, 20... to 50. These are heavy-duty, 
                       versatile rubber flooring tiles that can be used for any gym - be it home or commercial. 
                       Each individual tile measures 500mm x 500mm x 10mm/20mm thick, and is manufactured from SBR rubber that is polymerically bonded with crumb rubber granules with hot-mold technology.
                       These mats are perfect to use as a lifting platform; or a landing pad. 
                       It protects your floor from scratches and abrasions which could easily be caused by dropping heavy weights.
                    </p>
                    <p className="body-md text-grey-800">
                       SF Rubber Flooring is available to order in pack of 10, 20... to 50. These are heavy-duty, 
                       versatile rubber flooring tiles that can be used for any gym - be it home or commercial. 
                       Each individual tile measures 500mm x 500mm x 10mm/20mm thick, and is manufactured from SBR rubber that is polymerically bonded with crumb rubber granules with hot-mold technology.
                       These mats are perfect to use as a lifting platform; or a landing pad. 
                       It protects your floor from scratches and abrasions which could easily be caused by dropping heavy weights.
                    </p>
                    <p className="body-md text-grey-800">
                        SF Rubber Flooring is available to order in pack of 10, 20... to 50. These are heavy-duty, 
                       versatile rubber flooring tiles that can be used for any gym - be it home or commercial. 
                       Each individual tile measures 500mm x 500mm x 10mm/20mm thick, and is manufactured from SBR rubber that is polymerically bonded with crumb rubber granules with hot-mold technology.
                       These mats are perfect to use as a lifting platform; or a landing pad.
                    </p>
                    <Button variant="outline" className="bg-transparent body-sm font-bold shadow-none border-primary flex items-center justify-center gap-x-1 w-[250px]">
                        Enquire now
                        <svg
                            width={25}
                            height={24}
                            viewBox="0 0 25 24"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <g clipPath="url(#clip0_2980_28605)">
                                <path
                                    d="M12.503 0H12.497C5.8805 0 0.5 5.382 0.5 12C0.5 14.625 1.346 17.058 2.7845 19.0335L1.289 23.4915L5.9015 22.017C7.799 23.274 10.0625 24 12.503 24C19.1195 24 24.5 18.6165 24.5 12C24.5 5.3835 19.1195 0 12.503 0Z"
                                    fill="#4CAF50"
                                />
                                <path
                                    d="M19.4858 16.9458C19.1963 17.7633 18.0473 18.4413 17.1308 18.6393C16.5038 18.7728 15.6848 18.8793 12.9278 17.7363C9.40132 16.2753 7.13032 12.6918 6.95332 12.4593C6.78382 12.2268 5.52832 10.5618 5.52832 8.83977C5.52832 7.11777 6.40282 6.27927 6.75532 5.91927C7.04482 5.62377 7.52332 5.48877 7.98232 5.48877C8.13082 5.48877 8.26432 5.49627 8.38432 5.50227C8.73682 5.51727 8.91382 5.53827 9.14632 6.09477C9.43582 6.79227 10.1408 8.51427 10.2248 8.69127C10.3103 8.86827 10.3958 9.10827 10.2758 9.34077C10.1633 9.58077 10.0643 9.68727 9.88732 9.89127C9.71032 10.0953 9.54232 10.2513 9.36532 10.4703C9.20332 10.6608 9.02032 10.8648 9.22432 11.2173C9.42832 11.5623 10.1333 12.7128 11.1713 13.6368C12.5108 14.8293 13.5968 15.2103 13.9853 15.3723C14.2748 15.4923 14.6198 15.4638 14.8313 15.2388C15.0998 14.9493 15.4313 14.4693 15.7688 13.9968C16.0088 13.6578 16.3118 13.6158 16.6298 13.7358C16.9538 13.8483 18.6683 14.6958 19.0208 14.8713C19.3733 15.0483 19.6058 15.1323 19.6913 15.2808C19.7753 15.4293 19.7753 16.1268 19.4858 16.9458Z"
                                    fill="#FAFAFA"
                                />
                            </g>
                            <defs>
                                <clipPath id="clip0_2980_28605">
                                    <rect width={24} height={24} fill="white" transform="translate(0.5)" />
                                </clipPath>
                            </defs>
                        </svg>
                    </Button>
                </div>
            </div>
        </Container>
    )
}