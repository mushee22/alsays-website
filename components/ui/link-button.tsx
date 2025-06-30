import { cn } from '@/lib/utils'
import { VariantProps } from 'class-variance-authority'
import Link, { LinkProps } from 'next/link'
import React from 'react'
import { buttonVariants } from './button'

type Props = LinkProps & VariantProps<typeof buttonVariants> & Omit<React.ComponentProps<'a'>, keyof LinkProps> & {}

export default function LinkButton({ children, href, variant, size, target, className }: Props) {
    return (
        <Link href={href || ""} target={target} className={cn(buttonVariants({ variant, size, className }))}>
            {children}
            <svg width="16" height="17" viewBox="0 0 16 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M9.61992 13.4393C9.49325 13.4393 9.36658 13.3927 9.26658 13.2927C9.07325 13.0993 9.07325 12.7793 9.26658 12.586L12.9599 8.89266L9.26658 5.19932C9.07325 5.00599 9.07325 4.68599 9.26658 4.49266C9.45992 4.29932 9.77992 4.29932 9.97325 4.49266L14.0199 8.53932C14.2132 8.73266 14.2132 9.05266 14.0199 9.24599L9.97325 13.2927C9.87325 13.3927 9.74658 13.4393 9.61992 13.4393Z" fill="white" />
                <path d="M13.5535 9.39258H2.3335C2.06016 9.39258 1.8335 9.16591 1.8335 8.89258C1.8335 8.61924 2.06016 8.39258 2.3335 8.39258H13.5535C13.8268 8.39258 14.0535 8.61924 14.0535 8.89258C14.0535 9.16591 13.8268 9.39258 13.5535 9.39258Z" fill="white" />
            </svg>
        </Link>
    )
}
