import Image from 'next/image';
import { AcademicCapIcon, BookOpenIcon, UsersIcon, TrophyIcon, BuildingLibraryIcon } from '@heroicons/react/20/solid';
import { useLang } from '@/utils/useLang';

export default function AboutPage() {
    const lang = useLang();
    return (
        <div className="brand-bg-cyan">
            {/* Hero Section */}
            <div className="relative bg-black/90">
                <div className="absolute inset-0 bg-black/20">
                    <Image
                        alt="Students learning"
                        src="/students1.png"
                        fill
                        className="object-cover opacity-20"
                    />
                </div>
                <div className="relative mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:px-8 text-center ">
                    <h1 className="text-4xl font-bold tracking-tight text-white sm:text-6xl text-shadow-white">
                        {lang(['about', 'hero_title_part1'])} <span className="text-accent">{lang(['about', 'hero_title_part2'])}</span>
                    </h1>
                    <p className="mt-6 text-lg leading-8 text-brand-yellow  ">
                        {lang(['about', 'subtitle'])}
                    </p>
                </div>
            </div>

            {/* Owner Section */}
            <div className="mx-auto max-w-7xl px-6 py-16 sm:py-24 lg:px-8">
                <div className="grid grid-cols-1 gap-16 lg:grid-cols-2 lg:items-center">
                    <div className="lg:order-last">
                        <div className="overflow-hidden rounded-xl shadow-xl ring-1 ring-gray-900/10">
                            <Image
                                alt="Prof. Shrikant Bapurao Patil - Founder"
                                src="/patil_sir_1.jpg"
                                width={800}
                                height={1000}
                                className="w-full object-cover"
                                priority
                            />
                            <div className="bg-white p-6 text-center">
                                <h2 className="text-xl font-bold text-primary">{lang(['about','founder_name'])}</h2>
                                <p className="mt-1 text-secondary">{lang(['about', 'founder_role'])} </p>
                                <p className="mt-4 text-sm text-secondary">{lang(['about', 'founder_details'])}</p>
                            </div>
                        </div>
                    </div>

                    <div>
                        <h2 className="text-3xl font-bold tracking-tight text-primary sm:text-4xl">
                            {lang(['about', 'vision_title'])}
                        </h2>
                        <p className="mt-6 text-lg leading-8 text-gray-700">                            
                            &quot;{lang(['about', 'vision_details'])}&quot;
                        </p>

                        <div className="mt-10 space-y-6">
                            <div className="flex items-start">
                                <div className="flex-shrink-0">
                                    <AcademicCapIcon className="h-6 w-6 text-primary" />
                                </div>
                                <div className="ml-4">
                                    <h3 className="text-lg font-medium text-primary">{lang(['about', 'educational_philosophy'])}</h3>
                                    <p className="mt-2 text-gray-700">{lang(['about', 'educational_philosophy_details'])}</p>
                                </div>
                            </div>

                            <div className="flex items-start">
                                <div className="flex-shrink-0">
                                    <TrophyIcon className="h-6 w-6 text-primary" />
                                </div>
                                <div className="ml-4">
                                    <h3 className="text-lg font-medium text-primary">{lang(['about', 'our_achievements'])}</h3>
                                    <p className="mt-2 text-gray-700">{lang(['about', 'our_achievements_details'])}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Key Stats */}
            <div className="brand-bg-yellow py-16">
                <div className="mx-auto max-w-7xl px-6 lg:px-8">
                    <dl className="grid grid-cols-1 gap-x-8 gap-y-16 text-center sm:grid-cols-2 lg:grid-cols-4">
                        {[
                            { name: lang(['about','years_established']), value: '3+', icon: BuildingLibraryIcon },
                            { name: lang(['about', 'students_taught']), value: '5000+', icon: UsersIcon },
                            { name: lang(['about', 'faculty_members']), value: '25+', icon: AcademicCapIcon },
                            { name: lang(['about', 'toppers_produced']), value: '200+', icon: TrophyIcon },
                        ].map((stat) => (
                            <div key={stat.name} className="mx-auto flex max-w-xs flex-col gap-y-4">
                                <stat.icon className="mx-auto h-8 w-8 text-primary" />
                                <dt className="text-base leading-7 text-primary">{stat.name}</dt>
                                <dd className="text-4xl font-bold tracking-tight text-primary">{stat.value}</dd>
                            </div>
                        ))}
                    </dl>
                </div>
            </div>

            {/* Mission Section */}
            <div className="mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:px-8">
                <div className="mx-auto max-w-2xl lg:mx-0">
                    <h2 className="text-3xl font-bold tracking-tight text-primary sm:text-4xl">
                        {lang(['about','mission_title'])}
                    </h2>
                    <p className="mt-6 text-lg leading-8 text-gray-700">{lang(['about', 'mission_title_details'])}</p>
                </div>

                <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-8 sm:mt-20 lg:mx-0 lg:max-w-none lg:grid-cols-3">
                    {[
                        {
                            title: lang(['about', 'teaching_methodology']),
                            description: lang(['about', 'teaching_methodology_details']),
                            icon: BookOpenIcon,
                        },
                        {
                            title: lang(['about', 'infrastructure']),
                            description: lang(['about', 'infrastructure_details']),
                            icon: BuildingLibraryIcon,
                        },
                        {
                            title: lang(['about', 'parent_partnership']),
                            description: lang(['about', 'parent_partnership_details']),
                            icon: UsersIcon,
                        },
                    ].map((feature) => (
                        <div key={feature.title} className="flex flex-col gap-y-4 border-l-4 border-primary pl-6">
                            <feature.icon className="h-6 w-6 text-primary" />
                            <h3 className="text-xl font-semibold text-primary">{feature.title}</h3>
                            <p className="text-gray-700">{feature.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}