"use client"

import { usePathname } from "next/navigation";
import { useCallback, useEffect, useRef, useState } from "react";

let timeOut: NodeJS.Timeout;
export const useNavigation = () => {

    const pathname = usePathname();

    const [show, setShow] = useState<boolean>(true);

    const [activeSubmenuId, setActiveSubmenuId] = useState<string | undefined>('')

    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

    const [hoveredItemId, setHoveredItemId] = useState<string | undefined>(undefined);

    const prevScrollRef = useRef<number>(0)

    useEffect(() => {

        if (window) {
            window.addEventListener('scroll', () => {
                var currentScrollPos = window.pageYOffset;
                if (prevScrollRef.current > currentScrollPos) {
                    setShow(true)
                } else {
                    setShow(false)
                }
                prevScrollRef.current = currentScrollPos;
            })
        }

        return () => {
            clearTimeout(timeOut)
        }
    }, [])

    // Close mobile menu on route change
    useEffect(() => {
        setIsMobileMenuOpen(false)
        setActiveSubmenuId(undefined)
    }, [pathname])

    // Close mobile menu on escape key
    useEffect(() => {
        const handleEscape = (e: KeyboardEvent) => {
            if (e.key === "Escape") {
                setIsMobileMenuOpen(false)
                setActiveSubmenuId(undefined)
            }
        }

        if (isMobileMenuOpen) {
            document.addEventListener("keydown", handleEscape)
            document.body.style.overflow = "hidden"
        } else {
            document.body.style.overflow = "unset"
        }

        return () => {
            document.removeEventListener("keydown", handleEscape)
            document.body.style.overflow = "unset"
        }
    }, [isMobileMenuOpen])

    const toggleMobileMenu = useCallback(() => {
        setIsMobileMenuOpen((prev) => !prev)
    }, [])

    const handleSubmenuToggle = useCallback((id: string) => {

        if (timeOut) {
            clearTimeout(timeOut)
        }

        if (!id) {
            setActiveSubmenuId(undefined)
            return
        }

        if (!activeSubmenuId) {
            setActiveSubmenuId(id)
            return
        }

        setActiveSubmenuId((prevId) => {
            if (!prevId) return id;
            if (prevId == id) return undefined;
            timeOut = setTimeout(() => {
                setActiveSubmenuId(id)
            }, 500)
            return undefined
        })

    }, [])



    const handleItemHover = useCallback((id: string | undefined) => {
        setHoveredItemId(id)
    }, [])

    return {
        pathname,
        show,
        activeSubmenuId,
        isMobileMenuOpen,
        hoveredItemId,
        toggleMobileMenu,
        handleSubmenuToggle,
        handleItemHover,
    }
}
