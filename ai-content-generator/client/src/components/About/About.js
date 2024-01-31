import React from "react"
import {
    LifebuoyIcon,
    NewspaperIcon,
    PhoneIcon
} from "@heroicons/react/20/solid"

const cards = [
    {
        name: "Innovative Solutions",
        description: "At InnovateGen AI Solutions, creativity fuels our advancements. We excel in converting intricate AI technologies into intuitive platforms for content generation, empowering our clients to lead the charge in the digital content arena.",
        icon: PhoneIcon,
    },
    {
        name: "Dedicated Customer Support",
        description: "We believe in empowering our users with continuous support. Our dedicated team is always on standby to assist with any queries, ensuring a smooth, uninterrupted experience in content creation.",
        icon: NewspaperIcon,
    },
    {
        name: "Press & Media Collaborations",
        description: "InnovateGen AI Solutions leads the charge in AI-powered content generation. We eagerly seek partnerships with media and press to exchange insights and advancements in AI technology, driving the evolution of digital content forward",
        icon: LifebuoyIcon
    }
]

export default function AboutUs() {
    return (
        <div className="relative isolate overflow-hidden bg-gray-900 py-24 sm:py-32">
            {/* Background and layout elements */}
            {/* ... */}
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <div className="mx-auto max-w-2xl lg:mx-0">
                    <h2 className="text-4xl font-bold tracking-tight text-white sm:text-6xl">
                        InnovateGen AI Solutions
                    </h2>
                    <p className="mt-6 text-lg leading-8 text-gray-300">
                        InnovateGen AI Solutions is reshaping the landscape of content creation. Our state-of-the-art AI technology streamlines and elevates content generation, empowering creators to craft compelling, top-tier material effortlessly.
                    </p>
                </div>
                <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-6 sm:mt-20 lg:mx-0 lg:max-w-none lg:grid-cols-3 lg:gap-8">
                    {cards.map((card) => (
                        <div key={card.name} className="flex gap-x-4 rounded-xl bg-white/5 p-6 ring-1 ring-inset ring-white/10">
                            <card.icon className="h-7 w-5 flex-none text-indigo-400" aria-hidden="true" />
                            <div className="text-base leading-7">
                                <h3 className="font-semibold text-white">{card.name}</h3>
                                <p className="mt-2 text-gray-300">{card.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}