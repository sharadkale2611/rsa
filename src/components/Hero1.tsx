import { useLang } from '@/utils/useLang';
import Image from 'next/image'
import Link from 'next/link'

export default function Hero1() {
    const lang = useLang();
        
    return (
        <section aria-labelledby="hero-heading" className="relative">
            {/* Background with aria-hidden and role for decorative image */}
            <div
                className="absolute inset-0 bg-[url('/classroom-teaching.jpg')] bg-cover bg-center"
                aria-hidden="true"
                role="img"
            />

            {/* Gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/70 to-black/50 backdrop-blur-sm" aria-hidden="true" />

            <div className="relative z-10 mx-auto max-w-7xl px-6 py-32 lg:px-8 lg:py-38 flex flex-col lg:flex-row items-center justify-between">
                <div className="lg:w-1/2 text-center lg:text-left mb-10 lg:mb-0">
                    <h1 id="hero-heading" className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-dark-gradient ">
                        {lang(['hero','heading_part1'])}{' '}
                        <span className="text-orange drop-shadow-md">
                            {lang(['hero', 'heading_part2'])}{' '}
                        </span> 
                        {lang(['hero', 'heading_part3'])}{' '}
                    </h1>
                    <p className="mt-6 text-lg leading-8 text-dark-gradient">
                        &quot;{lang('hero.quote_part1')}.&quot; - {lang('hero.quote_part1_owner')}<br />
                        {lang('hero.description_line1')}<br />
                        <span className="font-semibold text-brand-yellow no-text-shadow">
                            {lang('hero.conceptual_clarity')}
                        </span> {lang('hero.description_line2')}{' '}
                        <span className="font-semibold text-brand-yellow no-text-shadow">
                            {lang('hero.competitive_prep')}
                        </span>.
                    </p>

                    {/* CTA Buttons */}
                    <div className="mt-10 flex items-center justify-center lg:justify-start gap-x-6">
                        <Link
                            href="/demo-class"
                            className=" btn-orange  rounded-md px-6 py-3 text-sm font-semibold shadow-sm transition-colors focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-900"
                        >
                            {lang('register_now')}
                        </Link>
                        <Link
                            href="/results"
                            className="rounded-md bg-white/10 px-6 py-3 text-sm font-semibold text-inverse shadow-sm hover:bg-white/20 transition-colors focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-900"
                            aria-label="View 2023 results"
                        >
                            {lang(['view_last_year_result'])} <span aria-hidden="true">→</span>
                        </Link>
                    </div>

                    {/* Program badges */}
                    <ul className="mt-8 flex flex-wrap justify-center lg:justify-start gap-4" aria-label="Program offerings">
                        {[
                            "IIT-JEE Foundation",
                            "NEET Preparation",
                            "Board Exam Excellence"
                        ].map((program) => (
                            <li key={program}>
                                <span className="inline-flex items-center opacity-90 rounded-full brand-bg-yellow px-4 py-1.5 text-sm font-bold text-primary">
                                    {program}
                                </span>
                            </li>
                        ))}
                    </ul>
                </div>

                {/* Image with priority loading */}
                <div className="hidden lg:flex lg:w-1/2 justify-center" aria-hidden="true">
                    <Image
                        alt="Students engaged in laboratory learning"
                        src="/students-in-lab.png"
                        height={600}
                        width={600}
                        className="max-w-md object-contain"
                        priority
                    />
                </div>
            </div>
        </section>
    )
}