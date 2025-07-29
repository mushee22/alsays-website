import { Logo } from '@/assets';
import Image from "next/image";

import Icon from '@/assets/svg';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import Link from 'next/link';
import { footer } from "./data";

export default function Footer() {
    return (
        <footer className="pt-8 md:pt-16 pb-10 shadow-card-md bg-linear-(--footer-gradient)">
            <div className="max-w-7xl mx-auto px-4 @7xl:px-0 py-8 ">
                <div className='pt-3 md:pt-6 pb-11 border-b border-white/10'>
                    <div className="flex flex-col lg:flex-row gap-x-6 gap-y-6 xl:gap-x-14">
                        <div className='space-y-7'>
                            <Image
                                src={Logo}
                                alt="Logo of Al Says Trading & Contracting"
                                className=""
                                width={130}
                            />
                            <div className='md:max-w-[327px] space-y-4'>
                                <p className='title-sm uppercase'>{footer.title}</p>
                                <span className='body-sm text-grey-100'>{footer.description}</span>
                            </div>
                            <div>
                                {
                                    footer.socialIcons.map((icon) => (
                                        <Link href={icon.link} key={icon.name} className="inline-block mr-4">
                                            <Image
                                                src={icon.icon}
                                                alt={icon.name}
                                            />
                                        </Link>
                                    ))
                                }
                            </div>
                        </div>
                        <div className='flex flex-col sm:flex-row flex-1 gap-x-6 gap-y-4 justify-between'>
                            {footer.footerLinks.map((link) => (
                                <div key={link.title}>
                                    <h3 className='title-sm uppercase mb-4'>{link.title}</h3>
                                    <ul className='flex flex-col gap-y-2.5'>
                                        {link.links.map((item) => (
                                            <li key={item.name} className='body-sm text-grey-100 mb-2 text-no'>
                                                <Link href={item.link}>
                                                    {item.name}
                                                </Link>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            ))}
                            <div className='space-y-5 md:max-w-[240px]'>
                                <h3 className='title-sm uppercase mb-4'>{footer.address.title}</h3>
                                <div className='space-y-6 body-sm text-grey-100'>
                                    <div className='flex '>
                                        <Icon.Location/>
                                        <p className='whitespace-pre-wrap ml-1'>{footer.address.location}</p>
                                    </div>
                                    <div className='flex'>
                                        <Icon.Phone/>
                                        <p className='ml-1'>{footer.address.phone}</p>
                                    </div>
                                    <div className='flex max-w-[250px]'>
                                        <Icon.Email/>
                                        <p className='ml-1'>{footer.address.email}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='space-y-8 md:max-w-[280px]'>
                            <p className='title-sm uppercase mb-4 tracking-tight'>
                                {footer.subscription.title}
                            </p>
                            <form className='flex  gap-y-4 bg-white/10 items-center rounded-full px-[5] py-1'>
                                <Input
                                    type="email"
                                    placeholder='Enter your email'
                                    className='px-4 flex-1 !bg-transparent rounded-full outline-0 border-none text-grey-100 body-sm placeholder:text-grey-200'
                                />
                                <Button
                                   
                                    type='submit'
                                    variant="secondary"
                                    className='rounded-full  body-sm  transition-colors duration-300'
                                >
                                    <Link href="/contact-us">Subscribe</Link>
                                </Button>
                            </form>
                        </div>
                    </div>
                </div>
                <div className='px-6 py-4 mt-10 bg-white/10 rounded-full flex flex-wrap max-md:justify-center justify-between items-center'>
                    <span className='text-grey-200 body-sm'>
                        © AL Says Company FZE 2025 | All Rights Reserved
                    </span>
                    <div>
                        <Link href="/privacy-and-policy" className='text-grey-100 body-sm ml-2'>
                            Privacy Policy
                        </Link>
                        <span className='text-grey-100 body-sm mx-2'>|</span>
                        <Link href="/terms-and-conditions" className='text-grey-100 body-sm'>
                            Terms of Service
                        </Link>
                    </div>
                </div>
            </div>
        </footer>
    )
}
