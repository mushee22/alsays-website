import { categoryService } from '@/service/strapi'
import { unstable_cache } from 'next/cache'
import { PropsWithChildren } from 'react'
import Footer from './footer'
import NavBar from './navbar'

const getCacheCategories = unstable_cache(async () => {
    return categoryService.find({
        populate: {
            image: true,
            subCategories: true
        },
        sort: {
            order: "ASC"
        }
    })
}, [], {
    tags: ['menu']
})

export default async function Layout({ children }: PropsWithChildren) {

    const { data: categories = [] } = await getCacheCategories()

    return (
        <>
            <NavBar categories={categories ?? []} />
            <main className="@container flex-1">
                {children}
            </main>
            <Footer />
        </>
    )
}
