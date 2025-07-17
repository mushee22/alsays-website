import { categoryService } from '@/service/api'
import { PropsWithChildren } from 'react'
import Footer from './footer'
import NavBar from './navbar'



export default async function Layout({ children }: PropsWithChildren) {

    const { data: categories = [] } = await categoryService.find({
        populate: {
            image: true,
            subCategories: true
        },
        sort:{
            order: "ASC"
        }
    })

    return (
        <>
            <NavBar categories={categories ?? []}/>
            <main className="@container flex-1">
                {children}
            </main>
            <Footer />
        </>
    )
}
