import LocationCard from "@/components/elements/location-card";
import Container from "@/components/ui/container";
import data from "@/data/contact.json";

export default function OurGlobalLocationSection() {

  const { locations, title } = data.sections.location

  return (
    <Container className="section-spacing">
      <h2 className="title text-center">{title}</h2>
      <div className="grid md:grid-cols-3 gap-5 py-5 md:py-10">
        {
          locations.map((location) => (
            <LocationCard
              address={location.address}
              country={location.country}
              location={location.location}
              key={location.country}
            />
          ))
        }
      </div>
      <div className='aspect-[1248/414] min-h-[414px] w-full'>
        <iframe
          className="w-full h-full "
          src={`https://maps.google.com/maps?q=${26.166753},${50.610746}&output=embed`}
        >
        </iframe>
      </div>
    </Container>
  )
}
