import { doctor_guidance } from "../assets";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default function HowWeWork() {
    const data = [
        {
            title: "Secure Reporting",
            description:
                "Experience hassle-free reporting of drug trafficking activities with NarcLine. Our platform makes sure that filing a report is easy, fast, and—above all—secure. We ensure the security of your contribution and safeguard your identity by using cutting-edge encryption technologies.",
        },
        {
            title: "Analyze and Take Action",
            description:
                "Ensure that every report is handled with care and precision. Each input is carefully examined by our team of experts to ensure that all information is correct and pertinent. After verification, we forward the data to the relevant authorities, NGOs, or law enforcement for prompt action.",
        },
        {
            title: "Community Engagement and Support",
            description:
                "Ensure people to interact with one another through blogs, peer support groups, and specialized forums. Our community offers a forum for candid conversation, help from one another, and coordinated efforts to combat drug misuse, regardless of whether you're looking for assistance or just want to tell your story.",
        },
        {
            title: "Education and Empowerment",
            description:
                "Empowers users with access to comprehensive educational resources. We provide interactive tutorials, informative webinars, and expert advice on drug prevention, safety measures, and recovery strategies.",
        },
    ];

    useGSAP(() => {
        gsap.registerPlugin(ScrollTrigger);

        gsap.to("#scrollBar", {
            y: 957,
            ease: "sine.out",
            scrollTrigger: {
                trigger: "#scrollBarMain",
                scroller: "body",
                start: "top 40%",
                end: "bottom 50%",
                scrub: 1,
            },
        });

        data.forEach((elem, index) => {
            gsap.to(`#heading-${index}`, {
                color: "#003488",
                ease: "sine.out",
                scrollTrigger: {
                    trigger: `#heading-${index}`,
                    scroller: "body",
                    start: "top 70%",
                    end: "top 60%",
                    scrub: 1,
                },
            });

            gsap.to(`#description-${index}`, {
                color: "#033e9e",
                ease: "sine.out",
                scrollTrigger: {
                    trigger: `#heading-${index}`,
                    scroller: "body",
                    start: "top 70%",
                    end: "top 60%",
                    scrub: 1,
                },
            });
        });
    });

    return (
        <div className="relative ">
            <h1 className="before:content-[''] before:absolute before:top-0 before:left-24 before:h-12 before:w-12 before:bg-transparent before:rounded-tl-3xl before:shadow-[0_-22px_0_0_#fff]"></h1>
            <div className="absolute py-12 px-12 bg-white rounded-br-3xl"></div>
            <h1 className="before:content-[''] before:absolute before:top-24 before:left-0 before:h-12 before:w-12 before:bg-transparent before:rounded-tl-3xl before:shadow-[0_-22px_0_0_#fff]"></h1>

            <div className="bg-[#EDF2FB] px-16 mt-20">
                <div className="flex flex-col items-end right-0">
                    <div>
                        <h3 className="inline-block px-3 mt-12 rounded-full bg-gradient-to-r from-[#BAECFE] to-white text-lg text-[#003588] font-semibold">
                            How we work
                        </h3>
                        <div className="flex text-[3rem] font-semibold tracking-tight">
                            <h1 className="whitespace-pre text-[#003588]">
                                Essential{" "}
                            </h1>
                            <h1 className="text-[#266AFB]">Navigation</h1>
                        </div>
                    </div>
                </div>
                <div
                    id="scrollBarMain"
                    className="relative flex justify-between pt-10 pb-20"
                >
                    <div className="flex">
                        <div className="relative border-[2.5px] border-[#00348861] h-[70rem] flex justify-center">
                            <div
                                id="scrollBar"
                                className="absolute border-[2.5px] border-[#003488] h-[10rem]"
                            ></div>
                        </div>

                        <div className="flex flex-col gap-24 pl-10">
                            {data.map((elem, index) => (
                                <div key={index}>
                                    <div className="w-[35rem] text-[#00348842]">
                                        <h5
                                            id={`heading-${index}`}
                                            className="text-4xl font-semibold pb-6"
                                        >
                                            {elem.title}
                                        </h5>
                                        <p
                                            id={`description-${index}`}
                                            className="text-lg text-[#033e9e50]"
                                        >
                                            {elem.description}
                                        </p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                    <img
                        src={doctor_guidance}
                        alt=""
                        className="sticky top-20 w-[45rem] h-[35rem] rounded-3xl"
                        style={{ objectFit: "cover" }}
                    />
                </div>
            </div>
        </div>
    );
}
