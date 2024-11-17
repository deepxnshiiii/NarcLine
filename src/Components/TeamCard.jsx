import { useGSAP } from "@gsap/react";
import gsap from "gsap";

export default function TeamCard() {
    const data = [
        { name: "Dr. Nisha Verma", post: "Founder and Director" },
        { name: "Dr. Priya Kapoor", post: "Addiction Specialist" },
        { name: "Dr. Rajiv Menon", post: "Lead Pharmacist" },
        { name: "Dr. Sneha Reddy", post: "Clinical Psychologist" },
        { name: "Dr. Anil Mehta", post: "Health and Wellness Advisor" },
        { name: "Dr. Raghav Sharma", post: "Operation Manager" },
        { name: "Dr. Ananya Mehta", post: "Community Outreach Coordinator" },
        { name: "Dr. Vikram Singh", post: "Security & Data Protection Lead" },
        { name: "Dr. Priyanka Rao", post: "Content & Education Specialist" },
    ];

    const doubledData = [...data, ...data];

    useGSAP(() => {
        gsap.from("#marqueeTeam", {
            duration: 30,
            translateX: 0,
            repeat: -1,
            ease: "none",
        });
    });

    return (
        <div className="my-4 overflow-x-hidden">
            <div
                id="marqueeTeam"
                className="grid grid-flow-col auto-cols-[20rem] justify-items-stretch gap-16 -translate-x-[228%]"
            >
                {doubledData.map((elem, index) => (
                    <div
                        key={index}
                        className="relative bg-[url('https://img.freepik.com/free-photo/portrait-doctor_144627-39388.jpg?t=st=1726420982~exp=1726424582~hmac=54290ff444be67f6e9edf6b2be1db58d43efd663fa9c52a2aa7a3b87e6400134&w=360')] rounded-3xl h-[27rem] w-[20rem] flex flex-col items-center overflow-hidden filter grayscale hover:grayscale-0 transition-all duration-300"
                        style={{
                            backgroundSize: "cover",
                            backgroundPosition: "center",
                        }}
                    >
                        <div className="absolute bottom-0 w-full h-full bg-gradient-to-b from-transparent via-transparent to-[#111412] hover:from-transparent hover:via-transparent hover:to-[#003588] transition-all duration-300" />
                        <div className="absolute bottom-5 text-white text-center pointer-events-none">
                            <h3 className="text-3xl font-semibold">
                                {elem.name}
                            </h3>
                            <p className="font-medium">{elem.post}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
