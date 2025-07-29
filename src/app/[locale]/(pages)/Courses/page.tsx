import { Link } from '@/i18n/navigation'
import { useLang } from '@/utils/useLang'
import {
    BookOpenIcon,
    CalculatorIcon,
    ChartBarIcon,
    BoltIcon as LightningBoltIcon,
    BeakerIcon as FlaskIcon,
} from '@heroicons/react/20/solid'
import Image from 'next/image'


export default function CoursesPage() {

    const lang = useLang()
    
    const courses = [
        {
            name: lang(['courses', '11th_science']),
            description: lang(['courses', '11th_science_description']),
            icon: BookOpenIcon,
            features: [
                lang(['courses', '11th_science_featur_1']),
                lang(['courses', '11th_science_featur_2']),
                lang(['courses', '11th_science_featur_3']),
                lang(['courses', '11th_science_featur_4'])
            ],
            duration: lang(['courses', '11th_science_duration']),
            highlight: lang(['courses', '11th_science_highlight']),
            image: '/11th/11th-foundation.png'
        },
        {
            name: lang(['courses', '12th_science']),
            description: lang(['courses', '12th_science_description']),
            icon: LightningBoltIcon,
            features: [
                lang(['courses', '12th_science_featur_1']),
                lang(['courses', '12th_science_featur_2']),
                lang(['courses', '12th_science_featur_3']),
                lang(['courses', '12th_science_featur_4'])
            ],
            duration: lang(['courses', '12th_science_duration']),
            highlight: lang(['courses', '12th_science_highlight']),
            image: '/12th/12th-foundation.png'
        },
        {
            name: lang(['courses', 'jee_main']),
            description: lang(['courses', 'jee_main_description']),
            icon: CalculatorIcon,
            features: [
                lang(['courses', 'jee_main_featur_1']),
                lang(['courses', 'jee_main_featur_2']),
                lang(['courses', 'jee_main_featur_3']),
                lang(['courses', 'jee_main_featur_4'])
            ],
            duration: lang(['courses', 'jee_main_duration']),
            highlight: lang(['courses', 'jee_main_highlight']),
            image: '/other/jee.png'
        },
        {
            name: lang(['courses', 'neet']),
            description: lang(['courses', 'neet_description']),
            icon: FlaskIcon,
            features: [
                lang(['courses', 'neet_featur_1']),
                lang(['courses', 'neet_featur_2']),
                lang(['courses', 'neet_featur_3']),
                lang(['courses', 'neet_featur_4'])
            ],
            duration: lang(['courses', 'neet_duration']),
            highlight: lang(['courses', 'neet_highlight']),
            image: '/other/neet_preperation.png'
        },
        {
            name: lang(['courses', 'board']),
            description: lang(['courses', 'board_description']),
            icon: ChartBarIcon,
            features: [
                lang(['courses', 'board_featur_1']),
                lang(['courses', 'board_featur_2']),
                lang(['courses', 'board_featur_3']),
                lang(['courses', 'board_featur_4'])
            ],
            duration: lang(['courses', 'board_duration']),
            highlight: lang(['courses', 'board_highlight']),
            image: '/other/board_exam.jpg'
        }
    ]

    return (
        <div className="bg-brand-cyan">
            {/* Hero Section */}
            <div className="relative bg-black/90" >
                <div className="absolute inset-0">
                    <Image
                        alt="Students in classroom"
                        src="/classroom-teaching.jpg"
                        fill
                        className="object-cover opacity-20"
                    />
                </div>
                <div className="relative mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:px-8">
                    <div className="text-center">
                        <h1 className="text-4xl font-bold tracking-tight text-accent text-shadow sm:text-6xl text-shadow">
                            {lang(['courses', 'hero_title_part1'])}{' '}
                            <span className="text-brand-yellow text-shadow">{lang(['courses', 'hero_title_part2'])}</span>
                        </h1>
                        <p className="mt-6 text-lg leading-8 text-white text-shadow">{lang(['courses', 'hero_subtitle'])}</p>
                    </div>
                </div>
            </div>

            {/* Course Grid */}
            <div className="mx-auto max-w-7xl px-6 py-16 sm:py-24 lg:px-8">
                <div className="mx-auto max-w-2xl lg:mx-0">
                    <h2 className="text-3xl font-bold tracking-tight text-primary sm:text-4xl">
                        {lang(['courses', 'main_heading'])}
                    </h2>
                    <p className="mt-6 text-lg leading-8 text-secondary">{lang(['courses', 'main_sub_heading'])}</p>
                </div>

                <div className="mt-16 space-y-20">
                    {courses.map((course) => (
                        <div key={course.name} className="flex flex-col gap-16 lg:flex-row lg:items-center">
                            <div className="lg:w-1/2">
                                <div className="flex items-center">
                                    <course.icon className="h-8 w-8 text-primary" />
                                    <h3 className="ml-3 text-2xl font-bold tracking-tight text-primary">
                                        {course.name}
                                    </h3>
                                </div>
                                <p className="mt-4 text-secondary">{course.description}</p>

                                <div className="mt-6">
                                    <h4 className="text-sm font-semibold text-accent">{lang(['courses', 'program_highlight'])}</h4>
                                    <p className="mt-2 font-medium text-primary">{course.highlight}</p>
                                </div>

                                <div className="mt-8">
                                    <h4 className="text-sm font-semibold text-accent">KEY FEATURES</h4>
                                    <ul className="mt-4 space-y-3">
                                        {course.features.map((feature) => (
                                            <li key={feature} className="flex">
                                                <svg className="h-6 w-6 flex-none text-brand-yellow" viewBox="0 0 20 20" fill="currentColor">
                                                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clipRule="evenodd" />
                                                </svg>
                                                <span className="ml-3 text-secondary">{feature}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>

                                <div className="mt-8 flex items-center gap-x-4">
                                    <a
                                        href="#enquiry"
                                        className="rounded-md brand-bg-red px-4 py-2.5 text-sm font-semibold text-inverse shadow-sm hover:bg-opacity-90 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
                                    >
                                        {lang(['courses', 'enquire_now'])}
                                    </a>
                                    <a href="#details" className="text-sm font-semibold text-secondary hover:text-opacity-80">
                                        {lang(['courses', 'detailed_syllabus'])} <span aria-hidden="true">→</span>
                                    </a>
                                </div>
                            </div>

                            <div className="lg:w-1/2">
                                <div className="overflow-hidden rounded-xl shadow-xl ring-1 ring-gray-900/10">
                                    <Image
                                        alt={course.name}
                                        src={course.image}
                                        width={800}
                                        height={450}
                                        className="w-full object-cover"
                                    />
                                </div>
                                <p className="mt-4 text-center text-sm text-secondary">{course.duration}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Batch Schedule CTA */}
            <div className="bg-brand-yellow py-16">
                <div className="mx-auto max-w-7xl px-6 lg:px-8">
                    <div className="mx-auto max-w-2xl text-center">
                        <h1 className="text-3xl font-bold tracking-tight text-primary sm:text-4xl">
                            {lang(['courses', 'hero2_title'])}
                        </h1>
                        <p className="mt-6 text-lg leading-8 text-secondary">
                            {lang(['courses', 'hero2_subtitle'])}
                        </p>
                        <div className="mt-10 flex items-center justify-center gap-x-6">
                            <Link
                                href="#download"
                                className="rounded-md px-6 py-3 text-sm font-semibold focus-visible:outline hover:text-accent shadow-sm focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
                            >{lang(['courses', 'hero2_download'])}</Link>
                            <a href="#contact" className="text-sm font-semibold text-gray hover:text-opacity-80">
                                {lang(['courses', 'hero2_speak_to_counselor'])} <span aria-hidden="true">→</span>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )

}