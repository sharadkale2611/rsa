import { BookOpenIcon, AcademicCapIcon, ChartBarIcon } from '@heroicons/react/20/solid'
import Image from 'next/image'

const features = [
    {
        name: 'Comprehensive Curriculum',
        description:
            'Structured syllabus covering all JEE/NEET and board exam topics with concept clarity as the primary focus.',
        icon: BookOpenIcon,
    },
    {
        name: 'Expert Faculty',
        description: 'Learn from IIT/NIT alumni and experienced educators who specialize in competitive exam preparation.',
        icon: AcademicCapIcon,
    },
    {
        name: 'Result-Oriented Approach',
        description: 'Proven track record with 85%+ of our students securing ranks in top engineering/medical colleges.',
        icon: ChartBarIcon,
    },
]

export default function Features() {
    return (
        <div className="overflow-hidden bg-[#dffffe55] py-24 sm:py-32">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
                    <div className="lg:pt-4 lg:pr-8">
                        <div className="lg:max-w-lg">
                            <h2 className="text-base font-semibold text-[#d53207]">Why Choose Us</h2>
                            <p className="mt-2 text-4xl font-semibold tracking-tight text-gray-900 sm:text-5xl">
                                Transforming Students Into <span className="text-[#d53207]">Top Performers</span>
                            </p>
                            <p className="mt-6 text-lg text-gray-700">
                                Our scientifically designed program bridges the gap between school education and competitive exam
                                requirements, ensuring holistic development.
                            </p>
                            <dl className="mt-10 max-w-xl space-y-8 text-base text-gray-700 lg:max-w-none">
                                {features.map((feature) => (
                                    <div key={feature.name} className="relative pl-9">
                                        <dt className="inline font-semibold text-gray-900">
                                            <feature.icon aria-hidden="true" className="absolute top-1 left-1 h-5 w-5 text-[#d53207]" />
                                            {feature.name}
                                        </dt>{' '}
                                        <dd className="inline">{feature.description}</dd>
                                    </div>
                                ))}
                            </dl>
                        </div>
                    </div>
                    <div className="flex items-start justify-center">
                        <Image
                            alt="Students learning in classroom"
                            src="/teacher2.png" // Suggested: classroom-teaching.jpg or students-solving.jpg
                            width={2432}
                            height={1442}
                            className="w-full max-w-md rounded-xl shadow-xl ring-1 ring-gray-900/10 md:max-w-lg lg:max-w-xl"
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}