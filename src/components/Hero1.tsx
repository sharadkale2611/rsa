import Image from 'next/image'
import React from 'react'

export default function Hero1() {
    const backgroundStyle = {
        backgroundImage: 'url("/classroom-teaching.jpg")', // Updated image suggestion
        backgroundSize: 'cover',
        backgroundPosition: 'center',
    }

  return (
    <div>
          {/* Hero Section with Academic Focus */}
          <div className="relative isolate px-6 pt-32 lg:px-8" style={backgroundStyle}>
              <div className="absolute inset-0 bg-gradient-to-r from-[#dffffe]/90 via-[#dffffe]/70 to-[#dffffe]/30 backdrop-blur-sm z-0" />

              <div className="relative z-10 mx-auto max-w-7xl py-12 sm:py-38 lg:py-15 flex flex-col lg:flex-row items-center justify-between">
                  <div className="lg:w-1/2 text-center lg:text-left mb-10 lg:mb-0">
                      <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
                          Building <span className="text-[#d53207]">Future Scholars</span> for JEE/NEET
                      </h1>
                      <p className="mt-6 text-lg leading-8 text-gray-700">
                          &quot;Success is where preparation and opportunity meet.&quot; - Bobby Unser<br />
                          Our intensive programs for 11th & 12th Science students combine<br />
                          <span className="font-semibold text-[#d53207]">conceptual clarity</span> with <span className="font-semibold text-[#d53207]">competitive exam preparation</span>.
                      </p>
                      <div className="mt-10 flex items-center justify-center lg:justify-start gap-x-6">
                          <a
                              href="#demo-class"
                              className="rounded-md bg-[#d53207] px-6 py-3 text-sm font-semibold text-white shadow-sm hover:bg-[#a32805] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#d53207]"
                          >
                              Book Demo Class
                          </a>
                          <a
                              href="#results"
                              className="text-sm font-semibold leading-6 text-gray-900 hover:text-[#d53207]"
                          >
                              View 2023 Results <span aria-hidden="true">→</span>
                          </a>
                      </div>
                      <div className="mt-8 flex flex-wrap justify-center lg:justify-start gap-4">
                          <span className="inline-flex items-center rounded-full bg-[#fccd0c] px-3 py-1 text-xs font-medium text-gray-900">
                              IIT-JEE Foundation
                          </span>
                          <span className="inline-flex items-center rounded-full bg-[#fccd0c] px-3 py-1 text-xs font-medium text-gray-900">
                              NEET Preparation
                          </span>
                          <span className="inline-flex items-center rounded-full bg-[#fccd0c] px-3 py-1 text-xs font-medium text-gray-900">
                              Board Exam Excellence
                          </span>
                      </div>
                  </div>

                  <div className="hidden lg:flex lg:w-1/2 justify-center">
                      {/* Suggested alternative images:
                           - "science-students.jpg" - Group studying science
                           - "teacher-explaining.jpg" - Faculty teaching concepts
                           - "exam-preparation.jpg" - Students taking mock tests */}
                      <Image
                          alt="Faculty explaining complex concepts to students"
                          src="/students-in-lab.png"
                          height={600}
                          width={600}
                          className="max-w-md object-contain"
                          priority
                      />
                  </div>
              </div>
          </div>
      
    </div>
  )
}
