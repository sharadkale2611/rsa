import Image from 'next/image';
import { AcademicCapIcon, BookOpenIcon, UsersIcon, TrophyIcon, BuildingLibraryIcon } from '@heroicons/react/20/solid';

export default function AboutPage() {
    return (
        <div className="bg-[#dffffe]">
            {/* Hero Section */}
            <div className="relative bg-[#FF6400]">     
                {/* #FF6400 */}
                {/* #F58543 */}
                <div className="absolute inset-0">
                    <Image
                        alt="Students learning"
                        src="/students1.png"
                        fill
                        className="object-cover opacity-20"
                    />
                </div>
                <div className="relative mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:px-8 text-center">
                    <h1 className="text-4xl font-bold tracking-tight text-white sm:text-6xl">
                        About <span className="text-[#fccd0c]">Revolution Academy</span>
                    </h1>
                    <p className="mt-6 text-lg leading-8 text-white/90">
                        Transforming education since 2010 with proven methodologies and exceptional results
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
                                src="/patil_sir_1.jpeg" // Replace with your owner's photo
                                width={800}
                                height={1000}
                                className="w-full object-cover"
                                priority
                            />
                            <div className="bg-white p-6 text-center">
                                <h3 className="text-xl font-bold text-[#d53207]">Prof. Shrikant Bapurao Patil</h3>
                                <p className="mt-1 text-gray-600">Founder & Director</p>
                                <p className="mt-4 text-sm text-gray-500">
                                    B.E.(civil) | 30+ Years Teaching Experience | Special Subject: Mathematics
                                </p>
                            </div>
                        </div>
                    </div>

                    <div>
                        <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                            Our Founder&apos;s Vision
                        </h2>
                        <p className="mt-6 text-lg leading-8 text-gray-700">
                            &quot;After teaching at premier institutions across India, I recognized the need for a
                            student-centric approach that bridges the gap between school education and competitive
                            exam requirements. Revolution Academy was born from this vision.&quot;
                        </p>

                        <div className="mt-10 space-y-6">
                            <div className="flex items-start">
                                <div className="flex-shrink-0">
                                    <AcademicCapIcon className="h-6 w-6 text-[#d53207]" />
                                </div>
                                <div className="ml-4">
                                    <h3 className="text-lg font-medium text-gray-900">Educational Philosophy</h3>
                                    <p className="mt-2 text-gray-700">
                                        We believe in concept clarity first, followed by rigorous practice and
                                        personalized mentoring to unlock each student&apos;s potential.
                                    </p>
                                </div>
                            </div>

                            <div className="flex items-start">
                                <div className="flex-shrink-0">
                                    <TrophyIcon className="h-6 w-6 text-[#d53207]" />
                                </div>
                                <div className="ml-4">
                                    <h3 className="text-lg font-medium text-gray-900">Our Achievements</h3>
                                    <p className="mt-2 text-gray-700">
                                        1500+ JEE/NEET selections | 98% Board exam pass rate | 85%+ students
                                        scoring above 90% in PCMB
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Key Stats */}
            <div className="bg-[#fccd0c] py-16">
                <div className="mx-auto max-w-7xl px-6 lg:px-8">
                    <dl className="grid grid-cols-1 gap-x-8 gap-y-16 text-center sm:grid-cols-2 lg:grid-cols-4">
                        {[
                            { name: 'Years Established', value: '3+', icon: BuildingLibraryIcon },
                            { name: 'Students Taught', value: '5000+', icon: UsersIcon },
                            { name: 'Faculty Members', value: '25+', icon: AcademicCapIcon },
                            { name: 'Toppers Produced', value: '200+', icon: TrophyIcon },
                        ].map((stat) => (
                            <div key={stat.name} className="mx-auto flex max-w-xs flex-col gap-y-4">
                                <stat.icon className="mx-auto h-8 w-8 text-[#d53207]" />
                                <dt className="text-base leading-7 text-gray-900">{stat.name}</dt>
                                <dd className="text-4xl font-bold tracking-tight text-gray-900">{stat.value}</dd>
                            </div>
                        ))}
                    </dl>
                </div>
            </div>

            {/* Mission Section */}
            <div className="mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:px-8">
                <div className="mx-auto max-w-2xl lg:mx-0">
                    <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                        Our Core Mission
                    </h2>
                    <p className="mt-6 text-lg leading-8 text-gray-700">
                        To provide affordable, high-quality education that empowers students to excel in both
                        board exams and competitive entrance tests while developing critical thinking skills
                        for lifelong success.
                    </p>
                </div>

                <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-8 sm:mt-20 lg:mx-0 lg:max-w-none lg:grid-cols-3">
                    {[
                        {
                            title: 'Teaching Methodology',
                            description: 'Concept → Application → Mastery approach with regular assessments',
                            icon: BookOpenIcon,
                        },
                        {
                            title: 'Infrastructure',
                            description: 'Smart classrooms | Advanced labs | 10,000+ book library',
                            icon: BuildingLibraryIcon,
                        },
                        {
                            title: 'Parent Partnership',
                            description: 'Monthly progress reports | Dedicated parent portal | Counseling',
                            icon: UsersIcon,
                        },
                    ].map((feature) => (
                        <div key={feature.title} className="flex flex-col gap-y-4 border-l-4 border-[#d53207] pl-6">
                            <feature.icon className="h-6 w-6 text-[#d53207]" />
                            <h3 className="text-xl font-semibold text-gray-900">{feature.title}</h3>
                            <p className="text-gray-700">{feature.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}