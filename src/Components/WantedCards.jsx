import React, { useState } from "react";
import {
    secure1,
    noDrugs,
    news1,
    blackSkiMask,
    userNotFound,
    charity,
    book1,
    webinar,
    thumbsUpDown,
    wi1,
    wi2,
    wi3,
    wi4,
    wi5,
    wi6,
    wi7,
    wi8,
    wi9,
    wi10,
    wi11,
} from "../assets";

const WantedCards = () => {
    const [expandedCardIndex, setExpandedCardIndex] = useState(null);

    const data = [
        {
            pic: wi1,
            name: "Vikram Malhotra",
            reason: "Known for coordinating cross-border smuggling routes between India and neighboring countries.",
            details:
                "Vikram Malhotra has been on the radar of enforcement agencies for years. His network operates across borders, leveraging both traditional and modern smuggling techniques to transport contraband goods.",
        },
        {
            pic: wi2,
            name: "Rajesh Kumar",
            reason: "Involved in the illegal manufacture and distribution of synthetic drugs in underground laboratories across multiple Indian cities.",
            details:
                "Rajesh Kumar is a chemist by training, using his expertise to synthesize dangerous drugs in hidden labs. Authorities have raided his labs multiple times, but he continues to evade capture.",
        },
        {
            pic: wi3,
            name: "Imran Sheikh",
            reason: "Supplier of cocaine to high-profile clients in metropolitan areas. Suspected to be connected with major international drug cartels.",
        },
        {
            pic: wi4,
            name: "Ramesh Patil",
            reason: "Responsible for recruiting young individuals into drug trafficking networks, particularly targeting vulnerable populations in urban slums.",
        },
        {
            pic: wi5,
            name: "Ajay Thakur",
            reason: "Operates a network for distribution of marijuana and hashish across Maharashtra, using local delivery services and private couriers.",
        },
        {
            pic: wi6,
            name: "Sunil Choudhary",
            reason: "Known for brokering deals between suppliers and buyers in India and Nepal, specializing in the smuggling of opium derivatives.",
        },
        {
            pic: wi7,
            name: "Deepak Jain",
            reason: "Manages a logistics network for transporting narcotics across state lines, using modified vehicles to evade detection.",
        },
        {
            pic: wi8,
            name: "Anil Deshmukh",
            reason: "Financier who handles the money laundering aspect of drug trafficking operations, funneling profits through shell companies in India.",
        },
        {
            pic: wi9,
            name: "Shazad Ghafoor",
            reason: "Involved in enforcing territorial control for drug operations in South India, known for using intimidation tactics against rival groups.",
        },
        {
            pic: wi10,
            name: "Shashi Dhar Sahnan",
            reason: "Oversees illegal opium poppy cultivation in rural areas of Madhya Pradesh and Bihar, linked with multiple regional syndicates.",
        },
        {
            pic: wi11,
            name: "Asim Naveed",
            reason: "Supplies prescription drugs to the black market, particularly opioids, exploiting loopholes in pharmaceutical regulations.",
        },
    ];

    const toggleExpanded = (index) => {
        setExpandedCardIndex(expandedCardIndex === index ? null : index);
    };

    return (
        <div className="bg-[#ECF2FF] p-10 rounded-2xl">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-14">
                {data.map((elem, index) => (
                    <div
                        key={index}
                        className="relative py-6 bg-white rounded-2xl text-[#003588] overflow-hidden"
                    >
                        <div className="absolute bottom-0 w-full h-full bg-gradient-to-b from-[#1114126c] via-transparent to-transparent transition-all duration-300" />
                        <div className="flex justify-center">
                            <img
                                src={elem.pic}
                                className="h-48 w-48 rounded-md mb-6 z-10"
                                alt={elem.name}
                            />
                        </div>
                        <div className="px-6">
                            <h6 className="text-2xl font-semibold mb-3">
                                {elem.name}
                            </h6>
                            <div className="tracking-tight">
                                <p className="mb-6 text-justify">
                                    {elem.reason}
                                </p>
                                <p
                                    className="cursor-pointer font-medium"
                                    onClick={() => toggleExpanded(index)}
                                >
                                    Read More
                                </p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            {expandedCardIndex !== null && (
                <div className="bg-white p-6 rounded-2xl shadow-lg mt-6">
                    <h6 className="text-xl font-bold mb-2">
                        {data[expandedCardIndex].name} - Details
                    </h6>
                    <p>{data[expandedCardIndex].details}</p>
                    <button
                        className="text-red-500 underline mt-4 cursor-pointer"
                        onClick={() => toggleExpanded(null)}
                    >
                        Close
                    </button>
                </div>
            )}
        </div>
    );
};

export default WantedCards;