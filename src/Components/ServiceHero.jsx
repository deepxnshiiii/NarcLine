import { doctor_guidance } from "../assets";

export default function ServiceHero() {
    return (
        <div
            className="relative bg-[#E0F7FF] bg-center h-[60vh] px-12 py-10 mt-5 mb-20 rounded-3xl flex items-center justify-between"
            style={{
                backgroundSize: "cover",
            }}
        >
            <div>
                <div className="leading-tight">
                    <h1 className="text-[3.3rem] font-semibold text-[#003588]">
                        Comprehensive anti-drug{" "}
                        <span className="block">
                            trafficking{" "}
                            <span className="text-[#266AFB]">solutions</span>
                        </span>
                    </h1>
                </div>
                <p className="pt-6 max-w-6xl text-[#003588]">
                    Explore a range of features designed to empower communities
                    in the fight against drug trafficking, offering educational
                    resources, anonymous reporting, and impactful outreach.
                </p>
            </div>
            <div className="relative">
                <h1 className="before:content-[''] before:absolute before:top-0 before:left-20 before:h-12 before:w-12 before:bg-transparent before:rounded-tl-3xl before:shadow-[0_-22px_0_0_#E0F7FF]"></h1>
                <div className="absolute top-0 left-0 py-10 px-10 bg-[#E0F7FF] rounded-br-2xl"></div>
                <h1 className="before:content-[''] before:absolute before:top-20 before:left-0 before:h-12 before:w-12 before:bg-transparent before:rounded-tl-3xl before:shadow-[0_-22px_0_0_#E0F7FF]"></h1>
                <img
                    src={doctor_guidance}
                    className="top-20 w-[60rem] h-[20rem] rounded-3xl"
                    style={{ objectFit: "cover" }}
                />
            </div>
        </div>
    );
}
