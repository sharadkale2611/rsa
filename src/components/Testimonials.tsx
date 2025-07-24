export default function Testimonials() {
    return (
        <section className="relative isolate overflow-hidden bg-[#dffffe] px-6 py-24 sm:py-32 lg:px-8">
            {/* Background elements */}
            <div className="absolute inset-0 -z-10 bg-[radial-gradient(45rem_50rem_at_top,var(--color-indigo-100),white)] opacity-20" />
            <div className="absolute inset-y-0 right-1/2 -z-10 mr-16 w-[200%] origin-bottom-left skew-x-[-30deg] bg-[#fccd0c]/10 shadow-xl ring-1 ring-[#d53207]/10 sm:mr-28 lg:mr-0 xl:mr-16 xl:origin-center" />

            <div className="mx-auto max-w-2xl lg:max-w-4xl">
                {/* Institute logo */}
                <img
                    alt="Revolution Academy Logo"
                    src="/avatar3.png"
                    className="mx-auto h-16"
                />

                <figure className="mt-10">
                    <blockquote className="text-center text-xl font-semibold leading-8 text-gray-900 sm:text-2xl sm:leading-9">
                        <p>
                            “The faculty&apos;s personalized attention and structured DSA program helped me crack JEE Advanced with AIR 487.
                            Their problem-solving approach transformed how I tackle complex questions.”
                        </p>
                    </blockquote>
                    <figcaption className="mt-10">
                        <img
                            alt="Rahul Sharma"
                            src="/avatar1.png" // Suggested: actual student images (with permission)
                            className="mx-auto h-12 w-12 rounded-full object-cover"
                        />
                        <div className="mt-4 flex items-center justify-center space-x-3 text-base">
                            <div className="font-semibold text-[#d53207]">Rahul Sharma</div>
                            <svg width={3} height={3} viewBox="0 0 2 2" aria-hidden="true" className="fill-[#d53207]">
                                <circle r={1} cx={1} cy={1} />
                            </svg>
                            <div className="text-gray-600">JEE Advanced AIR 487 (2023)</div>
                        </div>
                    </figcaption>
                </figure>

                {/* Additional testimonial */}
                <figure className="mt-16">
                    <blockquote className="text-center text-xl font-semibold leading-8 text-gray-900 sm:text-2xl sm:leading-9">
                        <p>
                            “As a parent, I appreciate the regular progress updates and doubt-clearing sessions. My daughter improved
                            from 65% to 92% in Physics within 6 months of joining.”
                        </p>
                    </blockquote>
                    <figcaption className="mt-10">
                        <img
                            alt="Mrs. Patel"
                            src="/avatar2.png" // Suggested: parent images (generic if needed)
                            className="mx-auto h-12 w-12 rounded-full object-cover"
                        />
                        <div className="mt-4 flex items-center justify-center space-x-3 text-base">
                            <div className="font-semibold text-[#d53207]">Mrs. Patel</div>
                            <svg width={3} height={3} viewBox="0 0 2 2" aria-hidden="true" className="fill-[#d53207]">
                                <circle r={1} cx={1} cy={1} />
                            </svg>
                            <div className="text-gray-600">Parent of 12th Science Student</div>
                        </div>
                    </figcaption>
                </figure>
            </div>
        </section>
    )
}