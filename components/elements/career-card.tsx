import Link from "next/link";
import { Button } from "../ui/button";

interface Career {
    name: string;
    type?: string;
}

export default function CareerCard({ name, type }: Career) {
    return (
        <Link href={""} className="flex flex-col gap-y-2 sm:flex-row max-md:border border-secondary max-md:p-3 max-md:rounded-2xl items-start md:items-center gap-x-3">
            <p className="title-lg flex-1">{name}</p>
            <p className="body-lg md:flex-1">{type}</p>
            <Button  variant="secondary" className="[&_path]:fill-primary md:hidden">View</Button>
            <div className="hidden md:inline">
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M9.61943 12.5467C9.49276 12.5467 9.36609 12.5001 9.26609 12.4001C9.07276 12.2067 9.07276 11.8867 9.26609 11.6934L12.9594 8.00008L9.26609 4.30674C9.07276 4.11341 9.07276 3.79341 9.26609 3.60008C9.45943 3.40674 9.77943 3.40674 9.97276 3.60008L14.0194 7.64675C14.2128 7.84008 14.2128 8.16008 14.0194 8.35341L9.97276 12.4001C9.87276 12.5001 9.74609 12.5467 9.61943 12.5467Z" fill="white" />
                <path d="M13.554 8.5H2.33398C2.06065 8.5 1.83398 8.27333 1.83398 8C1.83398 7.72667 2.06065 7.5 2.33398 7.5H13.554C13.8273 7.5 14.054 7.72667 14.054 8C14.054 8.27333 13.8273 8.5 13.554 8.5Z" fill="white" />
            </svg>
            </div>
        </Link>
    )
}
