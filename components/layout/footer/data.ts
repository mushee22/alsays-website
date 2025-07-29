import { FacebookIcon, InstagramIcon, LinkdInIcon } from "@/assets";


export const footer = {
    title: "AL Says Company FZE",
    description: `
     AL Says Company FZE. is an UAE – Dubai based company providing reliable trading and supply solutions across various industries.
    `,
    socialIcons: [
        {
            name: "Instagram",
            icon: InstagramIcon,
            link: "https://www.instagram.com/allsays_flooring/"
        },
        {
            name: "Facebook",
            icon: FacebookIcon,
            link: "https://www.facebook.com/allsaysflooring"
        },
        // {
        //     name: "X",
        //     icon: XIcon,
        //     link: "https://www.instagram.com/alsais.trading"
        // },
        {
            name: "LinkdIn",
            icon: LinkdInIcon,
            link: "https://www.linkedin.com/company/all-says-floorings/?viewAsMember=true"
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