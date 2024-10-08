import Hero from "../Components/Hero";
import WhoWeAre from "../Components/WhoWeAre";
import WhatWeDo from "../Components/WhatWeDo";
import WhyChooseUs from "../Components/WhyChooseUs";
import Team from "../Components/Team";
import HowWeWork from "../Components/HowWeWork";
import JoinComm from "../Components/JoinComm";

export default function Home() {
    return (
        <>
            <div className="px-16">
                <Hero />
                <WhoWeAre />
                <WhatWeDo />
                <JoinComm />
            </div>
            <WhyChooseUs />
            <Team />
            <HowWeWork />
        </>
    );
}
