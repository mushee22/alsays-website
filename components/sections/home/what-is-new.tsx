import BlogCard from '@/components/elements/blog-card'
import Container from '@/components/ui/container'
import LinkButton from '@/components/ui/link-button'

import { BlogImageOne, BlogImageThree, BlogImageTwo } from "@/assets"

export default function WhatIsNewSection() {
    return (
        <Container className="section-spacing">
            <div className='flex  justify-between'>
                <h3 className="text-primary heading-md">What is new</h3>
                <LinkButton href={"/blog"}>Read More</LinkButton>
            </div>
            <div className="grid  md:grid-cols-3 gap-5 mt-5 md:mt-10">
                <BlogCard
                    createdAt="February 18, 2025"
                    title="Coming soon! New updates & features for Ionic’s Open Source projects"
                    className="**:data-title:text-lg"
                    coverImage={BlogImageOne}
                />
                <BlogCard
                    createdAt="February 18, 2025"
                    title="Coming soon! New updates & features for Ionic’s Open Source projects"
                    className="**:data-title:text-lg"
                    coverImage={BlogImageTwo}
                />
                <BlogCard
                    createdAt="February 18, 2025"
                    title="Coming soon! New updates & features for Ionic’s Open Source projects"
                    className="**:data-title:text-lg"
                    coverImage={BlogImageThree}
                />
            </div>
        </Container>
    )
}
