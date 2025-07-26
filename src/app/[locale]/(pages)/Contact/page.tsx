import { MapPinIcon, PhoneIcon, EnvelopeIcon, ClockIcon } from '@heroicons/react/20/solid'

export default function ContactPage() {
    return (
        <div className="bg-[#dffffe] overflow-x-hidden">
            {/* Hero Section */}
            <div className="relative bg-[#FF6400]">
                <div className="absolute inset-0">
                    <div className="absolute inset-0 bg-[#FF6400] opacity-90" />
                </div>


                <div className="relative mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:px-8">
                    <div className="text-center">
                        <h1 className="text-4xl font-bold tracking-tight text-white sm:text-6xl">
                            Contact <span className="text-[#fccd0c]">Academic Programs</span>
                        </h1>
                        <p className="mt-6 text-lg leading-8 text-white/90">
                            We&apos;re here to answer your questions and guide your academic journey
                        </p>
                    </div>
                </div>
            </div>

            {/* Contact Grid - Now vertical on mobile */}
            <div className="mx-auto max-w-7xl px-4 py-8 sm:py-12 lg:px-8">
                <div className="flex flex-col lg:flex-row gap-8">
                    {/* Contact Information - Full width on mobile */}
                    <div className="w-full lg:w-1/2 space-y-6">
                        <h2 className="text-2xl font-bold tracking-tight text-gray-900">
                            Get in touch
                        </h2>
                        <p className="text-base text-gray-700">
                            Have questions about our programs? Want to schedule a campus visit?
                        </p>

                        <div className="space-y-4">
                            <div className="flex items-start">
                                <MapPinIcon className="h-5 w-5 text-[#d53207] mt-0.5 flex-shrink-0" />
                                <div className="ml-3">
                                    <h3 className="text-base font-medium text-gray-900">Our Campus</h3>
                                    <p className="mt-1 text-sm text-gray-700">
                                        First Floor, Late. Babasaheb Shankarrao Gaikwad Sankul,<br />
                                        Karanjepul, Baramati, Pune, India
                                    </p>
                                </div>
                            </div>

                            <div className="flex items-start">
                                <PhoneIcon className="h-5 w-5 text-[#d53207] mt-0.5 flex-shrink-0" />
                                <div className="ml-3">
                                    <h3 className="text-base font-medium text-gray-900">Phone</h3>
                                    <p className="mt-1 text-sm text-gray-700">
                                        Admissions: +91 7035361414<br />
                                        Administration: +91 8888401888
                                    </p>
                                </div>
                            </div>

                            <div className="flex items-start">
                                <EnvelopeIcon className="h-5 w-5 text-[#d53207] mt-0.5 flex-shrink-0" />
                                <div className="ml-3">
                                    <h3 className="text-base font-medium text-gray-900">Email</h3>
                                    <p className="mt-1 text-sm text-gray-700">
                                        Admissions: admissions@revolutionacademy.com<br />
                                        General: revolutionscienceacademy@gmail.com
                                    </p>
                                </div>
                            </div>

                            <div className="flex items-start">
                                <ClockIcon className="h-5 w-5 text-[#d53207] mt-0.5 flex-shrink-0" />
                                <div className="ml-3">
                                    <h3 className="text-base font-medium text-gray-900">Office Hours</h3>
                                    <p className="mt-1 text-sm text-gray-700">
                                        Monday - Saturday: 8:00 AM - 6:00 PM<br />
                                        Sunday: 10:00 AM - 2:00 PM
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Map and Form - Full width on mobile */}
                    <div className="w-full lg:w-1/2 space-y-6">
                        {/* Google Map - Single embed */}
                        <div className="overflow-hidden rounded-lg shadow-md h-48">
                            <iframe
                                src="https://www.google.com/maps/embed?pb=!1m16!1m11!1m3!1d159.7091285085931!2d74.28468340612258!3d18.11356495284771!2m2!1f331.2794545159229!2f0!3m2!1i1024!2i768!4f38.35687795275229!3m2!1m1!2zMTjCsDA2JzQ5LjIiTiA3NMKwMTcnMDMuNSJF!5e1!3m2!1sen!2sin!4v1753357393090!5m2!1sen!2sin"
                                width="100%"
                                height="100%"
                                style={{ border: 0 }}
                                allowFullScreen
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"
                            ></iframe>
                        </div>

                        {/* Compact Horizontal Form */}
                        <form className="space-y-4">
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                <div>
                                    <label htmlFor="name" className="block text-xs font-medium text-gray-900">
                                        Name
                                    </label>
                                    <input
                                        type="text"
                                        id="name"
                                        name="name"
                                        className="mt-1 block w-full rounded-md border-0 p-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-[#d53207] text-xs sm:text-sm"
                                    />
                                </div>
                                <div>
                                    <label htmlFor="phone" className="block text-xs font-medium text-gray-900">
                                        Phone
                                    </label>
                                    <input
                                        type="tel"
                                        id="phone"
                                        name="phone"
                                        className="mt-1 block w-full rounded-md border-0 p-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-[#d53207] text-xs sm:text-sm"
                                    />
                                </div>
                            </div>

                            <div>
                                <label htmlFor="email" className="block text-xs font-medium text-gray-900">
                                    Email
                                </label>
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    className="mt-1 block w-full rounded-md border-0 p-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-[#d53207] text-xs sm:text-sm"
                                />
                            </div>

                            <div>
                                <label htmlFor="message" className="block text-xs font-medium text-gray-900">
                                    Message
                                </label>
                                <textarea
                                    id="message"
                                    name="message"
                                    rows={3}
                                    className="mt-1 block w-full rounded-md border-0 p-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-[#d53207] text-xs sm:text-sm"
                                ></textarea>
                            </div>

                            <button
                                type="submit"
                                className="w-full rounded-md bg-[#d53207] px-4 py-2 text-sm font-semibold text-white shadow-sm hover:bg-[#a32805] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#d53207]"
                            >
                                Send Message
                            </button>
                        </form>
                    </div>
                </div>
            </div>

            {/* CTA Section */}
            <div className="bg-[#fccd0c] py-12">
                <div className="mx-auto max-w-7xl px-4 lg:px-8">
                    <div className="text-center">
                        <h2 className="text-xl font-bold tracking-tight text-gray-900 sm:text-2xl">
                            Visit our campus
                        </h2>
                        <p className="mt-2 text-sm leading-6 text-gray-800 sm:text-base">
                            Schedule a personal tour to experience our facilities
                        </p>
                        <div className="mt-6 flex flex-col sm:flex-row justify-center gap-3">
                            <a
                                href="#tour"
                                className="rounded-md bg-[#d53207] px-4 py-2 text-sm font-semibold text-white shadow-sm hover:bg-[#a32805]"
                            >
                                Book Campus Tour
                            </a>
                            <a href="tel:+917035361414" className="rounded-md bg-white px-4 py-2 text-sm font-semibold text-gray-900 shadow-sm hover:bg-gray-100">
                                Call Now
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}