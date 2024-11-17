import ServiceHero from "../Components/ServiceHero";
import ServicesCard from "../Components/ServicesCard";
import JoinComm from "../Components/JoinComm";

export default function Services() {
    return (
        <div className="px-16">
            <ServiceHero />
            <ServicesCard />
            <JoinComm />
        </div>
    );
}
