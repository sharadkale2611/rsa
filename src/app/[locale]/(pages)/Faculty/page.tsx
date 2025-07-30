import Image from 'next/image'
import {
    AcademicCapIcon,
    BookOpenIcon,
    LightBulbIcon,
    TrophyIcon,
    UserGroupIcon,
} from '@heroicons/react/20/solid'
import { useLang } from '@/utils/useLang';


export default function FacultyPage() {
    const lang = useLang();

    const facultyMembers = [
        {
            nameKey: 'faculty_member1_name',
            roleKey: 'faculty_member1_role',
            qualificationKey: 'faculty_member1_qualification',
            experienceKey: 'faculty_member1_experience',
            specializationKey: 'faculty_member1_specialization',
            image: '/avatar1.png',
            achievementsKeys: [
                'faculty_member1_achievement1',
                'faculty_member1_achievement2',
                'faculty_member1_achievement3',
            ],
        },
        {
            nameKey: 'faculty_member2_name',
            roleKey: 'faculty_member2_role',
            qualificationKey: 'faculty_member2_qualification',
            experienceKey: 'faculty_member2_experience',
            specializationKey: 'faculty_member2_specialization',
            image: '/avatar2.png',
            achievementsKeys: [
                'faculty_member2_achievement1',
                'faculty_member2_achievement2',
                'faculty_member2_achievement3',
            ],
        },
        {
            nameKey: 'faculty_member3_name',
            roleKey: 'faculty_member3_role',
            qualificationKey: 'faculty_member3_qualification',
            experienceKey: 'faculty_member3_experience',
            specializationKey: 'faculty_member3_specialization',
            image: '/avatar3.png',
            achievementsKeys: [
                'faculty_member3_achievement1',
                'faculty_member3_achievement2',
                'faculty_member3_achievement3',
            ],
        },
        {
            nameKey: 'faculty_member4_name',
            roleKey: 'faculty_member4_role',
            qualificationKey: 'faculty_member4_qualification',
            experienceKey: 'faculty_member4_experience',
            specializationKey: 'faculty_member4_specialization',
            image: '/avatar2.png',
            achievementsKeys: [
                'faculty_member4_achievement1',
                'faculty_member4_achievement2',
            ],
        },
    ]

    return (
        <div className="bg-brand-cyan">
            {/* Hero Section */}
            <div className="relative bg-black/90">
                <div className="absolute inset-0">
                    <Image
                        alt={lang(['faculty', 'hero_image_alt'])}
                        src="/other/group1.jpeg"
                        fill
                        className="object-cover opacity-20"
                        priority
                    />
                </div>
                <div className="relative mx-auto max-w-7xl px-6 py-28 sm:py-36 lg:px-8 text-center">
                    <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl md:text-6xl">
                        {lang(['faculty', 'hero_title_part1'])} <span className="text-brand-yellow">{lang(['faculty', 'hero_title_part2'])}</span>
                    </h1>
                    <p className="mt-6 text-xl leading-8 text-white opacity-90 max-w-3xl mx-auto">
                        {lang(['faculty', 'hero_subtitle'])}
                    </p>
                </div>
            </div>

            {/* Faculty Grid */}
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
                <div className="mx-auto max-w-4xl text-center">
                    <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                        {lang(['faculty', 'section_title'])}
                    </h2>
                    <p className="mt-4 text-lg leading-8 text-gray-700">
                        {lang(['faculty', 'section_description'])}
                    </p>
                </div>

                <div className="mt-16 grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4">
                    {facultyMembers.map((faculty) => (
                        <div
                            key={lang(['faculty',faculty.nameKey])}
                            className="flex flex-col rounded-xl shadow-xl overflow-hidden bg-white transition-all hover:scale-[1.02] hover:shadow-2xl"
                        >
                            {/* Image */}
                            <div className="flex justify-center items-center py-6 bg-gray-100">
                                <Image
                                    alt={`${lang(['faculty', faculty.nameKey])} ${lang(['faculty', faculty.roleKey])}`}
                                    src={faculty.image}
                                    width={200}
                                    height={200}
                                    className="rounded-full object-cover w-[200px] h-[200px] shadow-lg border-4 border-white"
                                />
                            </div>

                            {/* Details */}
                            <div className="p-6 flex-1 flex flex-col">
                                <div className="flex items-start">
                                    <AcademicCapIcon className="h-6 w-6 text-brand-red mt-1 flex-shrink-0" />
                                    <div className="ml-3">
                                        <h3 className="text-xl font-bold text-gray-900">{lang(['faculty', faculty.nameKey])}</h3>
                                        <p className="text-sm font-medium text-brand-red">{lang(['faculty', faculty.roleKey])}</p>
                                    </div>
                                </div>

                                <div className="mt-5 space-y-3">
                                    <div className="flex items-start">
                                        <BookOpenIcon className="h-5 w-5 text-brand-red mt-0.5 flex-shrink-0" />
                                        <div className="ml-3">
                                            <p className="text-sm text-gray-700">{lang(['faculty', faculty.qualificationKey])}</p>
                                        </div>
                                    </div>
                                    <div className="flex items-start">
                                        <UserGroupIcon className="h-5 w-5 text-brand-red mt-0.5 flex-shrink-0" />
                                        <div className="ml-3">
                                            <p className="text-sm text-gray-700">{lang(['faculty', faculty.experienceKey])}</p>
                                        </div>
                                    </div>
                                    <div className="flex items-start">
                                        <LightBulbIcon className="h-5 w-5 text-brand-red mt-0.5 flex-shrink-0" />
                                        <div className="ml-3">
                                            <p className="text-sm text-gray-700">{lang(['faculty', faculty.specializationKey])}</p>
                                        </div>
                                    </div>
                                </div>

                                <div className="mt-6 pt-4 border-t border-gray-200">
                                    <h4 className="text-xs font-semibold uppercase tracking-wider text-brand-red">
                                        {lang(['faculty', 'achievements_title'])}
                                    </h4>
                                    <ul className="mt-3 space-y-2">
                                        {faculty.achievementsKeys.map((achievementKey, index) => (
                                            <li key={index} className="flex items-start">
                                                <TrophyIcon className="h-4 w-4 text-brand-yellow mt-0.5 flex-shrink-0" />
                                                <span className="ml-2 text-sm text-gray-700">{lang(['faculty', achievementKey])}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Teaching Methodology Section */}
            <div className="bg-brand-yellow py-20">
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                    <div className="mx-auto max-w-4xl text-center">
                        <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                            {lang(['faculty', 'philosophy_title'])}
                        </h2>
                        <p className="mt-4 text-lg text-gray-800 max-w-3xl mx-auto">
                            {lang(['faculty', 'philosophy_description'])}
                        </p>
                    </div>

                    <div className="mt-14 grid grid-cols-1 gap-8 sm:grid-cols-3 items-stretch text-center">
                        {[
                            {
                                nameKey: 'philosophy_feature1_name',
                                descriptionKey: 'philosophy_feature1_description',
                                icon: LightBulbIcon,
                            },
                            {
                                nameKey: 'philosophy_feature2_name',
                                descriptionKey: 'philosophy_feature2_description',
                                icon: UserGroupIcon,
                            },
                            {
                                nameKey: 'philosophy_feature3_name',
                                descriptionKey: 'philosophy_feature3_description',
                                icon: TrophyIcon,
                            },
                        ].map((feature) => (
                            <div
                                key={lang(['faculty', feature.nameKey])}
                                className="bg-white/80 p-8 rounded-xl shadow-md hover:shadow-lg transition-shadow flex flex-col items-center justify-start text-center"
                            >
                                <div className="flex h-14 w-14 items-center justify-center rounded-full bg-brand-red mx-auto">
                                    <feature.icon className="h-6 w-6 text-white" />
                                </div>
                                <h3 className="mt-6 text-xl font-semibold text-gray-900">{lang(['faculty', feature.nameKey])}</h3>
                                <p className="mt-3 text-gray-700">{lang(['faculty', feature.descriptionKey])}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}