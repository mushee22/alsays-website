import { MenuSideImage } from '@/assets'
import { cn } from '@/lib/utils'
import type { MenuItem } from "@/types"
import Image from 'next/image'
import Link from 'next/link'
import MenuItemComponent from "./menu-item"

interface MegaMenuProps {
    isOpen: boolean
    activeMenu?: MenuItem
    hoveredItemId?: string
    onItemHover: (id?: string) => void
    show?: boolean;
}

export default function MegaMenu({ isOpen, show, activeMenu, hoveredItemId, onItemHover }: MegaMenuProps) {

    const currentSubmenu = activeMenu?.subMenu?.find((item) => item.title == hoveredItemId);


    return (
        <div
            className={cn(
                "max-w-7xl mx-auto absolute  max-lg:hidden top-full left-1/2 -translate-x-1/2 z-20 w-full p-6 bg-white border border-gray-100 rounded-b-2xl shadow-lg transition-all duration-300 overflow-hidden",
                (isOpen && show) ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-2 pointer-events-none",
            )}
            style={{ height: isOpen ? "420px" : "0" }}
        >
            <div className="flex h-full  text-primary">
                <div className="flex-1 space-y-1">
                    {activeMenu?.subMenu?.map((subMenuItem, index) => (
                        <div key={`${activeMenu.title}-${index}`}>
                            <MenuItemComponent
                                item={subMenuItem}
                                isActive={hoveredItemId === subMenuItem.title}
                                onHover={onItemHover}
                                level={1}
                                className='w-full justify-between hover:text-primary hover:bg-[#E0E0E066] rounded-2xl'
                            />
                        </div>
                    ))}
                </div>
                <div className="flex-1 ">
      
                    {currentSubmenu?.subMenu?.map((item, index) => (
                        <div key={`submenu-${index}`} className="">
                            <MenuItemComponent
                                item={item}
                                level={2}
                                className='w-full justify-between peer hover:text-primary hover:bg-[#E0E0E066] rounded-2xl'
                            />
                            {item.subMenu && (
                                <div className="pl-4 pt-1  opacity-0 h-0 hover:h-auto hover:opacity-100 overflow-hidden peer-hover:h-auto peer-hover:opacity-100 transition-opacity duration-200">
                                    {item.subMenu.map((subItem, subIndex) => (
                                        <MenuItemComponent
                                            key={`sub-${subIndex}`}
                                            item={subItem} level={3}
                                            className=''
                                        />
                                    ))}
                                </div>
                            )}
                        </div>
                    ))}
                </div>
                <Link href={"/contact-us"} className="aspect-[512/356] ml-2  md:h-[280px] lg:h-[356px] relative rounded-3xl">
                    <Image
                        src={MenuSideImage}
                        alt=""
                    />
                </Link>
            </div>
        </div>
    )
}
