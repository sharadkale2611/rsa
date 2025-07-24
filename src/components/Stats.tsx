import { UserGroupIcon, TrophyIcon, AcademicCapIcon, ClockIcon } from '@heroicons/react/20/solid'
import Image from 'next/image'

const links = [
    { name: 'Our Courses', href: '#courses' },
    { name: 'Study Materials', href: '#materials' },
    // { name: 'Teaching Methodology', href: '#methodology' },
    { name: 'Meet Our Faculty', href: '#faculty' },
]

const stats = [
    { name: 'Students Enrolled', value: '1200+', icon: UserGroupIcon },
    { name: 'JEE/NEET Qualifiers', value: '95%', icon: TrophyIcon },
    { name: 'Faculty Experience', value: '15+ Years', icon: AcademicCapIcon },
    { name: 'Weekly Study Hours', value: '30+', icon: ClockIcon },
]

export default function Stats() {
    return (
        <div className="relative isolate overflow-hidden bg-[#d53207] py-24 sm:py-32">
            {/* Background image with overlay */}
            <Image
                alt="Students studying"
                height={400}
                width={400}
                src="/students1.png"
                className="absolute inset-0 -z-10 h-full w-full object-cover object-center opacity-20"
            />

            {/* Gradient overlay */}
            <div className="absolute inset-0 -z-10 bg-gradient-to-r from-[#d53207]/90 to-[#fccd0c]/30" />

            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 lg:mx-0 lg:max-w-none lg:grid-cols-2">
                    {/* Left column - Text content */}
                    <div className="lg:pr-8">
                        <div className="lg:max-w-lg">
                            <h2 className="text-4xl font-bold tracking-tight text-white sm:text-6xl">
                                Building <span className="text-[#fccd0c]">Academic Excellence</span>
                            </h2>
                            <p className="mt-6 text-lg leading-8 text-white/90">
                                Our proven track record speaks for itself. We transform potential into performance through dedicated mentoring
                                and scientifically designed curriculum.
                            </p>

                            {/* Quick links */}
                            <div className="mt-10 max-w-2xl lg:max-w-none">
                                <div className="grid grid-cols-1 gap-x-8 gap-y-6 text-base font-semibold text-white sm:grid-cols-2 md:flex lg:gap-x-10">
                                    {links.map((link) => (
                                        <a
                                            key={link.name}
                                            href={link.href}
                                            className="flex items-center hover:text-[#fccd0c] transition-colors"
                                        >
                                            {link.name} <span aria-hidden="true" className="ml-1">&rarr;</span>
                                        </a>
                                    ))}
                                </div>

                                {/* Stats grid with icons */}
                                <dl className="mt-16 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-2">
                                    {stats.map((stat) => {
                                        const Icon = stat.icon
                                        return (
                                            <div key={stat.name} className="flex flex-col items-start">
                                                <dt className="flex items-center text-base font-medium text-white/90">
                                                    <Icon className="h-5 w-5 mr-2 text-[#fccd0c]" aria-hidden="true" />
                                                    {stat.name}
                                                </dt>
                                                <dd className="mt-2 text-3xl font-bold tracking-tight text-white">
                                                    {stat.value}
                                                </dd>
                                            </div>
                                        )
                                    })}
                                </dl>
                            </div>
                        </div>
                    </div>

                    {/* Right column - YouTube video */}
                    <div className="flex items-start justify-center">
                        <div className="w-full max-w-md rounded-xl shadow-2xl overflow-hidden ring-1 ring-white/10">
                            <div className="aspect-w-16 aspect-h-9 opacity-40 hover:opacity-100 transition-opacity duration-500">
                                <iframe
                                    className="w-full h-full min-h-[315px]"
                                    src="https://www.youtube.com/embed/-mJFZp84TIY?list=PLu0W_9lII9agx66oZnT6IyhcMIbUMNMdt"
                                    title="YouTube video player"
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                    allowFullScreen
                                ></iframe>
                            </div>
                            <div className="bg-white/10 p-4">
                                <p className="text-sm font-medium text-white">
                                    Watch our classroom experience and teaching methodology
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}