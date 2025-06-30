import { cn } from "@/lib/utils";
import { MenuItemProps } from "@/types";
import { ChevronDown, ChevronRight } from "lucide-react";
import Link from "next/link";

export default function MenuItem({ item, isActive = false, onHover, onClick, level = 0, className = '' }: MenuItemProps) {

    const hasSubmenu = item.subMenu && item.subMenu.length > 0;

    const handleOnMouseClick = () => {
        onClick?.(item.id ?? '')
    }

    const handleOnMouseEnter = () => {
        if (level == 0) return
        onHover?.(item?.title ?? '')
    }

    if (!hasSubmenu && item.path) {
        return (
            <Link href={item.path ?? ''} className={cn('title-sm inline-block px-2 lg:px-4 py-2 text-grey-800 hover:text-primary', className)}>
                {item.title}
            </Link>
        )
    }

    return (
        <Link
            className={cn('px-4 py-2 flex gap-x-1 items-center cursor-pointer', className)}
            key={item.id}
            onClick={handleOnMouseClick}
            href={''}
            onMouseEnter={handleOnMouseEnter}
        >
            <span className={cn("title-sm  hover:text-primary", isActive ? 'text-primary' : 'text-grey-800')}>{item.title}</span>
            {hasSubmenu &&
                (level === 0 ? (
                    <ChevronDown className={cn("w-4 h-4 transition-transform duration-200", isActive && "rotate-180")} />
                ) : (
                    <ChevronRight className="w-4 h-4 text-gray-400" />
                ))}
        </Link>
    )
}
