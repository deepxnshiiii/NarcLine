import JoinComm from "../Components/JoinComm";
import OurValue from "../Components/OurValue";
import Team from "../Components/Team";
import MissionImpactChallenges from "../Components/Mission,Impact,Challenges";

export default function About() {
    return (
        <div>
            <div className="px-16">
                <OurValue />
            </div>
            <MissionImpactChallenges />
            <div className="px-16">
                <JoinComm />
            </div>
            <Team />
        </div>
    );
}
