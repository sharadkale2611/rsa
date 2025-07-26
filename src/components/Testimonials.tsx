import { useLang } from "@/utils/useLang"
import React from "react"

export default function Testimonials() {
    const lang = useLang()

    const testimonials = [
        {
            name: lang(['testimonials', 'student1',"name"]),
            message: lang(['testimonials', 'student1', "message"])
        },
        {
            name: lang(['testimonials', 'student2', "name"]),
            message: lang(['testimonials', 'student2', "message"])
        },
        {
            name: lang(['testimonials', 'student3', "name"]),
            message: lang(['testimonials', 'student3', "message"])
        },
    ]


    return (
        <section className="bg-background text-primary py-16 px-4 sm:px-8">
            <div className="max-w-6xl mx-auto text-center">
                <h2 className="text-3xl sm:text-4xl font-bold mb-12 text-accent">
                    {lang(['testimonials','title'])}
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
