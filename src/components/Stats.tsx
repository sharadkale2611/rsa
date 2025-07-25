import {
    AcademicCapIcon,
    ClockIcon,
    TrophyIcon,
    UserGroupIcon,
} from '@heroicons/react/20/solid';
import Image from 'next/image';
import Link from 'next/link';

interface Stat {
    id: string;
    name: string;
    value: string;
    icon: React.ComponentType<{ className?: string; ariaHidden?: boolean }>;
}

interface LinkItem {
    id: string;
    name: string;
    href: string;
}

export default function Stats() {
    const links: LinkItem[] = [
        { id: 'courses', name: 'Our Courses', href: '/courses' },
        { id: 'materials', name: 'Study Materials', href: '/materials' },
        { id: 'faculty', name: 'Meet Our Faculty', href: '/faculty' },
    ];

    const stats: Stat[] = [
        { id: 'students', name: 'Students Enrolled', value: '1200+', icon: UserGroupIcon },
        { id: 'qualifiers', name: 'JEE/NEET Qualifiers', value: '95%', icon: TrophyIcon },
        { id: 'experience', name: 'Faculty Experience', value: '15+ Years', icon: AcademicCapIcon },
        { id: 'hours', name: 'Weekly Study Hours', value: '30+', icon: ClockIcon },
    ];

    return (
        <section
            aria-labelledby="stats-heading"
            className="relative isolate overflow-hidden brand-bg-orange py-24 sm:py-32"
        >
            <Image
                alt="Diverse group of students studying together"
                height={800}
                width={1200}
                src="/students1.png"
                className="absolute inset-0 -z-10 h-full w-full object-cover object-center opacity-20"
                priority
                aria-hidden="true"
            />

            <div
                className="absolute inset-0 -z-10 bg-gradient-to-r from-brand-orange/90 to-brand-yellow/30"
                aria-hidden="true"
            />

            <div className="container">
                <div className="grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 lg:mx-0 lg:max-w-none lg:grid-cols-2">
                    <div className="lg:pr-8">
                        <div className="lg:max-w-lg">
                            <h2 id="stats-heading" className="heading-1 text-white">
                                Building{' '}
                                <span className="text-brand-yellow drop-shadow-[0_2px_4px_rgba(0,0,0,0.5)]">
                                    Academic Excellence
                                </span>
                            </h2>

                            <p className="mt-6 text-2xl leading-8 text-dark-gradient">
                                Our proven track record speaks for itself. We transform potential into
                                performance through dedicated mentoring and scientifically designed curriculum.
                            </p>

                            <nav aria-label="Quick links" className="mt-10 max-w-2xl lg:max-w-none">
                                <ul className="grid grid-cols-1 gap-x-8 gap-y-6 text-base font-semibold text-inverse sm:grid-cols-2 md:flex lg:gap-x-10">
                                    {links.map((link) => (
                                        <li key={link.id}>
                                            <Link
                                                href={link.href}
                                                className="flex items-center text-dark-gradient hover:text-brand-yellow transition-colors focus:outline-none focus:ring-2 focus:ring-inverse rounded-md"
                                                aria-label={link.name}
                                            >
                                                {link.name} <span aria-hidden="true" className="ml-1">&rarr;</span>
                                            </Link>
                                        </li>
                                    ))}
                                </ul>
                            </nav>

                            <div className="mt-16" aria-labelledby="stats-heading">
                                <h3 className="sr-only">Our achievements</h3>
                                <ul className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-2">
                                    {stats.map((stat) => {
                                        const Icon = stat.icon;
                                        return (
                                            <li key={stat.id} className="flex flex-col items-start">
                                                <span className="flex items-center text-base font-medium text-dark-gradient">
                                                    <Icon
                                                        className="h-5 w-5 mr-2 text-brand-yellow"
                                                        aria-hidden="true"
                                                    />
                                                    {stat.name}
                                                </span>
                                                <span className="mt-2 text-3xl font-bold tracking-tight text-gray-900 [text-shadow:_0_1px_1px_rgba(0,0,0,0.2)]">
                                                    {stat.value}
                                                </span>
                                            </li>
                                        );
                                    })}
                                </ul>
                            </div>
                        </div>
                    </div>

                    <div className="flex items-start justify-center">
                        <figure className="w-full max-w-md rounded-xl shadow-2xl overflow-hidden ring-1 ring-inverse/10 bg-black/10">
                            <div className="aspect-w-16 aspect-h-9">
                                <iframe
                                    className="w-full h-full min-h-[315px]"
                                    src="https://www.youtube.com/embed/-mJFZp84TIY?list=PLu0W_9lII9agx66oZnT6IyhcMIbUMNMdt"
                                    title="Revolution Academy classroom teaching methodology"
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                    allowFullScreen
                                    loading="lazy"
                                    aria-label="Video: Classroom teaching methodology"
                                ></iframe>
                            </div>
                            <figcaption className="p-4 bg-gray-900 rounded-b-lg">
                                <p className="text-sm font-medium text-white">
                                    Watch our classroom experience and teaching methodology
                                </p>
                            </figcaption>
                        </figure>
                    </div>  
                </div>
            </div>
        </section>
    );
}
