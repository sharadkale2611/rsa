import React from "react"

const testimonials = [
    {
        name: "Aarav Sharma",
        message:
            "Revolution Academy helped me build a solid foundation in Physics and Chemistry. The faculty is amazing and always supportive!",
    },
    {
        name: "Sneha Patil",
        message:
            "I was struggling with Math, but the practice problems and doubt sessions turned everything around. Highly recommend!",
    },
    {
        name: "Rohan Deshmukh",
        message:
            "I loved the structured curriculum and regular progress tests. It prepared me well for the board and competitive exams.",
    },
]

export default function Testimonials() {
    return (
        <section className="bg-background text-primary py-16 px-4 sm:px-8">
            <div className="max-w-6xl mx-auto text-center">
                <h2 className="text-3xl sm:text-4xl font-bold mb-12 text-accent">
                    What Our Students Say
                </h2>
                <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
                    {testimonials.map((t, index) => (
                        <div
                            key={index}
                            className="bg-foreground text-primary p-6 rounded-xl shadow-lg border border-gray-200 dark:border-gray-700"
                        >
                            <p className="text-light mb-4 italic">“{t.message}”</p>
                            <h3 className="text-brand-yellow font-semibold">{t.name}</h3>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}
