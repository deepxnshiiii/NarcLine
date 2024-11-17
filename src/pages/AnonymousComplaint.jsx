import React, { useEffect, useRef, useState } from "react";
import ComplaintForm from "../Components/ComplaintForm";
import InstforComp from "../Components/InstforComp";

export default function AnonymousComplaint() {
    const [showForm, setShowForm] = useState(false);
    const targetRef = useRef(null);

    useEffect(() => {
        if (showForm && targetRef.current) {
            targetRef.current.scrollIntoView({
                behavior: "smooth",
                block: "start",
            });
        }
    }, [showForm]);

    const handleCheckboxChange = (e) => {
        setShowForm(e.target.checked);
    };

    return (
        <div>
            <div className="px-16">
                <InstforComp onCheckboxChange={handleCheckboxChange} />
                {showForm && (
                    <div ref={targetRef}>
                        <ComplaintForm />
                    </div>
                )}
            </div>
        </div>
    );
}
