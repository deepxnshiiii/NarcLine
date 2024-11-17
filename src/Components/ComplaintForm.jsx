import React, { useState } from "react";

export default function ComplaintForm() {
    const [complaint, setComplaint] = useState({
        date: "",
        time: "",
        location: "",
        description: "",
        personsInvolved: "",
        vehicleInfo: "",
        suspectedSubstance: "",
        typeOfCrime: "",
        captcha: "",
        evidence: null,
        audioFile: null,
        acknowledgement: false,
    });

    const [submissionCode, setSubmissionCode] = useState("");

    const handleChange = (e) => {
        const { name, value } = e.target;
        setComplaint({ ...complaint, [name]: value });
    };

    const handleFileUpload = (e) => {
        const { name, files } = e.target;
        setComplaint({ ...complaint, [name]: files[0] });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const generatedCode = `ANON-${Math.floor(Math.random() * 100000)}`;
        setSubmissionCode(generatedCode);
    };

    return (
        <div className="text-[#003588]">
            <div className="complaint-form mt-12">
                <h2 className="text-[3rem] font-semibold tracking-tight">
                    Anonymous Complaint Section
                </h2>
                <p>
                    Please provide as much detail as possible. Your identity
                    will remain confidential.
                </p>

                <form
                    onSubmit={handleSubmit}
                    className="flex flex-col space-y-4"
                >
                    {/* Date and Time */}
                    <label>Date of Incident:</label>
                    <input
                        type="date"
                        name="date"
                        value={complaint.date}
                        onChange={handleChange}
                        required
                        className="p-2 border border-gray-300 rounded-lg"
                    />

                    <label>Time of Incident (if known):</label>
                    <input
                        type="time"
                        name="time"
                        value={complaint.time}
                        onChange={handleChange}
                        className="p-2 border border-gray-300 rounded-lg"
                    />

                    {/* Location */}
                    <label>Location of Incident:</label>
                    <input
                        type="text"
                        name="location"
                        value={complaint.location}
                        onChange={handleChange}
                        required
                        className="p-2 border border-gray-300 rounded-lg"
                    />

                    {/* Description */}
                    <label>Description of Incident:</label>
                    <textarea
                        name="description"
                        value={complaint.description}
                        onChange={handleChange}
                        rows="4"
                        required
                        className="p-2 border border-gray-300 rounded-lg"
                    ></textarea>

                    {/* Persons Involved */}
                    <label>Persons Involved (if known):</label>
                    <input
                        type="text"
                        name="personsInvolved"
                        value={complaint.personsInvolved}
                        onChange={handleChange}
                        className="p-2 border border-gray-300 rounded-lg"
                    />

                    {/* Vehicle Info */}
                    <label>
                        Vehicle Information (License Plate, Color, etc.):
                    </label>
                    <input
                        type="text"
                        name="vehicleInfo"
                        value={complaint.vehicleInfo}
                        onChange={handleChange}
                        className="p-2 border border-gray-300 rounded-lg"
                    />

                    {/* Suspected Substance */}
                    <label>Suspected Substances (if any):</label>
                    <input
                        type="text"
                        name="suspectedSubstance"
                        value={complaint.suspectedSubstance}
                        onChange={handleChange}
                        className="p-2 border border-gray-300 rounded-lg"
                    />

                    {/* File Upload */}
                    <label>Upload Supporting Evidence (Optional):</label>
                    <input
                        type="file"
                        name="evidence"
                        onChange={handleFileUpload}
                        accept="image/*,video/*,application/pdf"
                        className="p-2 border border-gray-300 rounded-lg"
                    />

                    {/* Audio Upload */}
                    <label>Upload Audio Evidence (Optional):</label>
                    <input
                        type="file"
                        name="audioFile"
                        onChange={handleFileUpload}
                        accept="audio/*"
                        className="p-2 border border-gray-300 rounded-lg"
                    />

                    {/* CAPTCHA */}
                    <label>Enter CAPTCHA:</label>
                    <input
                        type="text"
                        name="captcha"
                        value={complaint.captcha}
                        onChange={handleChange}
                        placeholder="Enter captcha here"
                        required
                        className="p-2 border border-gray-300 rounded-lg"
                    />

                    {/* Acknowledgment Checkbox */}
                    <label className="flex items-center space-x-2">
                        <input
                            type="checkbox"
                            name="acknowledgement"
                            checked={complaint.acknowledgement}
                            onChange={() =>
                                setComplaint({
                                    ...complaint,
                                    acknowledgement: !complaint.acknowledgement,
                                })
                            }
                            required
                            className="form-checkbox"
                        />
                        <span>
                            I acknowledge that this report is made anonymously.
                        </span>
                    </label>

                    {/* Submit Button */}
                    <button
                        type="submit"
                        className="px-4 py-2 bg-[#166534] text-white rounded-lg hover:bg-blue-700"
                    >
                        Submit Complaint
                    </button>
                </form>

                {/* Confirmation */}
                {submissionCode && (
                    <div className="confirmation mt-6 p-4 bg-green-100 border border-green-400 rounded-lg">
                        <h3 className="text-xl font-bold">
                            Thank you for your report!
                        </h3>
                        <p>
                            Your anonymous report code is:{" "}
                            <strong>{submissionCode}</strong>
                        </p>
                        <p>
                            Use this code to track your report or add additional
                            information later.
                        </p>
                    </div>
                )}
            </div>
        </div>
    );
}
