import TeamCard from "./TeamCard";

export default function Team() {
    return (
        <div className="mt-16">
            <div className="flex text-[3rem] font-semibold tracking-tight px-16 mb-8">
                <h1 className="whitespace-pre text-[#003588]">Meet our Dedicated </h1>
                <h1 className="text-[#266AFB]">Team</h1>
            </div>
            <TeamCard />
        </div>
    );
}
