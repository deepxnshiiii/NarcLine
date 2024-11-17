import { doctor_guidance } from "../assets";

export default function OurValue() {
    return (
        <div className="relative mx-28 mt-16 flex gap-16">
            <div className="w-3/5 flex items-stretch">
                <img
                    src={doctor_guidance}
                    alt=""
                    className="rounded-3xl w-full object-cover"
                    style={{ height: "100%" }}
                />
            </div>
            <div>
                <div className="flex text-[3rem] font-semibold tracking-tight">
                    <h1 className="whitespace-pre text-[#003588]">Our </h1>
                    <h1 className="text-[#266AFB]">Values</h1>
                </div>
                <div className="w-[35rem] text-justify text-[#003588] text-lg flex flex-col gap-6">
                    <p className="">
                        Our values shape every action we take at NarcLine. We
                        are committed to building a safer world through Trust,
                        Innovation, Integrity, and Collaboration.
                    </p>
                    <ul className="list-disc flex flex-col gap-4">
                        <li>
                            We prioritize privacy and security to protect the
                            identities of those reporting sensitive information.
                        </li>
                        <li>
                            We promote transparency in every step of the
                            reporting and analysis process.
                        </li>
                        <li>
                            We believe in community-driven change by fostering
                            engagement and dialogue for collective action.
                        </li>
                        <li>
                            We are committed to continuous improvement, staying
                            ahead of challenges through innovation and advanced
                            technology.
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
}
