import { DiaArrow, secure, community, news, book } from "../assets";

export default function Card() {
    const data = [
        {
            icon: secure,
            title1: "Secure",
            title2: "Reporting",
            description:
                "Submit reports on drug trafficking activities with confidence and confidentiality.",
            bgColor: "bg-[#ECF2FF]",
        },
        {
            icon: community,
            title1: "Community",
            title2: "Engagement",
            description:
                "Engage with others through blogs, forums, and support groups to share experiences and provide help.",
            bgColor: "bg-[#E4FFEA]",
        },
        {
            icon: news,
            title1: "Latest",
            title2: "News",
            description:
                "Get the latest updates on drug-related news, legislation, and enforcement actions.",
            bgColor: "bg-[#E0F7FF]",
        },
        {
            icon: book,
            title1: "Educational",
            title2: "Resources",
            description:
                "Explore tutorials, webinars, and articles on drug prevention and safety.",
            bgColor: "bg-[#EDF2FB]",
        },
    ];

    return (
        <div
            id="cardMain"
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 my-4"
        >
            {data.map((elem, index) => (
                <div
                    key={index}
                    className={`relative text-[#003588] rounded-3xl px-6 pt-8 pb-24 ${elem.bgColor}`}
                >
                    <img src={elem.icon} className="h-20 w-20 mb-6 rounded-full" alt="" />
                    <div>
                        <h1 className="before:content-[''] before:absolute before:top-0 before:right-12 before:h-12 before:w-12 before:bg-transparent before:rounded-tr-3xl before:shadow-[16px_-16px_0_0_#FFF]"></h1>
                        <div className="absolute right-0 top-0 bg-white w-12 h-12 rounded-bl-2xl"></div>
                        <h1 className="before:content-[''] before:absolute before:top-12 before:right-0 before:h-12 before:w-12 before:bg-transparent before:rounded-tr-3xl before:shadow-[16px_-16px_0_0_#FFF]"></h1>
                    </div>
                    <h1 className="text-[1.7rem] leading-snug font-semibold">
                        {elem.title1}
                        <br />
                        {elem.title2}
                    </h1>
                    <p className="w-52 mt-3 font-medium tracking-wide">
                        {elem.description}
                    </p>
                    <div>
                        <h1 className="before:content-[''] before:absolute before:bottom-0 before:right-[8.75rem] before:h-12 before:w-12 before:bg-transparent before:rounded-br-3xl before:shadow-[0_16px_0_0_#FFF]"></h1>
                        <div className="absolute flex items-center gap-1 bottom-0 right-0 py-2 px-4 w-[8.75rem] bg-white text-[#003588] rounded-tl-2xl">
                            <p>Read more</p>
                            <img
                                id="diaArrow"
                                src={DiaArrow}
                                className="h-3.5"
                            />
                        </div>
                        <h1 className="before:content-[''] before:absolute before:bottom-10 before:-right-[0.125rem] before:h-12 before:w-12 before:bg-transparent before:rounded-br-3xl before:shadow-[0_14px_0_0_#FFF]"></h1>
                    </div>
                </div>
            ))}
        </div>
    );
}
