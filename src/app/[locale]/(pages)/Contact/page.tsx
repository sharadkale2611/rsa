import { useLang } from '@/utils/useLang';
import { MapPinIcon, PhoneIcon, EnvelopeIcon, ClockIcon } from '@heroicons/react/20/solid'
import Image from 'next/image';

export default function ContactPage() {
    const lang = useLang()
    return (
        <div className="bg-white text-gray-900 overflow-x-hidden">
            {/* Hero Section with background image and overlay */}
            <section className="relative bg-black/90">
                <div className="absolute inset-0">
                    <Image
                        alt="Event banner background"
                        src="/events/banner.jpeg"
                        fill
                        className="object-cover opacity-20"
                    />
                </div>
                <div className="relative mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:px-8">
                    <div className="text-center">
                        <h1 className="text-4xl font-bold tracking-tight text-white text-shadow sm:text-6xl">
                            {lang(['contacts', 'hero_title'])}{' '}
                            <span className="text-brand-yellow text-shadow">
                                {lang(['contacts', 'hero_span'])}                                
                            </span>
                        </h1>
                        <p className="mt-6 text-lg leading-8 text-white text-shadow">{lang(['contacts', 'hero_subtitle'])}</p>
                    </div>
                </div>
            </section>


            {/* Main Content */}
            <main className="mx-auto max-w-7xl px-4 py-12 lg:px-8 flex flex-col lg:flex-row gap-10">
                {/* Contact Information */}
                <section className="w-full lg:w-1/2 space-y-6">
                    <h2 className="text-2xl font-semibold">{lang(['contacts', 'section_title'])}</h2>
                    <p className="text-base text-gray-600">
                        {lang(['contacts', 'section_description'])}
                    </p>

                    <address className="not-italic space-y-6">
                        {/* Address */}
                        <div className="flex items-start gap-4">
                            <MapPinIcon className="h-6 w-6 text-orange-600 mt-1" />
                            <div>
                                <h3 className="font-medium">{lang(['contacts', 'address_title'])}</h3>
                                <p className="text-sm text-gray-700">
                                    {lang(['contacts', 'address_line1'])}<br />
                                    {lang(['contacts', 'address_line2'])}
                                </p>
                            </div>
                        </div>

                        {/* Phone */}
                        <div className="flex items-start gap-4">
                            <PhoneIcon className="h-6 w-6 text-orange-600 mt-1" />
                            <div>
                                <h3 className="font-medium">{lang(['contacts', 'phone_title'])}</h3>
                                <p className="text-sm text-gray-700">
                                    {lang(['contacts', 'phone_admissions'])}<br />
                                    {lang(['contacts', 'phone_admin'])}
                                </p>
                            </div>
                        </div>

                        {/* Email */}
                        <div className="flex items-start gap-4">
                            <EnvelopeIcon className="h-6 w-6 text-orange-600 mt-1" />
                            <div>
                                <h3 className="font-medium">{lang(['contacts', 'email_title'])}</h3>
                                <p className="text-sm text-gray-700">
                                    {lang(['contacts', 'email_admissions'])}<br />
                                    {lang(['contacts', 'email_general'])}
                                </p>
                            </div>
                        </div>

                        {/* Office Hours */}
                        <div className="flex items-start gap-4">
                            <ClockIcon className="h-6 w-6 text-orange-600 mt-1" />
                            <div>
                                <h3 className="font-medium">{lang(['contacts', 'hours_title'])}</h3>
                                <p className="text-sm text-gray-700">
                                    {lang(['contacts', 'hours_weekday'])}<br />
                                    {lang(['contacts', 'hours_sunday'])}
                                </p>
                            </div>
                        </div>
                    </address>
                </section>

                {/* Map & Form */}
                <section className="w-full lg:w-1/2 space-y-6">
                    {/* Map */}
                    <div className="overflow-hidden rounded-lg shadow-md h-52 sm:h-64">
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m16!1m11!1m3!1d159.7091285085931!2d74.28468340612258!3d18.11356495284771!2m2!1f331.2794545159229!2f0!3m2!1i1024!2i768!4f38.35687795275229!3m2!1m1!2zMTjCsDA2JzQ5LjIiTiA3NMKwMTcnMDMuNSJF!5e1!3m2!1sen!2sin!4v1753357393090!5m2!1sen!2sin"
                            width="100%"
                            height="100%"
                            style={{ border: 0 }}
                            allowFullScreen
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                            title="Campus Map"
                        ></iframe>
                    </div>

                    {/* Contact Form */}
                    <form className="space-y-4">
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            <div>
                                <label htmlFor="name" className="block text-sm font-medium">{lang(['contacts', 'form_name'])}</label>
                                <input
                                    type="text"
                                    id="name"
                                    name="name"
                                    className="mt-1 block w-full rounded-md border p-2 text-sm shadow-sm focus:ring-orange-600 focus:border-orange-600"
                                />
                            </div>
                            <div>
                                <label htmlFor="phone" className="block text-sm font-medium">{lang(['contacts', 'form_phone'])}</label>
                                <input
                                    type="tel"
                                    id="phone"
                                    name="phone"
                                    className="mt-1 block w-full rounded-md border p-2 text-sm shadow-sm focus:ring-orange-600 focus:border-orange-600"
                                />
                            </div>
                        </div>

                        <div>
                            <label htmlFor="email" className="block text-sm font-medium">{lang(['contacts', 'form_email'])}</label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                className="mt-1 block w-full rounded-md border p-2 text-sm shadow-sm focus:ring-orange-600 focus:border-orange-600"
                            />
                        </div>

                        <div>
                            <label htmlFor="message" className="block text-sm font-medium">{lang(['contacts', 'form_message'])}</label>
                            <textarea
                                id="message"
                                name="message"
                                rows={4}
                                className="mt-1 block w-full rounded-md border p-2 text-sm shadow-sm focus:ring-orange-600 focus:border-orange-600"
                            ></textarea>
                        </div>

                        <button
                            type="submit"
                            className="w-full bg-orange-600 text-white font-semibold py-2 rounded-md hover:bg-orange-700 transition"
                        >
                            {lang(['contacts', 'form_submit'])}
                        </button>
                    </form>
                </section>
            </main>

            {/* Call to Action */}
            <section className="bg-yellow-300 py-12">
                <div className="max-w-7xl mx-auto px-4 text-center">
                    <h2 className="text-xl font-bold sm:text-2xl text-gray-900">{lang(['contacts', 'cta_title'])}</h2>
                    <p className="mt-2 text-sm sm:text-base text-gray-800">{lang(['contacts', 'cta_subtitle'])}</p>
                    <div className="mt-6 flex flex-col sm:flex-row justify-center gap-4">
                        <a
                            href="#tour"
                            className="bg-orange-600 hover:bg-orange-700 text-white font-semibold px-5 py-2 rounded-md shadow"
                        >
                            {lang(['contacts', 'cta_button1'])}
                        </a>
                        <a
                            href="tel:+917035361414"
                            className="bg-white text-gray-900 font-semibold px-5 py-2 rounded-md shadow hover:bg-gray-100"
                        >
                            {lang(['contacts', 'cta_button2'])}
                        </a>
                    </div>
                </div>
            </section>
        </div>
    );
}
