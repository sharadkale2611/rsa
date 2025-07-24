'use client'

import { useState } from 'react'
import { Dialog, DialogPanel } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import Image from 'next/image'
import Link from 'next/link'

const navigation = [
    { name: 'Home', href: '/', current: false },
    { name: 'About', href: '/About', current: true },
    { name: 'Courses', href: '/Courses', current: false },
    { name: 'Faculty', href: '/Faculty', current: false },
    { name: 'Results', href: '#results', current: false },
]

export default function Header() {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

    // Suggested hero image alternatives:
    // 1. "students-in-lab.jpg" - Students doing physics/chemistry experiments
    // 2. "classroom-teaching.jpg" - Engaged classroom session
    // 3. "competitive-students.jpg" - Students solving problems together

    return (
        <>
            {/* Academic-focused Navbar */}
            <header className="absolute inset-x-0 top-0 z-50 bg-[#dffffe] shadow-sm">
                <nav aria-label="Main navigation" className="flex items-center justify-between p-4 lg:px-8">
                    <div className="flex lg:flex-1">
                        <Link href="#main-content" className="-m-1.5 p-1.5 flex items-center focus:outline-none focus:ring-2 focus:ring-[#d53207] focus:ring-offset-2 rounded-md">
                            <Image
                                alt=""
                                width={50}
                                height={50}
                                src="/logo.png"
                                className="h-10 w-auto"
                                aria-hidden="true"
                            />
                            <span className="ml-2 text-xl font-bold text-[#d53207]">
                                Revolution Academy
                                <span className="sr-only">Home</span>
                            </span>
                        </Link>
                    </div>
                    <div className="flex lg:hidden">
                        <button
                            type="button"
                            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-[#d53207] hover:text-[#a32805] focus:outline-none focus:ring-2 focus:ring-[#d53207] focus:ring-offset-2"
                            onClick={() => setMobileMenuOpen(true)}
                            aria-expanded={mobileMenuOpen}
                            aria-controls="mobile-navigation"
                            aria-label="Open main menu"
                        >
                            <span className="sr-only">Open main menu</span>
                            <Bars3Icon className="h-6 w-6" aria-hidden="true" />
                        </button>
                    </div>
                    <div className="hidden lg:flex lg:gap-x-8">
                        {navigation.map((item) => (
                            <Link
                                key={item.name}
                                href={item.href}
                                className="text-sm font-semibold text-gray-900 hover:text-[#d53207] transition-colors focus:outline-none focus:ring-2 focus:ring-[#d53207] focus:ring-offset-2 rounded-md px-3 py-2"
                            >
                                {item.name}
                            </Link>
                        ))}
                    </div>
                    <div className="hidden lg:flex lg:flex-1 lg:justify-end">
                        <Link
                            href="/Contact"
                            className="text-sm font-semibold text-[#d53207] hover:text-[#a32805] transition-colors focus:outline-none focus:ring-2 focus:ring-[#d53207] focus:ring-offset-2 rounded-md px-3 py-2"
                        >
                            Contact Us <span aria-hidden="true">→</span>
                        </Link>
                    </div>
                </nav>

                <Dialog as="div" open={mobileMenuOpen} onClose={setMobileMenuOpen} className="lg:hidden">
                    <div className="fixed inset-0 z-50 bg-black/30 backdrop-blur-sm" aria-hidden="true" />
                    <DialogPanel className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-[#dffffe] p-6 sm:max-w-sm focus:outline-none">
                        <div className="flex items-center justify-between">
                            <Link href="/" className="-m-1.5 p-1.5 flex items-center">
                                <Image alt="" src="/logo.png" height={40} width={40} className="h-10 w-auto" aria-hidden="true" />
                                <span className="ml-2 text-lg font-semibold text-[#d53207]">
                                    Revolution Academy
                                    <span className="sr-only">Home</span>
                                </span>
                            </Link>
                            <button
                                type="button"
                                onClick={() => setMobileMenuOpen(false)}
                                className="-m-2.5 rounded-md p-2.5 text-[#d53207] hover:text-[#a32805] focus:outline-none focus:ring-2 focus:ring-[#d53207] focus:ring-offset-2"
                                aria-label="Close menu"
                            >
                                <span className="sr-only">Close menu</span>
                                <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                            </button>
                        </div>
                        <div className="mt-6 flow-root">
                            <div className="-my-6 divide-y divide-gray-500/10">
                                <div className="space-y-2 py-6">
                                    {navigation.map((item) => (
                                        <Link
                                            key={item.name}
                                            href={item.href}
                                            className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold text-gray-900 hover:bg-[#fccd0c]/30 hover:text-[#d53207]"
                                        >
                                            {item.name}
                                        </Link>
                                    ))}
                                </div>
                                <div className="py-6">
                                    <Link
                                        href="/Contact"
                                        className="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold text-[#d53207] hover:bg-[#fccd0c]/30"
                                    >
                                        Contact Us
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </DialogPanel>
                </Dialog>
            </header>
            <div id="main-content" tabIndex={-1} className="sr-only focus:not-sr-only">
                Skip to main content
            </div>
        </>
    )
}