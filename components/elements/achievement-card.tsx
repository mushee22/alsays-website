import { cn } from "@/lib/utils";

interface Achievement extends React.ComponentProps<"div">{
    count: string,
    type: string,
    description: string;
    variant?: "home" | "about"
}

export default function AchievementCard({ variant = "home" , count, type, description, className }:Achievement) {
    return (
        <div className={cn("flex flex-col gap-y-1", className)}>
            <h3 className="heading-lg text-success-100">{count}</h3>
            <p className="text-success-100 text-xl">{type}</p>
            <span className={cn( variant == "home" ? "text-grey-800 body-lg text-left" : "body-md text-white text-center" )}>{description}</span>
        </div>
    )
}
