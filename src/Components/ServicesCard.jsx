import { Link } from "react-router-dom";
import { secure1, noDrugs, news1, blackSkiMask, userNotFound, charity, book1, webinar, thumbsUpDown } from "../assets";

export default function ServicesCard() {
    const data = [
        {
            icon: secure1,
            title: "Anonymous Reporting",
            description: "Submit information on drug trafficking without revealing your identity, ensuring privacy and safety.",
            route: "/anonymouscomplaint",
        },
        {
            icon: noDrugs,
            title: "Learn About Drugs",
            description: "Find in-depth resources on drug-related threats, their effects, and the societal consequences.",
            // route: "/learn-about-drugs",
        },
        {
            icon: news1,
            title: "News & Updates",
            description: "Keep up with the latest headlines and developments in the fight against drug trafficking.",
            route: "/latestnews",
        },
        {
            icon: blackSkiMask,
            title: "Wanted Individuals",
            description: "Explore profiles and details of those most sought after for drug-related offenses.",
            route: "/wantedindividuals",
        },
        {
            icon: userNotFound,
            title: "Anti-Trafficking Efforts",
            description: "Learn about the initiatives and actions being taken to combat drug trafficking.",
            // route: "/anti-trafficking-efforts",
        },
        {
            icon: charity,
            title: "Support & Donate",
            description: "Contribute towards the recovery and support of those impacted by drug addiction through donations.",
            route: "/joincommunity",
        },
        {
            icon: book1,
            title: "Awareness Tutorials",
            description: "Watch interactive guides to help recognize drug trafficking signs and take preventive steps.",
            route: "/eduresources",
        },
        {
            icon: webinar,
            title: "Educational Sessions",
            description: "Check out upcoming webinars and workshops, and access recordings of past events.",
            route: "/webinars",
        },
        {
            icon: thumbsUpDown,
            title: "Community Feedback",
            description: "Share your thoughts to help shape anti-drug efforts and community initiatives.",
            route: "/feedback",
        },
    ];

    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {data.map((elem, index) => (
                <Link to={elem.route} key={index}>
                    <div
                        className="px-6 py-6 bg-[#ECF2FF] hover:bg-[#E4FFEA] rounded-2xl text-[#003588] cursor-pointer"
                    >
                        <img src={elem.icon} className="h-20 w-20 mb-6 rounded-full" alt={elem.title} />
                        <h6 className="text-2xl font-semibold mb-3">
                            {elem.title}
                        </h6>
                        <div className="tracking-tight">
                            <p className="mb-10">{elem.description}</p>
                            <p>Learn More</p>
                        </div>
                    </div>
                </Link>
            ))}
        </div>
    );
}
