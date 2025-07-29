import Container from '@/components/ui/container'
import data from "@/data/home.json"

export default function WhatWeAreSection() {
 
  const { title } = data.sections.whatWeAre  
    
  return (
    <Container className='section-spacing'>
        <div className='max-w-4xl mx-auto space-y-5 md:space-y-10'>
            <h2 className='text-primary text-center heading-lg font-medium'>{title}</h2>
        </div>
    </Container>
  )
}
