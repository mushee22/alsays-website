import Container from '@/components/ui/container'
import data from "@/data/home.json"

export default function WhatWeAreSection() {
 
  const { title, description } = data.sections.whatWeAre  
    
  return (
    <Container className='section-spacing'>
        <div className='max-w-4xl mx-auto space-y-5 md:space-y-10'>
            <h2 className='text-primary text-center heading-lg font-medium'>{title}</h2>
            <p className='text-grey-800 body-md text-center max-w-[680px] mx-auto'>{description}</p>
        </div>
    </Container>
  )
}
