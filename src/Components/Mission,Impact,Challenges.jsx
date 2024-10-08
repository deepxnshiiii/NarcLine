import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect } from "react";

export default function MissionImpactChallenges() {
    useGSAP(() => {
        gsap.registerPlugin(ScrollTrigger);

        gsap.from("#missionText", {
            y: 100,
            duration: 1,
            delay: 0.1,
            opacity: 0,
            scrollTrigger: {
                trigger: "#mission",
                scroller: "body",
                // markers: true,
                start: "top 80%",
            },
        });

        gsap.from("#impactText", {
            y: 50,
            duration: 1,
            delay: 0.1,
            opacity: 0,
            scrollTrigger: {
                trigger: "#impact",
                scroller: "body",
                // markers: true,
                start: "top 80%",
            },
        });

        gsap.from("#challengesText", {
            y: 50,
            duration: 1,
            delay: 0.1,
            opacity: 0,
            scrollTrigger: {
                trigger: "#challenges",
                scroller: "body",
                // markers: true,
                start: "top 80%",
            },
        });

        const missiontl = gsap.timeline({
            scrollTrigger: {
                trigger: "#mission",
                scroller: "body",
                // markers: true,
                start: "top 50%",
            },
        });

        missiontl.from("#missionDownImg", {
            x: -1750,
            duration: 1.2,
            opacity: 0,
            ease: "power4.out",
        });

        missiontl.to("#missionDownImg", {
            delay: 0,
            backgroundColor: "white",
        });

        missiontl.to("#missionDownImg", {
            delay: 0,
            backgroundImage: `url('https://img.freepik.com/free-photo/close-up-depressed-woman-holding-pills_23-2149071935.jpg?t=st=1728121277~exp=1728124877~hmac=c943f08e9d5f6c23b4f8dc455f099b3cef419f09de4bceed6bc172086f98240e&w=996')`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            duration: 0.2,
            opacity: 1,
            ease: "power1.out",
        });

        const impacttl = gsap.timeline({
            scrollTrigger: {
                trigger: "#impact",
                scroller: "body",
                // markers: true,
                start: "top 50%",
            },
        });

        impacttl.from("#impactDownImg", {
            x: -1750,
            duration: 1.2,
            opacity: 0,
            ease: "power4.out",
        });

        impacttl.to("#impactDownImg", {
            delay: 0,
            backgroundColor: "white",
        });

        impacttl.to("#impactDownImg", {
            delay: 0,
            backgroundImage: `url('https://img.freepik.com/free-photo/high-angle-view-woman-s-hand-holding-blister-pack-wooden-desk_23-2147953196.jpg?t=st=1728205039~exp=1728208639~hmac=3b1cacc2e4b48544747cccf3594b6b73fdf2a2718bf96cd79921c063725925fb&w=996')`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            duration: 0.2,
            opacity: 1,
            ease: "power1.out",
        });
    });

    return (
        <div className="mt-20">
            <div id="mission" className="grid grid-cols-3">
                <div className="col-span-1 relative bg-[#364F65] mx-8 rounded-md flex items-center justify-center overflow-hidden group">
                    <h2 className="text-white text-3xl font-semibold z-10">
                        MISSION
                    </h2>
                    <div className="absolute inset-0 bg-blue-300 transition-transform duration-500 transform translate-y-full group-hover:translate-y-0"></div>
                </div>

                <div className="col-span-2">
                    <div className="grid grid-cols-3">
                        <div
                            id="missionText"
                            className="col-span-2 p-4 text-[#003588] text-lg"
                        >
                            <p>
                                At SafeNet, our mission is to empower
                                individuals and communities to take action
                                against drug trafficking and abuse. Our goal is
                                to establish a safe and private platform where
                                individuals may report drug-related activity. We
                                want to create a culture where individuals are
                                empowered to combat the drug epidemic by raising
                                awareness, educating the public, and involving
                                the community. SafeNet is committed to creating
                                a drug-free and safer neighborhood by uniting
                                people, law enforcement, and community
                                organizations.
                            </p>
                        </div>

                        <div className="col-span-1 bg-white p-4"></div>
                    </div>
                </div>
            </div>

            <div className="my-8 grid grid-cols-3">
                <div className="col-span-1 mx-8"></div>

                <div className="col-span-2">
                    <div className="grid grid-cols-3 overflow-hidden">
                        <div
                            id="missionDownImg"
                            className="col-span-2 bg-green-200 text-transparent p-10"
                            style={{
                                backgroundSize: "cover",
                                backgroundPosition: "center",
                            }}
                        >
                            <p>
                                SafeNet envisions creating a profound impact on
                                society by addressing the challenges of drug
                                trafficking and abuse head-on. By offering a
                                platform that encourages participation and
                                cooperation, we empower individuals to
                                contribute to the fight against drugs without
                                fear of retaliation. SafeNet not only aids law
                                enforcement by providing valuable intelligence
                                but also educates the public, raises awareness,
                                and promotes a culture of proactive community
                                engagement. As more people engage with the
                                platform, we expect a noticeable reduction in
                                drug trafficking activities, creating safer
                                neighborhoods and healthier communities. SafeNet
                                envisions creating a profound impact on society
                                by addressing the challenges of drug trafficking
                                and abuse head-on. By offering a platform tha
                            </p>
                        </div>

                        <div className="col-span-1 bg-blue-200">
                            <h2 className="">{/* IMPACT */}</h2>
                        </div>
                    </div>
                </div>
            </div>

            <div id="impact" className="grid grid-cols-3">
                <div className="col-span-1 relative bg-[#364F65] mx-8 rounded-md flex items-center justify-center overflow-hidden group">
                    <h2 className="text-white text-3xl font-semibold z-10">
                        IMPACT
                    </h2>
                    <div className="absolute inset-0 bg-blue-300 transition-transform duration-500 transform translate-y-full group-hover:translate-y-0"></div>
                </div>

                <div className="col-span-2">
                    <div className="grid grid-cols-3">
                        <div
                            id="impactText"
                            className="col-span-2 bg-white p-4 text-[#003588] text-lg"
                        >
                            <p>
                                By tackling the problems of drug misuse and
                                trafficking head-on, SafeNet hopes to have a
                                significant social impact. We enable people to
                                participate in the war on drugs without worrying
                                about facing consequences by providing a forum
                                that promotes cooperation and engagement.
                                SafeNet provides useful intelligence to law
                                enforcement, but it also educates the public,
                                increases awareness, and fosters a proactive
                                community participation culture. With increased
                                platform usage, we anticipate a discernible
                                decline in drug trafficking operations, leading
                                to safer and healthier communities.
                            </p>
                        </div>

                        <div className="col-span-1 bg-white p-4"></div>
                    </div>
                </div>
            </div>

            <div className="my-8 grid grid-cols-3">
                <div className="col-span-1 bg-white p-4"></div>

                <div className="col-span-2">
                    <div className="grid grid-cols-3 overflow-hidden">
                        <div
                            id="impactDownImg"
                            className="col-span-2 bg-green-200 text-transparent p-10"
                            style={{
                                backgroundSize: "cover",
                                backgroundPosition: "center",
                            }}
                        >
                            <p>
                                SafeNet envisions creating a profound impact on
                                society by addressing the challenges of drug
                                trafficking and abuse head-on. By offering a
                                platform that encourages participation and
                                cooperation, we empower individuals to
                                contribute to the fight against drugs without
                                fear of retaliation. SafeNet not only aids law
                                enforcement by providing valuable intelligence
                                but also educates the public, raises awareness,
                                and promotes a culture of proactive community
                                engagement. As more people engage with the
                                platform, we expect a noticeable reduction in
                                drug trafficking activities, creating safer
                                neighborhoods and healthier communities. SafeNet
                                envisions creating a profound impact on society
                                by addressing the challenges of drug trafficking
                                and abuse head-on. By offering a platform tha
                            </p>
                        </div>

                        <div className="col-span-1 bg-blue-200 p-4"></div>
                    </div>
                </div>
            </div>

            <div id="challenges" className="grid grid-cols-3">
                <div className="col-span-1 relative bg-[#364F65] mx-8 rounded-md flex items-center justify-center overflow-hidden group">
                    <h2 className="text-white text-3xl font-semibold z-10">
                        CHALLENGES
                    </h2>
                    <div className="absolute inset-0 bg-blue-300 transition-transform duration-500 transform translate-y-full group-hover:translate-y-0"></div>
                </div>

                <div className="col-span-2">
                    <div className="grid grid-cols-3">
                        <div
                            id="challengesText"
                            className="col-span-2 p-4 text-[#003588] text-lg"
                        >
                            <p>
                                Fighting drug trafficking has several obstacles,
                                despite its potential. It is vital to protect
                                consumers' privacy while preserving the
                                reliability and value of reports. To remain
                                ahead of new threats and safeguard the
                                platform's integrity, SafeNet changes its
                                security protocols on a regular basis.
                                Furthermore, it might be difficult to promote
                                courteous and fruitful dialogue on community
                                forums, particularly when delicate subjects are
                                involved. SafeNet tackles this issue by hiring
                                experienced moderators and offering explicit
                                involvement standards. In order to keep the
                                platform a useful weapon in the continuous war
                                on drugs, we are also dedicated to sustaining
                                user involvement over time through frequent
                                updates to instructional materials and community
                                tools.
                            </p>
                        </div>

                        <div className="col-span-1 bg-white p-4"></div>
                    </div>
                </div>
            </div>
        </div>
    );
}
