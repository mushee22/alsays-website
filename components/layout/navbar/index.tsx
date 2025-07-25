'use client'

import Image from "next/image";
import Link from "next/link";

import { LogoDark } from '@/assets';
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { useMemo } from "react";

import { useNavigation } from "@/hooks/use-navigation";
import { Category } from "@/types";
import { Menu, X } from "lucide-react";
import MegaMenu from "./mega-menu";
import MenuItem from "./menu-item";
import { MobileMenu } from "./mobile-menu";

interface Menu {
    title: string;
    path?: string;
    subMenu?: Omit<Menu, 'id'>[];
    id: string
}

export default function NavBar({ categories } : { categories?: Category[] }) {

    const {
        isMobileMenuOpen,
        hoveredItemId,
        show,
        activeSubmenuId,
        toggleMobileMenu,
        handleSubmenuToggle,
        handleItemHover
    } = useNavigation();


    const MENU_DATA: Menu[] = useMemo(() =>{

        const productAndServicesMenu = categories?.map((category) => {
            return {
                title: category.name ?? "",
                path: `/product/${category.slug}`,
                subMenu: category.subCategories?.map((subCategory) => {
                    return {
                        title: subCategory.name ?? "",
                        path: `/product/${category.slug}/${subCategory.slug}`,
                    }
                })
            }
        })

       

        return  [
        {
            title: "About Us",
            path: "/about-us",
            id: "ABOUT_US"
        },
        {
            title: "Products & Services",
            id: "PRODUCT_AND_SERVICES",
            subMenu: productAndServicesMenu
        },
        { title: "Market Presence", path: "/market-presence", id: "MARKET_PRESENCE" },
        { title: "Sustainability", path: "/sustainability", id: "SUSTAINABILITY" },
        {
            title: "Resource",
            id: "RESOURCE",
            subMenu: [
                { title: "Blog", path: "/blog" },
                { title: "News & Publications", path: "/news" },
            ],
        },
    ]
    }, [categories]);

    const open = !!activeSubmenuId

    const activeMenu = MENU_DATA.find((item) => item.id === activeSubmenuId)

    

    return (
        <>
            <header className="fixed w-full z-30">
                <nav className={cn("flex mx-auto lg:mt-8 z-20 w-full  max-w-7xl items-center max-lg:justify-between bg-white lg:border border-grey-100  px-4 @7xl:px-0 lg:shadow-card-md transition-all duration-200 max-lg:rounded-none", open ? "lg:rounded-ss-2xl lg:border-b-0 rounded-se-2xl" : 'rounded-2xl delay-300', show ? 'translate-y-0' : '-translate-y-[200px]')}>
                    <h1 className="aspect-[97/68] h-[48px] md:h-[60px]  lg:h-[68px] relative">
                        <Link href="/" >
                            <Image
                                src={LogoDark}
                                alt="Al Says Trading & Contracting Logo"
                                fill
                            />
                        </Link>
                    </h1>
                    <ul className="hidden lg:flex   flex-1 text-grey-800 title-md justify-center">
                        {
                            MENU_DATA.map((item) => (
                                <MenuItem
                                    item={item}
                                    isActive={activeMenu?.id == item.id}
                                    level={0}
                                    onClick={handleSubmenuToggle}
                                    key={item.id}
                                    className=""
                                />
                            ))
                        }
                    </ul>
                    <Button className="font-bold hidden lg:block" asChild>
                        <Link href="/contact-us">
                            Contact Us
                        </Link>
                    </Button>
                    <button onClick={toggleMobileMenu} className="lg:hidden flex flex-col items-center justify-center relative" aria-label="Toggle mobile menu">
                        <Menu
                            className={cn(
                                "w-6 h-6 text-primary absolute transition-all duration-300",
                                isMobileMenuOpen ? "opacity-0 rotate-45" : "opacity-100 rotate-0",
                            )}
                        />
                        <X
                            className={cn(
                                "w-6 h-6 text-primary absolute transition-all duration-300",
                                isMobileMenuOpen ? "opacity-100 rotate-0" : "opacity-0 -rotate-45",
                            )}
                        />
                    </button>
                </nav>
                <MegaMenu
                    hoveredItemId={hoveredItemId}
                    isOpen={open}
                    onItemHover={handleItemHover}
                    activeMenu={activeMenu}
                    show={show}
                />
                {/* <div className="absolute inset-0  -z-10" onClick={() => handleSubmenuToggle('')}></div> */}
            </header>
            <MobileMenu
                isOpen={isMobileMenuOpen}
                menuItems={MENU_DATA}
                onClose={toggleMobileMenu}
            />
        </>
    )
}
