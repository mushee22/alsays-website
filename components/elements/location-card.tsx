interface Location {
    country: string;
    location: string;
    address: string;
    map?: string
}

export default function LocationCard({ country, location, address }: Location) {
    return (
        <div className="p-4 rounded-[10px] hover:shadow-card-md transition-shadow duration-300 border flex flex-col space-y-6 text-grey-800">
            <div className="h-10 w-10 rounded-full bg-grey-100"></div>
            <span className="title-lg uppercase">{country}</span>
            <span className="title-md">{location}</span>
            <p className="body-sm">{address}</p>
        </div>
    )
}
