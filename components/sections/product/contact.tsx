import ContactBanner from '@/components/elements/contact-banner'
import Container from '@/components/ui/container'

export default function ContactBannerSection() {
  return (
    <Container className='section-spacing'>
        <ContactBanner
          title='Need a Specific Product?'
          description='Let us know your requirements — we’ll source and deliver the right solution for your project.'
        />
    </Container>
  )
}