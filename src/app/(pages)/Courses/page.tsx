import { 
    BookOpenIcon,
    CalculatorIcon,
    ChartBarIcon,
    BoltIcon as LightningBoltIcon,
    BeakerIcon as FlaskIcon,
} from '@heroicons/react/20/solid'
import Image from 'next/image'

const courses = [
    {
        name: '11th Science Foundation',
        description: 'Build strong fundamentals in Physics, Chemistry, and Mathematics with our CBSE/State Board aligned curriculum.',
        icon: BookOpenIcon,
        features: [
            'Comprehensive theory sessions',
            'Weekly doubt-clearing classes',
            'Monthly progress tests',
            '200+ practice problems/month'
        ],
        duration: '1 Year Program',
        highlight: 'JEE/NEET Foundation',
        image: '/11th/11th-foundation.png'
    },
    {
        name: '12th Science Intensive',
        description: 'Complete syllabus coverage with competitive exam preparation for board excellence and JEE/NEET success.',
        icon: LightningBoltIcon,
        features: [
            'Dual preparation strategy',
            'Chapter-wise test series',
            '10+ full syllabus mock tests',
            'Exam temperament training'
        ],
        duration: '1 Year Program',
        highlight: '95%+ Board Results',
        image: '/12th/12th-foundation.png'
    },
    {
        name: 'JEE Mains & Advanced',
        description: 'Specialized program for engineering aspirants with advanced problem-solving techniques and test strategies.',
        icon: CalculatorIcon,
        features: [
            'IIT alumni mentors',
            'Daily practice problems',
            '15+ mock test series',
            'Rank improvement program'
        ],
        duration: '2 Year/1 Year Options',
        highlight: '1000+ Selections',
        image: '/other/jee.png'
    },
    {
        name: 'NEET Preparation',
        description: 'Comprehensive medical entrance coaching with NCERT focus and advanced biology concepts.',
        icon: FlaskIcon,
        features: [
            'Daily MCQ practice',
            'Diagram-based learning',
            '5,000+ curated questions',
            'Previous year paper analysis'
        ],
        duration: '2 Year/1 Year Options',
        highlight: '600+ MBBS Selections',
        image: '/other/neet_preperation.png'        
    },
    {
        name: 'Board Exam Special',
        description: 'Crash course for 12th board exams with guaranteed score improvement techniques.',
        icon: ChartBarIcon,
        features: [
            'Chapter-wise revision',
            'Important question banks',
            'Answer writing workshops',
            '5 full syllabus tests'
        ],
        duration: '3 Months Program',
        highlight: 'Average 25% Score Improvement',
        image: '/other/board_exam.jpg'
    }
]

export default function CoursesPage() {
    return (
        <div className="bg-[#dffffe]">
            {/* Hero Section */}
            <div className="relative bg-[#FF6400]">
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
                        <h1 className="text-4xl font-bold tracking-tight text-white sm:text-6xl">
                            Our <span className="text-[#fccd0c]">Academic Programs</span>
                        </h1>
                        <p className="mt-6 text-lg leading-8 text-white/90">
                            Scientifically designed courses that bridge school education and competitive exam requirements
                        </p>
                    </div>
                </div>
            </div>

            {/* Course Grid */}
            <div className="mx-auto max-w-7xl px-6 py-16 sm:py-24 lg:px-8">
                <div className="mx-auto max-w-2xl lg:mx-0">
                    <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                        Transformative Learning Experiences
                    </h2>
                    <p className="mt-6 text-lg leading-8 text-gray-700">
                        Choose the perfect program for your academic goals with our structured pathways
                    </p>
                </div>

                <div className="mt-16 space-y-20">
                    {courses.map((course) => (
                        <div key={course.name} className="flex flex-col gap-16 lg:flex-row lg:items-center">
                            <div className="lg:w-1/2">
                                <div className="flex items-center">
                                    <course.icon className="h-8 w-8 text-[#d53207]" />
                                    <h3 className="ml-3 text-2xl font-bold tracking-tight text-gray-900">
                                        {course.name}
                                    </h3>
                                </div>
                                <p className="mt-4 text-gray-700">{course.description}</p>

                                <div className="mt-6">
                                    <h4 className="text-sm font-semibold text-[#d53207]">PROGRAM HIGHLIGHT</h4>
                                    <p className="mt-2 font-medium text-gray-900">{course.highlight}</p>
                                </div>

                                <div className="mt-8">
                                    <h4 className="text-sm font-semibold text-[#d53207]">KEY FEATURES</h4>
                                    <ul className="mt-4 space-y-3">
                                        {course.features.map((feature) => (
                                            <li key={feature} className="flex">
                                                <svg className="h-6 w-6 flex-none text-[#fccd0c]" viewBox="0 0 20 20" fill="currentColor">
                                                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clipRule="evenodd" />
                                                </svg>
                                                <span className="ml-3 text-gray-700">{feature}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>

                                <div className="mt-8 flex items-center gap-x-4">
                                    <a
                                        href="#enquiry"
                                        className="rounded-md bg-[#d53207] px-4 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-[#a32805] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#d53207]"
                                    >
                                        Enquire Now
                                    </a>
                                    <a href="#details" className="text-sm font-semibold text-[#d53207] hover:text-[#a32805]">
                                        Detailed syllabus <span aria-hidden="true">→</span>
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
                                <p className="mt-4 text-center text-sm text-gray-600">{course.duration}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Batch Schedule CTA */}
            <div className="bg-[#fccd0c] py-16">
                <div className="mx-auto max-w-7xl px-6 lg:px-8">
                    <div className="mx-auto max-w-2xl text-center">
                        <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                            Ready to begin your journey?
                        </h2>
                        <p className="mt-6 text-lg leading-8 text-gray-800">
                            Download our complete batch schedule and fee structure
                        </p>
                        <div className="mt-10 flex items-center justify-center gap-x-6">
                            <a
                                href="#download"
                                className="rounded-md bg-[#d53207] px-6 py-3 text-sm font-semibold text-white shadow-sm hover:bg-[#a32805] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#d53207]"
                            >
                                Download Brochure
                            </a>
                            <a href="#contact" className="text-sm font-semibold text-gray-900">
                                Speak to counselor <span aria-hidden="true">→</span>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}