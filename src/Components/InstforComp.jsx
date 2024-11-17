export default function InstforComp({ onCheckboxChange }) {
    return (
        <div className="relative bg-[#E0F7FF] px-12 py-10 mt-5 text-justify rounded-3xl">
            <h1 className="before:content-[''] before:absolute before:top-0 before:right-24 before:h-12 before:w-12 before:bg-transparent before:rounded-tr-3xl before:shadow-[16px_-16px_0_0_#fff]"></h1>
            <div className="absolute top-0 right-0 py-12 px-12 bg-white rounded-bl-2xl"></div>
            <h1 className="before:content-[''] before:absolute before:top-24 before:right-0 before:h-12 before:w-12 before:bg-transparent before:rounded-tr-3xl before:shadow-[16px_-16px_0_0_#fff]"></h1>

            <div>
                <div className="mb-4 flex text-[3rem] font-semibold tracking-tight">
                    <h1 className="whitespace-pre text-[#003588]">
                        Instructions for{" "}
                    </h1>
                    <h1 className="text-[#266AFB]">Anonymous Complaint</h1>
                </div>
                <p className="text-[#003588]">
                    Welcome to our Anonymous Complaint Section, designed to
                    empower individuals to report illegal activities such as
                    drug trafficking or other criminal behaviors without fear of
                    exposure.
                </p>
                <br />
                <p className="text-[#003588]">
                    <strong>Purpose:</strong> This platform allows you to
                    anonymously share vital information that can help
                    authorities in their efforts to stop criminal activity. Your
                    identity will remain completely confidential, and we will
                    never ask for personal details unless you choose to provide
                    them.
                </p>
                <br />
                <p className="text-[#003588]">
                    <strong>How to Use:</strong>
                    <ol>
                        <li>
                            Describe the Incident: Please provide as much detail
                            as possible, including the nature of the activity,
                            the location, and any persons involved.
                        </li>
                        <li>
                            Submit Evidence (Optional): If you have any
                            supporting documents, photos, or videos, you may
                            upload them, but this is not mandatory.
                        </li>
                        <li>
                            Stay Safe: If you're reporting an ongoing incident,
                            do not intervene. Your safety is our priority.
                        </li>
                        <li>
                            Remain Anonymous: We will not collect any
                            information that could identify you, ensuring
                            complete anonymity.
                        </li>
                    </ol>
                    <br />
                    Once submitted, your report will be reviewed by the
                    appropriate authorities. Every report matters, and your
                    courage to step forward can make a significant difference.
                    Thank you for your help in keeping our communities safe!
                </p>
                <br />
                <label className="flex items-center space-x-2 text-[#003588]">
                    <input
                        type="checkbox"
                        onChange={onCheckboxChange}
                        className="form-checkbox h-4 w-4 text-[#266AFB] border-gray-300 shadow-md"
                    />
                    <span>
                        I have read the instructions carefully and am ready to
                        submit a complaint.
                    </span>
                </label>
            </div>
        </div>
    );
}
