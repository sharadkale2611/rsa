'use client'

import { useState } from 'react'
import { Dialog, DialogPanel } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import Image from 'next/image'
import { useLang } from '@/utils/useLang'
import LanguageSwitcher from './LanguageSwitcher'
import Link from 'next/link'
// import { Link } from '@/i18n/navigation'


export default function Header() {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
    
    const lang = useLang();

    const navigation = [
        { name: lang(['nav','home']), href: '/', current: false },
        { name: lang(['nav', 'about']), href: '/About', current: false },
        { name: lang(['nav','courses']), href: '/courses', current: false },
        { name: lang(['nav','faculty']), href: '/faculty', current: false },
        { name: lang(['nav', 'events']), href: '/events', current: false },
        { name: lang(['nav', 'contact']), href: '/contact', current: false },
    ]


    return (
        <>
            <header className="absolute inset-x-0 top-0 z-50 brand-bg-cyan shadow-sm" aria-label="Main header">
                <nav className="mx-auto max-w-7xl px-6 lg:px-8" aria-label="Primary navigation">
                    <div className="flex items-center justify-between p-4">
                        {/* Logo - Single Link */}
                        <div className="flex lg:flex-1">
                            <div className="-m-1.5 p-1.5 flex items-center">
                                <Link
                                    href="/"
                                    className="flex items-center focus:outline-none focus:ring-2 focus:ring-accent rounded-md"
                                    aria-label="Revolution Academy homepage"
                                    onClick={() => setMobileMenuOpen(false)}
                                >
                                    <Image
                                        alt={lang(['company_name'])}
                                        width={50}
                                        height={50}
                                        src="/logo.png"
                                        className="h-10 w-auto"
                                        priority
                                    />
                                    <span className="ml-2 text-xl font-bold text-accent">
                                        {lang(['company_name'])}
                                        <span className="sr-only">{lang('nav.home')}</span>
                                    </span>
                                </Link>
                            </div>
                        </div>

                        {/* Desktop Navigation - Removed redundant Home link */}
                        <div className="hidden lg:flex lg:gap-x-12">
                            {navigation.filter(item => item.href !== '/').map((item) => (
                                <Link
                                    key={item.name}
                                    href={item.href}
                                    className={`text-sm font-semibold leading-6 px-3 py-2 rounded-md transition-colors ${item.current ? 'text-accent bg-primary/10' : 'text-primary hover:text-accent hover:bg-primary/5'}`}
                                    aria-current={item.current ? 'page' : undefined}
                                >
                                    {item.name}
                                </Link>
                            ))}
                        </div>

                        {/* Contact CTA */}
                        <div className="hidden lg:flex lg:flex-1 lg:justify-end">
                            <LanguageSwitcher/>
                        </div>

                        {/* Mobile Menu Button */}
                        <div className="flex lg:hidden">
                            <button
                                type="button"
                                className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-primary hover:text-accent focus:outline-none focus:ring-2 focus:ring-accent"
                                onClick={() => setMobileMenuOpen(true)}
                                aria-expanded={mobileMenuOpen}
                                aria-label="Open main menu"
                            >
                                <span className="sr-only">Open main menu</span>
                                <Bars3Icon className="h-6 w-6" aria-hidden="true" />
                            </button>
                        </div>
                    </div>
                </nav>

                {/* Mobile Menu */}
                <Dialog
                    as="div"
                    className="lg:hidden"
                    open={mobileMenuOpen}
                    onClose={setMobileMenuOpen}
                >
                    <div className="fixed inset-0 z-50" />
                    <DialogPanel className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto brand-bg-cyan px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-primary/10">
                        <div className="flex items-center justify-between">
                            <div className="-m-1.5 p-1.5 flex items-center">
                                <Link
                                    href="/"
                                    className="flex items-center"
                                    onClick={() => setMobileMenuOpen(false)}
                                    aria-label="Revolution Academy homepage"
                                >
                                    <Image
                                        alt="Revolution Academy logo"
                                        src="/logo.png"
                                        height={40}
                                        width={40}
                                        className="h-10 w-auto"
                                        priority
                                    />
                                    <span className="ml-2 text-lg font-semibold text-accent">
                                        Revolution Academy
                                    </span>
                                </Link>
                            </div>
                            <button
                                type="button"
                                className="-m-2.5 rounded-md p-2.5 text-primary hover:text-accent focus:outline-none focus:ring-2 focus:ring-accent"
                                onClick={() => setMobileMenuOpen(false)}
                                aria-label="Close menu"
                            >
                                <span className="sr-only">Close menu</span>
                                <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                            </button>
                        </div>
                        <div className="mt-6 flow-root">
                            <div className="-my-6 divide-y divide-primary/10">
                                <div className="space-y-2 py-6">
                                    {navigation.filter(item => item.href !== '/').map((item) => (
                                        <Link
                                            key={item.name}
                                            href={item.href}
                                            className={`-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 ${item.current ? 'text-accent bg-primary/10' : 'text-primary hover:bg-primary/5'}`}
                                            onClick={() => setMobileMenuOpen(false)}
                                            aria-current={item.current ? 'page' : undefined}
                                        >
                                            {item.name}
                                        </Link>
                                    ))}
                                </div>
                                <div className="py-6">
                                    <LanguageSwitcher />
                                </div>
                            </div>
                        </div>
                    </DialogPanel>
                </Dialog>
            </header>

            {/* Skip to Content Link */}
            {/* <a
                href="#main-content"
                className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[999] focus:bg-primary focus:text-inverse focus:px-4 focus:py-2 focus:rounded-md focus:shadow-lg focus:font-semibold"
            >
                Skip to main content
            </a> */}
        </>
    )
}