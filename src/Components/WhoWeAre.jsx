import { useEffect } from "react";
import { useGSAP } from "@gsap/react";
import { doctor, pill } from "../assets";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import gsap from "gsap";

gsap.registerPlugin(ScrollTrigger);

export default function WhoWeAre() {
    useGSAP(() => {
        gsap.from("#docimg", {
            // duration: 1,
            rotate: 10,
            delay: 1,
            scrollTrigger: {
                trigger: "#whoweareMain",
                scroller: "body",
                // markers: true,
                start: "top 80%",
                end: "top 10%",
                scrub: 1,
            },
        });
        gsap.from("#pill", {
            // duration: 3,
            x: 200,
            rotate: 480,
            scrollTrigger: {
                trigger: "#whoweareMain",
                scroller: "body",
                // markers: true,
                start: "top 80%",
                end: "top 10%",
                scrub: 1,
            },
        });
    });

    return (
        <div
            id="whoweareMain"
            className="flex gap-16 mt-28 items-center justify-center"
        >
            <div className="">
                <img
                    id="docimg"
                    src={doctor}
                    className="w-full h-[40rem] rounded-3xl"
                />
            </div>

            <div className="">
                <img id="pill" src={pill} className="" />
                <h3 className="inline-block px-3 my-5 rounded-full bg-gradient-to-r from-[#BAECFE] to-white text-lg text-[#003588] font-semibold">
                    Who we are
                </h3>
                <p className="max-w-[35rem] text-lg text-justify text-[#003588]">
                    <strong>NarcLine</strong> is one site focused completely in
                    the fight against illegal drug trafficking and its abuse.
                    Our mission would be to empower individuals and communities
                    with the tools, resources, and help required to act against
                    drug-related threats. We believe that collective Awareness,
                    education, and action can bring great benefit, reduce the
                    influence of drugs on society and make it a safer
                    environment for everyone. By facilitating secure reporting,
                    distribute educational resource lead to community-end
                    engagement. NarcLine wants to be the foundation for the
                    world effort to combat drug abuse and trafficking. Together,
                    we can do the trick and save future generations from the
                    risks of substances.
                </p>
                <button className="mt-6 px-8 py-2 rounded-full text-lg text-white bg-[#003588] hover:bg-green-800">
                    Learn More
                </button>
            </div>
        </div>
    );
}
