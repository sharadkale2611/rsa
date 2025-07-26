import { useLang } from '@/utils/useLang';
import { BookOpenIcon, AcademicCapIcon, ChartBarIcon } from '@heroicons/react/20/solid'
import Image from 'next/image'

interface Feature {
    id: string;
    name: string;
    description: string;
    icon: React.ComponentType<{ className?: string; ariaHidden?: boolean }>;
}

export default function Features() {
    const lang = useLang();
    const features: Feature[] = [
        {
            id: 'curriculum',
            name: lang(['features','feature_1']),
            description: lang(['features', 'feature_1_details']),
            icon: BookOpenIcon,
        },
        {
            id: 'faculty',
            name: lang(['features', 'feature_2']),
            description: lang(['features', 'feature_2_details']),
            icon: AcademicCapIcon,
        },
        {
            id: 'results',
            name: lang(['features', 'feature_3']),
            description: lang(['features', 'feature_3_details']),
            icon: ChartBarIcon,
        },
    ]

    return (
        <section
            aria-labelledby="features-heading"
            className="overflow-hidden brand-bg-cyan py-24 sm:py-32"
        >
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
                    <div className="lg:pt-4 lg:pr-8">
                        <div className="lg:max-w-lg">
                            <h2 className="text-base font-bold text-primary text-shadow-white" id="features-subheading">
                                {lang(['features','why_choose_us'])}
                            </h2>
                            <h3 id="features-heading" className="mt-2 text-4xl font-semibold tracking-tight text-primary sm:text-5xl">
                                {lang(['features', 'title_1'])} <span className="text-accent">{lang(['features', 'title_2'])}</span>
                            </h3>
                            <p className="mt-6 text-lg text-secondary">
                                {lang(['features','subtitle'])}
                            </p>

                            <ul className="mt-10 max-w-xl space-y-8 text-base text-secondary lg:max-w-none">
                                {features.map((feature) => (
                                    <li key={feature.id} className="relative pl-9">
                                        <h4 className="inline font-semibold text-primary">
                                            <feature.icon
                                                aria-hidden="true"
                                                className="absolute top-1 left-1 h-5 w-5 text-accent"
                                            />
                                            {feature.name} :
                                        </h4>
                                        <p className="inline pl-1">{feature.description}</p>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>

                    <div className="flex items-start justify-center">
                        <Image
                            alt="Engaged students learning in classroom environment"
                            src="/teacher2.png"
                            width={2432}
                            height={1442}
                            className="w-full max-w-md rounded-xl shadow-xl ring-1 ring-primary/10 md:max-w-lg lg:max-w-xl"
                            priority
                        />
                    </div>
                </div>
            </div>
        </section>
    )
}