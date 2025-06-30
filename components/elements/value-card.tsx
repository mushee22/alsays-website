

interface ValueCard {
    icon?: string,
    title?: string;
    description?: string;
}

export default function ValueCard({ description, title }: ValueCard) {
    return (
        <div className="p-6 rounded-2xl bg-[#F8FAFC] space-y-7">
            <div></div>
            <div className="space-y-2.5">
                <p className="title-lg text-grey-900">{title}</p>
                <span className="body-md text-grey-800">{description}</span>
            </div>
        </div>
    )
}
