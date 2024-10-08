import { secure1 } from "../assets";
import { noDrugs } from "../assets";
import { news1 } from "../assets";
import { blackSkiMask } from "../assets";
import { userNotFound } from "../assets";
import { charity } from "../assets";
import { book1 } from "../assets";
import { webinar } from "../assets";
import { thumbsUpDown } from "../assets";

export default function ServicesCard() {
    const data = [
        {
            icon: secure1,
            title: "Anonymous Reporting",
            description:
                "Submit information on drug trafficking without revealing your identity, ensuring privacy and safety.",
        },
        {
            icon: noDrugs,
            title: "Learn About Drugs",
            description:
                "Find in-depth resources on drug-related threats, their effects, and the societal consequences.",
        },
        {
            icon: news1,
            title: "News & Updates",
            description:
                "Keep up with the latest headlines and developments in the fight against drug trafficking.",
        },
        {
            icon: blackSkiMask,
            title: "Wanted Individuals",
            description:
                "Explore profiles and details of those most sought after for drug-related offenses.",
        },
        {
            icon: userNotFound,
            title: "Anti-Trafficking Efforts",
            description:
                "Learn about the initiatives and actions being taken to combat drug trafficking.",
        },
        {
            icon: charity,
            title: "Support & Donate",
            description:
                "Contribute towards the recovery and support of those impacted by drug addiction through donations.",
        },
        {
            icon: book1,
            title: "Awareness Tutorials",
            description:
                "Watch interactive guides to help recognize drug trafficking signs and take preventive steps.",
        },
        {
            icon: webinar,
            title: "Educationals Sessions",
            description:
                "Check out upcoming webinars and workshops, and access recordings of past events.",
        },
        {
            icon: thumbsUpDown,
            title: "Community Feedback",
            description:
                "Share your thoughts through surveys and polls to help shape anti-drug efforts and community initiatives.",
        },
    ];

    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {data.map((elem, index) => (
                <div
                    key={index}
                    className="px-6 py-6 bg-[#ECF2FF] hover:bg-[#E4FFEA] rounded-2xl text-[#003588]"
                >
                    <img src={elem.icon} className="h-20 w-20 mb-6 rounded-full" />
                    <h6 className="text-2xl font-semibold mb-3">
                        {elem.title}
                    </h6>
                    <div className="tracking-tight">
                        <p className="mb-10">{elem.description}</p>
                        <p>Learn More</p>
                    </div>
                </div>
            ))}
        </div>
    );
}
