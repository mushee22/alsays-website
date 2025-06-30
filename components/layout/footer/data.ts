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
                { name: "About Us", link: "/about" },
                { name: "Blogs", link: "/blogs" },
                { name: "Contact us", link: "/contact-us" },
            ]
        },
        {
            title: "Resources",
            links: [
                { name: "Products", link: "/products" },
                { name: "Solutions", link: "/solutions" },
                { name: "Careers", link: "/careers" },
            ]
        },
    ],
    address: {
        title: "Contact",
        location: `Al Says Company FZE

P1-ELOB Office No. E2-102F-60
PO Box No. 42966
Hamriyah Free Zone – Sharjah
United Arab Emirates`,
        phone: "+971 23456789",
        email: "info@alsais-trading.com"
    },
    subscription: {
        title: "Subscribe our Newsletter",
        description: `
         Alsais Trading Co. is a Saudi-based company providing reliable trading, 
         contracting, and supply solutions across various industries.
        `
    }
}