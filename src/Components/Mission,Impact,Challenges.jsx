import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { depressedWoman, womenHandHoldingPills } from "../assets";

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
            backgroundImage: `url(${depressedWoman})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            duration: 0,
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
            backgroundImage: `url(${womenHandHoldingPills})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            duration: 0,
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
                                The main focus at NarcLine is to help
                                individuals It is essential for both individuals
                                and entire communities to mobilize and take
                                action. against drug trafficking and abuse. Our
                                objective is the concept of having a safe and
                                private space that becomes a platform for People
                                can file reports on drug abuse. We I would want
                                to raise a culture of people who are empowered
                                to take decisive action in the fight against the
                                pervasive drug epidemic by elevating awareness
                                and understanding. This includes raising
                                awareness for the cause, educating the public,
                                and mobilizing people. for the community at
                                large. NarcLine focuses on the work of building
                                and developing a drug-free and safer
                                neighborhood by uniting Individuals, law
                                enforcement, and the communities. organizations.
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
                                NarcLine envisions creating a profound impact on
                                society by addressing the challenges of drug
                                trafficking and abuse head-on. By offering a
                                platform that encourages participation and
                                cooperation, we empower individuals to
                                contribute to the fight against drugs without
                                fear of retaliation. NarcLine not only aids law
                                enforcement by providing valuable intelligence
                                but also educates the public, raises awareness,
                                and promotes a culture of proactive community
                                engagement. As more people engage with the
                                platform, we expect a noticeable reduction in
                                drug trafficking activities, creating safer
                                neighborhoods and healthier communities.
                                NarcLine envisions creating a profound impact on
                                society by addressing the challenges of drug
                                trafficking and abuse head-on. By offering a
                                platform tha
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
                                By discussing and challenging the various
                                problems that are associated with drug abuse and
                                Head on trafficking, NarcLine hopes to have a In
                                terms of social significance, we assist
                                individuals to Constantly enjoin people to join
                                this fight against this drug crisis without
                                having to worry or be anxious. Such motives are
                                for providing a forum so that users may face
                                consequences. It supports mutual cooperation and
                                interaction. NarcLine offers actionable and
                                strategic intelligence for law enforcement
                                agencies. It's enforcement, but it also educates
                                the public,. raising awareness and making it
                                proactive community participation culture. Along
                                with the emerging Platform usage, we expect to
                                realize a definite A decline in drug trafficking
                                operations - Resulting into safer and healthy
                                communities.
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
                                NarcLine envisions creating a profound impact on
                                society by addressing the challenges of drug
                                trafficking and abuse head-on. By offering a
                                platform that encourages participation and
                                cooperation, we empower individuals to
                                contribute to the fight against drugs without
                                fear of retaliation. NarcLine not only aids law
                                enforcement by providing valuable intelligence
                                but also educates the public, raises awareness,
                                and promotes a culture of proactive community
                                engagement. As more people engage with the
                                platform, we expect a noticeable reduction in
                                drug trafficking activities, creating safer
                                neighborhoods and healthier communities.
                                NarcLine envisions creating a profound impact on
                                society by addressing the challenges of drug
                                trafficking and abuse head-on. By offering a
                                platform tha
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
                                Several challenges characterize battling drug
                                trafficking. despite its potential. It is
                                crucial to preserve while keeping privacies of
                                consumers. reliability and worth of reports. To
                                stay Anticipates Emerging in dangers and
                                preserves the platform's integrity. NarcLine
                                changes its conduct security protocols at least
                                periodically. Also, it will be tough to sell
                                respectful and productive discussion on
                                community: forums, particularly when sensitive
                                subjects are This problem is solved by NarcLine.
                                by recruiting experienced moderators and
                                providing overt involvement standards. In order
                                to keep the A friendly weapon in the war that
                                never ends On narcotics, we also work to keep
                                User participation in time with high frequency
                                Updates of the instructional materials and
                                community tools.
                            </p>
                        </div>

                        <div className="col-span-1 bg-white p-4"></div>
                    </div>
                </div>
            </div>
        </div>
    );
}
