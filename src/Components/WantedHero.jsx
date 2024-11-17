export default function WantedHero() {
    return (
        <div className="relative bg-[#E0F7FF] px-12 py-10 mt-5 mb-16 text-justify rounded-3xl">
            <h1 className="before:content-[''] before:absolute before:top-0 before:right-24 before:h-12 before:w-12 before:bg-transparent before:rounded-tr-3xl before:shadow-[16px_-16px_0_0_#fff]"></h1>
            <div className="absolute top-0 right-0 py-12 px-12 bg-white rounded-bl-2xl"></div>
            <h1 className="before:content-[''] before:absolute before:top-24 before:right-0 before:h-12 before:w-12 before:bg-transparent before:rounded-tr-3xl before:shadow-[16px_-16px_0_0_#fff]"></h1>

            <div>
                <div className="mb-4 flex text-[3rem] font-semibold tracking-tight">
                    <h1 className="whitespace-pre text-[#003588]">
                        Most Wanted:{" "}
                    </h1>
                    <h1 className="text-[#266AFB]">
                        Individuals Linked to Drug Trafficking
                    </h1>
                </div>
                <p className="text-[#003588]">
                    The following individuals are wanted by law enforcement
                    agencies with regards to their massive involvement in
                    various reported drug trafficking activities. The
                    authorities are actively looking for any and all information
                    regarding the whereabouts of these individuals with an aim
                    to apprehend them. By way of sharing details about these
                    particular people, we hope to engage and involve the
                    community in our collective mission of totally eradicating
                    drug trafficking and promoting safety and security for
                    everyone in the area.<br></br> If you have any information
                    you feel should be brought to our attention regarding any of
                    the individuals below, or regarding any other matters, you
                    can file a confidential tip anonymously through our
                    Anonymous Reporting section. Let's work together toward a
                    community that is safer, more secure, and better protected.
                    <br></br>
                    <br></br>
                    <strong>Safety Reminder:</strong>
                    <br></br>If you see any of these individuals, do not
                    approach them directly. Contact local authorities or use our
                    anonymous reporting tool to share any relevant information.
                    <br></br>
                    <br></br>
                    <strong>Disclaimer:</strong>
                    <br></br>All information provided on this page is for
                    public awareness purposes. Every individual listed is
                    presumed innocent until proven guilty in a court of law.
                    This page is updated periodically as new information becomes
                    available.
                </p>
            </div>
        </div>
    );
}
