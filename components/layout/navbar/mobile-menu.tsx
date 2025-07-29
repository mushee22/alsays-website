"use client"

import { LogoDark } from '@/assets'
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import type { MenuItem } from "@/types"
import { ChevronDown, X } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { useState } from "react"

interface MobileMenuProps {
    isOpen: boolean
    menuItems: MenuItem[]
    onClose: () => void
}

export const MobileMenu = ({ isOpen, menuItems, onClose }: MobileMenuProps) => {
    const [expandedItems, setExpandedItems] = useState<Set<string>>(new Set())

    const toggleExpanded = (id: string) => {
        setExpandedItems((prev) => {
            const newSet = new Set(prev)
            if (newSet.has(id)) {
                newSet.delete(id)
            } else {
                newSet.add(id)
            }
            return newSet
        })
    }

    const renderMenuItem = (item: MenuItem, level = 0) => {
        const hasSubmenu = item.subMenu && item.subMenu.length > 0
        const isExpanded = expandedItems.has(item.id || item.title)

        return (
            <div key={item.id || item.title} className="border-b border-gray-100 last:border-b-0">
                {hasSubmenu ? (
                    <button
                        onClick={() => toggleExpanded(item.id || item.title)}
                        className={cn(
                            "w-full flex items-center justify-between p-4 text-left hover:bg-gray-50 transition-colors",
                            level > 0 && "pl-8",
                        )}
                        style={{
                            paddingLeft: level == 0 ? '16px' : 16 + level * 2 + 'px'
                        }}
                    >
                        <span className="font-medium text-gray-900">{item.title}</span>
                        <ChevronDown className={cn("w-4 h-4 transition-transform duration-200 text-primary", isExpanded && "rotate-180")} />
                    </button>
                ) : (
                    <Link
                        href={item.path || "#"}
                        onClick={onClose}
                        className={cn(
                            "block p-4 hover:bg-gray-50 transition-colors font-medium text-gray-900",
                            level > 0 && "pl-8",
                        )}
                        style={{
                            paddingLeft: level == 0 ? '16px' : 16 + level * 4 + 'px'
                        }}
                    >
                        {item.title}
                    </Link>
                )}

                {hasSubmenu && isExpanded && (
                    <div className="bg-gray-50">{item.subMenu?.map((subItem) => renderMenuItem(subItem, level + 1))}</div>
                )}
            </div>
        )
    }

    return (
        <div
            className={cn(
                "fixed inset-0 z-50 lg:hidden transition-all duration-300",
                isOpen ? "opacity-100 visible" : "opacity-0 invisible",
            )}
        >
            <div className="absolute inset-0 bg-black/50" onClick={onClose} />
            <div
                className={cn(
                    "absolute top-0 right-0 h-fit w-screen  bg-white shadow-xl transition-transform duration-300",
                    isOpen ? "translate-y-0" : "-translate-y-full",
                )}
            >
                <div className="flex flex-col h-full">
                    <div className="p-4 border-b flex items-center justify-between border-gray-100">
                        <h1 className="aspect-[97/68] h-[56px] md:h-[60px]  lg:h-[68px] relative">
                            <Link href="/" >
                                <Image
                                    src={LogoDark}
                                    alt="Al Says Trading & Contracting Logo"
                                    fill
                                />
                            </Link>
                        </h1>
                        <X className="text-primary" onClick={onClose} />
                    </div>

                    <div className="flex-1 overflow-y-auto">{menuItems.map((item) => renderMenuItem(item))}</div>

                    <div className="p-4 border-t border-gray-100 flex justify-end">
                        <Button className="w-full md:max-w-[120px] " onClick={onClose}>
                            Contact Us
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    )
}
