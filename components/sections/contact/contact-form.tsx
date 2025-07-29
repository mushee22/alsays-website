import Icon from "@/assets/svg";
import ContactFormCard from "@/components/elements/contact-form-card";
import Container from "@/components/ui/container";
import data from "@/data/contact.json";

export default function ContactFormSection() {

    const { address, subHeading, title } = data.sections.contactForm

    return (
        <Container className="lg:mt-28 pt-20 lg:pt-24 section-spacing">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-11">
                <div className="pb-5 md:pb-10 flex flex-col justify-between">
                    <div className="space-y-4 md:space-y-8">
                        <p className="subheading">{subHeading}</p>
                        <h1 className="title">{title}</h1>
                    </div>
                    <div className="text-grey-800 space-y-6 text-md mt-5">
                        <div className="flex gap-x-4 ">
                            <Icon.EmailDark />
                            {
                                address.mail.map((mail) => (
                                    <a className="title-md text-grey-800 pr-2 border-r last:border-r-0" key={mail}>{mail}</a>
                                ))
                            }
                        </div>
                        <div className="flex gap-x-4 ">
                            <Icon.LocationDark />
                            <span className="max-w-[224px]">{address.address}</span>
                        </div>
                        <div className="flex gap-x-4 ">
                            <Icon.PhoneDark />
                            <span>{address.phone}</span>
                        </div>
                    </div>
                </div>
                <div>
                    <ContactFormCard />
                </div>
            </div>
        </Container>
    )
}
