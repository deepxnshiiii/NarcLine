import { useState } from "react";
import { plus, minus } from "../assets"; // Assuming you have a 'minus' icon

export default function WhyChooseUs() {
    const data = [
        {
            title: "Secure & Confidential Reporting",
            description:
                "Safeguard your privacy while taking action against drug trafficking.",
        },
        {
            title: "Comprehensive Resources",
            description:
                "Access vital information and tools to understand and combat drug threats.",
        },
        {
            title: "Community Engagement",
            description:
                "Connect with a supportive community to share experiences and find help.",
        },
        {
            title: "Action & Impact",
            description:
                "Participate in meaningful initiatives and contribute to creating a safer society.",
        },
    ];

    const [activeIndex, setActiveIndex] = useState(null); // Track currently active description

    // Toggle the description visibility
    const toggleDescription = (index) => {
        setActiveIndex(activeIndex === index ? null : index);
    };

    return (
        <div className="relative">
            <h1 className="before:content-[''] before:absolute before:top-0 before:right-24 before:h-12 before:w-12 before:bg-transparent before:rounded-tr-3xl before:shadow-[16px_-16px_0_0_#FFF]"></h1>
            <div className="absolute right-0 py-12 px-12 bg-white rounded-bl-2xl"></div>
            <h1 className="before:content-[''] before:absolute before:top-24 before:right-0 before:h-12 before:w-12 before:bg-transparent before:rounded-tr-3xl before:shadow-[16px_-16px_0_0_#FFF]"></h1>

            <div className="h-screen bg-[#EDF2FB] px-16 mt-24 pb-12">
                <h3 className="inline-block px-3 mt-12 rounded-full bg-gradient-to-r from-[#BAECFE] to-white text-lg text-[#003588] font-semibold">
                    Why choose us
                </h3>
                <div className="flex text-[3rem] font-semibold tracking-tight">
                    <h1 className="whitespace-pre text-[#003588]">Why Choose </h1>
                    <h1 className="text-[#266AFB]">SafeNet</h1>
                </div>

                {data.map((elem, index) => (
                    <div key={index}>
                        <div className="bg-white w-[40rem] px-6 py-5 text-[#003588] rounded-2xl mt-8">
                            <div className="flex justify-between items-center">
                                <p className="text-xl font-semibold">{elem.title}</p>
                                <img
                                    src={activeIndex === index ? minus : plus} // Swap icon based on toggle state
                                    className="h-4 cursor-pointer"
                                    onClick={() => toggleDescription(index)}
                                    alt="toggle icon"
                                />
                            </div>

                            {/* Description container with height transition */}
                            <div
                                className={`transition-all duration-500 ease-in-out overflow-hidden ${
                                    activeIndex === index ? "max-h-40 opacity-100 mt-4" : "max-h-0 opacity-0"
                                }`}
                            >
                                <p className="text-lg">{elem.description}</p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
