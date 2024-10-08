import Card from "./Card";

export default function WhatWeDo() {
    return (
        <div className="mt-16">
            <div className="flex flex-col justify-center items-center">
                <div>
                    <h3 className="inline-block px-3 mt-5 rounded-full bg-gradient-to-r from-[#BAECFE] to-white text-lg text-[#003588] font-semibold">
                        What we do
                    </h3>
                    <div className="flex text-[3rem] font-semibold tracking-tight">
                        <h1 className="whitespace-pre text-[#003588]">
                            Discover our{" "}
                        </h1>
                        <h1 className="text-[#266AFB]">Services</h1>
                    </div>
                </div>
            </div>
            <Card />
        </div>
    );
}
