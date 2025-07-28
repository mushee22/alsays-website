import { FacebookIcon, InstagramIcon, XIcon, YoutubeIcon } from "@/assets";


export const footer = {
    title: "AL SAIS TRADING",
    description: `
     Alsais Trading Co. is a Saudi-based company providing reliable trading, 
     contracting, and supply solutions across various industries.
    `,
    socialIcons: [
        {
            name: "Instagram",
            icon: InstagramIcon,
            link: "https://www.linkedin.com/company/alsais-trading"
        },
        {
            name: "Facebook",
            icon: FacebookIcon,
            link: "https://www.facebook.com/alsais.trading"
        },
        {
            name: "X",
            icon: XIcon,
            link: "https://www.instagram.com/alsais.trading"
        },
        {
            name: "YouTube",
            icon: YoutubeIcon,
            link: "https://www.instagram.com/alsais.trading"
        },
    ],
    footerLinks: [
        {
            title: "Company",
            links: [
                { name: "About Us", link: "/about-us" },
                { name: "Blogs", link: "/blog" },
                { name: "Contact us", link: "/contact-us" },
            ]
        },
        {
            title: "Resources",
            links: [
                // { name: "Products", link: "/products" },
                { name: "Sustainability", link: "/sustainability" },
                { name: "Careers", link: "/career" },
            ]
        },
    ],
    address: {
        title: "Contact",
        location: `Warehouse Office 
Warehouse # 01/02, 22nd Street, Al Marabea Street,
Near FedEx Service Center,
Al Quoz Industrial Area  # 3,
Dubai, United Arab Emirates.`,
        phone: "+971 42884615",
        email: "info@alsais-trading.com \n alsays@alsais-trading.com"
    },
    subscription: {
        title: "Subscribe our Newsletter",
        description: `
         Alsais Trading Co. is a Saudi-based company providing reliable trading, 
         contracting, and supply solutions across various industries.
        `
    }
}