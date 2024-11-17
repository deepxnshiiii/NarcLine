export default function JoinComm() {
    return (
        <div className="relative">
            <h1 className="before:content-[''] before:absolute before:top-0 before:left-24 before:h-12 before:w-12 before:bg-transparent before:rounded-tl-3xl before:shadow-[0_-22px_0_0_#fff]"></h1>
            <div className="absolute py-12 px-12 bg-white rounded-br-3xl"></div>
            <h1 className="before:content-[''] before:absolute before:top-24 before:left-0 before:h-12 before:w-12 before:bg-transparent before:rounded-tl-3xl before:shadow-[0_-22px_0_0_#fff]"></h1>

            <div className="mt-20 py-10 flex flex-col items-center bg-[#E0F7FF] rounded-3xl">
                <h3 className="text-[2.5rem] text-[#003588] font-semibold">
                    Join our Community of Care
                </h3>
                <p className="mt-2 w-[40rem] text-[#003588] text-center">
                    At NarcLine, we're here to provide compassionate and
                    personalized care to you or your loved ones.
                </p>
                <button className="mt-8 px-5 py-3 text-white font-medium bg-[#003588] rounded-full">
                    Get Started
                </button>
            </div>

            <h1 className="before:content-[''] before:absolute before:bottom-0 before:right-24 before:h-12 before:w-12 before:bg-transparent before:rounded-br-3xl before:shadow-[0_22px_0_0_#FFF]"></h1>
            <div className="absolute bottom-0 right-0 py-12 px-12 bg-white rounded-tl-2xl"></div>
            <h1 className="before:content-[''] before:absolute before:bottom-24 before:right-0 before:h-12 before:w-12 before:bg-transparent before:rounded-br-3xl before:shadow-[0_22px_0_0_#FFF]"></h1>
        </div>
    );
}
