import { getCategoriesWithSubCategory } from '@/api/product'
import { PropsWithChildren } from 'react'
import Footer from './footer'
import NavBar from './navbar'

export default async function Layout({ children }: PropsWithChildren) {

    const { data: categories = [] } = await getCategoriesWithSubCategory()

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
