import ContactBanner from "@/components/elements/contact-banner";
import Container from "@/components/ui/container";

export default function ContactSection() {
  return (
    <Container className="section-spacing ">
      <ContactBanner
        description="Feel free to contact us any time. we will get back to you as soon as we can!"
        title="Comprehensive trading solutions under one roof"
      />
    </Container>
  )
}
