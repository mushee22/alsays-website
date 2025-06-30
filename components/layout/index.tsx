import { PropsWithChildren } from 'react'
import Footer from './footer'
import NavBar from './navbar'



export default function Layout({ children }: PropsWithChildren) {
    return (
        <>
            <NavBar />
            <main className="@container flex-1">
                {children}
            </main>
            <Footer />
        </>
    )
}
