import BlogCard from '@/components/elements/blog-card'
import Container from '@/components/ui/container'
import LinkButton from '@/components/ui/link-button'

import { blogService } from '@/service/strapi'

export default async function WhatIsNewSection() {
  
    const { data: latestBlogs = [] } =  await blogService.find({
        populate: {
            cover: true,
        },
        limit: 3,
    })

    if (latestBlogs.length === 0) {
        return null;
    }

    return (
        <Container className="section-spacing">
            <div className='flex  justify-between'>
                <h3 className="text-primary heading-md">What is new</h3>
                <LinkButton href={"/blog"}>Read More</LinkButton>
            </div>
            <div className="grid  md:grid-cols-3 gap-5 mt-5 md:mt-10">
                {
                    latestBlogs.map((blog, index) => (
                        <BlogCard
                            key={index}
                            {...blog}
                        />
                    ))
                }
                
            </div>
        </Container>
    )
}
