'use client'

import { JSX, useState } from 'react'
import Image from 'next/image'
import { Dialog } from '@headlessui/react'
import { Tab, Tabs } from '@/components/Tabs'
import { useLang } from '@/utils/useLang'

const categories = [
    {
        name: 'Academic',
        images: ['/events/academic1.jpeg', '/events/academic2.jpeg', '/events/academic3.jpeg'],
    },
    {
        name: 'Cultural',
        images: ['/events/cultural1.jpeg', '/events/cultural2.jpeg', '/events/cultural3.jpeg'],
    },
    {
        name: 'Motivation',
        images: ['/events/motivation1.jpeg', '/events/motivation2.jpeg', '/events/motivation3.jpeg'],
    },
]

export default function EventsPage(): JSX.Element {
    const [selectedTab, setSelectedTab] = useState<string>('Academic')
    const [isOpen, setIsOpen] = useState<boolean>(false)
    const [activeImage, setActiveImage] = useState<string>('')
    const lang = useLang()
    const handleImageClick = (src: string): void => {
        setActiveImage(src)
        setIsOpen(true)
    }

    return (
        <main>
            {/* Hero Section with background image and overlay */}
            <section className="relative bg-black/90">
                <div className="absolute inset-0">
                    <Image
                        alt={lang(['events', 'banner_alt'])}
                        src="/events/banner.jpeg"
                        fill
                        className="object-cover opacity-20"
                    />
                </div>
                <div className="relative mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:px-8">
                    <div className="text-center">
                        <h1 className="text-4xl font-bold tracking-tight text-white text-shadow sm:text-6xl">
                            {lang(['events', 'heading'])}{' '}
                            <span className="text-brand-yellow text-shadow">{lang(['events', 'highlight'])}</span>
                        </h1>
                        <p className="mt-6 text-lg leading-8 text-white text-shadow">
                            {lang(['events', 'subheading'])}
                        </p>
                    </div>
                </div>
            </section>

            <section className="max-w-6xl mx-auto px-4 py-12">
                <div className="mb-6">
                    <Tabs value={selectedTab} onValueChange={setSelectedTab}>
                        {categories.map((category) => (
                            <Tab key={category.name} value={category.name}>
                                {lang(['events', `categories.${category.name.toLowerCase()}`])}
                            </Tab>
                        ))}
                    </Tabs>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                    {categories
                        .find((cat) => cat.name === selectedTab)
                        ?.images.map((src) => (
                            <button
                                key={src}
                                onClick={() => handleImageClick(src)}
                                className="focus:outline-none"
                                aria-label={lang(['events', 'view_image'])}
                            >
                                <Image
                                    src={src}
                                    alt={lang(['events', 'event_image_alt'])}
                                    width={400}
                                    height={300}
                                    className="rounded-lg shadow hover:scale-105 transition-transform"
                                />
                            </button>
                        ))}
                </div>

                <Dialog open={isOpen} onClose={() => setIsOpen(false)} className="fixed z-50 inset-0 overflow-y-auto">
                    {/* Background overlay */}
                    <div className="fixed inset-0 bg-black/85" aria-hidden="true" />

                    {/* Centered modal */}
                    <div className="flex items-center justify-center min-h-screen px-4 relative z-50">
                        <Dialog.Panel className="max-w-3xl w-full bg-white rounded-lg shadow-xl overflow-hidden">
                            <Image
                                src={activeImage}
                                alt={lang(['events', 'full_image_alt'])}
                                width={900}
                                height={600}
                                className="w-full h-auto"
                            />
                        </Dialog.Panel>
                    </div>
                </Dialog>
            </section>
        </main>
    )
}
