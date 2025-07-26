import Image from 'next/image';
import { AcademicCapIcon, BookOpenIcon, LightBulbIcon, TrophyIcon, UserGroupIcon } from '@heroicons/react/20/solid';

const facultyMembers = [
    {
        name: 'Dr. Rajesh Kumar',
        role: 'Physics Department Head',
        qualification: 'Ph.D. in Physics, IIT Bombay',
        experience: '18+ years',
        specialization: 'Electrodynamics & Modern Physics',
        image: '/avatar1.png',
        achievements: [
            '100+ JEE Advanced qualifiers',
            'Gold Medalist in National Physics Olympiad',
            'Visiting Professor at IISc'
        ]
    },
    {
        name: 'Prof. Meena Sharma',
        role: 'Chemistry Mentor',
        qualification: 'M.Sc. Chemistry, BITS Pilani',
        experience: '15 years',
        specialization: 'Organic Chemistry',
        image: '/avatar2.png',
        achievements: [
            '95% students score 90+ in Boards',
            'NEET Chemistry expert',
            'Developed "Reaction Maps" technique'
        ]
    },
    {
        name: 'Dr. Amit Patel',
        role: 'Mathematics Professor',
        qualification: 'Ph.D. Mathematics, ISI Kolkata',
        experience: '12 years',
        specialization: 'Calculus & Algebra',
        image: '/avatar3.png',
        achievements: [
            'Created Maths Shortcut Techniques',
            'Mentored AIR 1 in 2022',
            'JEE Advanced question paper analyst'
        ]
    },
    // Add more faculty as needed
];

export default function FacultyPage() {
    return (
        <div className="bg-[#dffffe]">
            {/* Hero Section */}
            <div className="relative bg-[#d53207]">
                <div className="absolute inset-0">
                    <Image
                        alt="Faculty teaching"
                        src="/other/group1.jpeg"
                        fill
                        className="object-cover opacity-20"
                    />
                </div>
                <div className="relative mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:px-8 text-center">
                    <h1 className="text-4xl font-bold tracking-tight text-white sm:text-6xl">
                        Meet Our <span className="text-[#fccd0c]">Expert Faculty</span>
                    </h1>
                    <p className="mt-6 text-lg leading-8 text-white/90">
                        Learn from the best minds in science education with proven track records
                    </p>
                </div>
            </div>

            {/* Faculty Grid - 3 Columns */}
            <div className="mx-auto max-w-7xl px-6 py-16 sm:py-24 lg:px-8">
                <div className="mx-auto max-w-2xl lg:mx-0">
                    <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                        Distinguished Educators
                    </h2>
                    <p className="mt-6 text-lg leading-8 text-gray-700">
                        Our faculty combines academic excellence with years of teaching experience
                    </p>
                </div>

                <div className="mt-16 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
                    {facultyMembers.map((faculty) => (
                        <div key={faculty.name} className="flex flex-col rounded-xl shadow-lg overflow-hidden bg-white">
                            {/* Faculty Image */}
                            <div className="h-98 relative">
                                <Image
                                    alt={faculty.name}
                                    src={faculty.image}
                                    width={250}
                                    height={250}
                                    className="object-cover"
                                />
                            </div>

                            {/* Faculty Details */}
                            <div className="p-6">
                                <div className="flex items-center">
                                    <AcademicCapIcon className="h-6 w-6 text-[#d53207]" />
                                    <div className="ml-3">
                                        <h3 className="text-xl font-bold text-gray-900">{faculty.name}</h3>
                                        <p className="text-sm font-medium text-[#d53207]">{faculty.role}</p>
                                    </div>
                                </div>

                                <div className="mt-4 space-y-2">
                                    <div className="flex items-start">
                                        <BookOpenIcon className="h-5 w-5 text-[#d53207] mt-0.5" />
                                        <div className="ml-3">
                                            <p className="text-sm text-gray-700">{faculty.qualification}</p>
                                        </div>
                                    </div>
                                    <div className="flex items-start">
                                        <UserGroupIcon className="h-5 w-5 text-[#d53207] mt-0.5" />
                                        <div className="ml-3">
                                            <p className="text-sm text-gray-700">{faculty.experience} experience</p>
                                        </div>
                                    </div>
                                    <div className="flex items-start">
                                        <LightBulbIcon className="h-5 w-5 text-[#d53207] mt-0.5" />
                                        <div className="ml-3">
                                            <p className="text-sm text-gray-700">{faculty.specialization}</p>
                                        </div>
                                    </div>
                                </div>

                                <div className="mt-4">
                                    <h4 className="text-xs font-semibold uppercase tracking-wider text-[#d53207]">
                                        Achievements
                                    </h4>
                                    <ul className="mt-2 space-y-1">
                                        {faculty.achievements.map((achievement, index) => (
                                            <li key={index} className="flex items-start">
                                                <TrophyIcon className="h-4 w-4 text-[#fccd0c] mt-0.5 flex-shrink-0" />
                                                <span className="ml-2 text-xs text-gray-700">{achievement}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Teaching Methodology */}
            <div className="bg-[#fccd0c] py-16">
                <div className="mx-auto max-w-7xl px-6 lg:px-8">
                    <div className="mx-auto max-w-2xl text-center">
                        <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                            Our Teaching Philosophy
                        </h2>
                        <div className="mt-10 grid grid-cols-1 gap-8 sm:grid-cols-3">
                            {[
                                {
                                    name: 'Concept Clarity',
                                    description: 'Building strong fundamentals before problem-solving',
                                    icon: LightBulbIcon,
                                },
                                {
                                    name: 'Personalized Attention',
                                    description: 'Small batch sizes with individual mentoring',
                                    icon: UserGroupIcon,
                                },
                                {
                                    name: 'Exam Excellence',
                                    description: 'Optimized for board and competitive exams',
                                    icon: TrophyIcon,
                                },
                            ].map((feature) => (
                                <div key={feature.name} className="bg-white/30 p-6 rounded-lg backdrop-blur-sm">
                                    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#d53207] mx-auto">
                                        <feature.icon className="h-6 w-6 text-white" />
                                    </div>
                                    <h3 className="mt-4 text-lg font-semibold text-gray-900">{feature.name}</h3>
                                    <p className="mt-2 text-gray-800">{feature.description}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}