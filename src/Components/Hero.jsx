import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { Link } from "react-router-dom";
import bg from "../assets/treatment-sick-person.jpg";

export default function Hero() {
    useGSAP(() => {
        gsap.from("#heroMain", {
            y: 50,
            duration: 1,
            delay: 0.1,
            opacity: 0,
        });

        gsap.from("#marquee", {
            duration: 18,
            translateX: 0,
            repeat: -1,
            ease: "none",
        });
    });

    return (
        <div
            id="heroMain"
            // className="relative bg-[url('assets\treatment-sick-person.jpg')] bg-center h-[100vh] pt-[15vh] rounded-3xl"
            className="relative bg bg-center h-[100vh] pt-[15vh] rounded-3xl"
            style={{
                backgroundSize: "cover",
            }}
        >
            <div className="absolute right-0">
                <h1 className="w-[38rem] text-[70px] text-white font-bold leading-tight">
                    Protecting Lives, One Step at a Time
                </h1>
                <div className="w-[30vw]">
                    <div className="flex flex-col items-center">
                        <h4 className="my-4  text-[1rem] text-white">
                            At NarcLine, we focus on education and community
                            involvement to build a safer environment for
                            everyone. Together, we can make a difference.
                        </h4>
                        <div className="my-8 flex gap-x-10">
                            <Link to="/anonymouscomplaint">
                                <button className="px-5 py-3 rounded-full text-base text-white bg-[#003588] hover:bg-green-800">
                                    Report Anonymously
                                </button>
                            </Link>
                            <Link to="/joincommunity">
                                <button className="px-5 py-3 rounded-full text-base text-white bg-[#003588] hover:bg-green-800">
                                    Join the Community
                                </button>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
            <div>
                <h1 className="before:content-[''] before:absolute before:bottom-0 before:right-28 before:h-12 before:w-12 before:bg-transparent before:rounded-br-3xl before:shadow-[0_22px_0_0_#FFF]"></h1>
                <div className="absolute bottom-0 right-0 py-14 px-14 bg-white rounded-tl-2xl"></div>
                <h1 className="before:content-[''] before:absolute before:bottom-28 before:right-0 before:h-12 before:w-12 before:bg-transparent before:rounded-br-3xl before:shadow-[0_22px_0_0_#FFF]"></h1>
            </div>
            <div>
                <h1 className="before:content-[''] before:absolute before:bottom-[5.75rem] before:left-0 before:h-12 before:w-12 before:bg-transparent before:rounded-bl-3xl before:shadow-[-22px_0_0_0_#FFF]"></h1>
                <div className="absolute w-[35rem] z-10 bottom-0 left-0 py-8 bg-white rounded-tr-2xl overflow-x-hidden">
                    <div
                        id="marquee"
                        className="text-xl text-[#003588] flex font-semibold tracking-wide whitespace-nowrap -translate-x-[155%]"
                    >
                        <div className="flex gap-3">
                            <h6>Anonymous Reporting</h6>
                            <h6>Latest News</h6>
                            <h6>Donations</h6>
                            <h6>Community Support</h6>
                            <h6>Educational Support</h6>
                        </div>
                        <div className="flex gap-3">
                            <h6 className="pl-3">Anonymous Reporting</h6>
                            <h6>Latest News</h6>
                            <h6>Donations</h6>
                            <h6>Community Support</h6>
                            <h6>Educational Support</h6>
                        </div>
                    </div>
                </div>
                <h1 className="before:content-[''] before:absolute before:bottom-0 before:left-[35rem] before:h-12 before:w-12 before:bg-transparent before:rounded-bl-3xl before:shadow-[-22px_0_0_0_#FFF]"></h1>
            </div>
        </div>
    );
}
