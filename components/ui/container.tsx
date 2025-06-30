import { cn } from "@/lib/utils";
import { PropsWithChildren } from "react";

interface Props extends PropsWithChildren {
    className?: string;
}

export default function Container({ className, children }: Props) {
    return (
        <section className={cn('max-w-7xl mx-auto px-4 @7xl:px-0 ', className)}>
            {children}
        </section>
    )
}
