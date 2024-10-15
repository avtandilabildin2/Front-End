import React, { useState } from 'react';

const PersonInfo = () => {
    const [position, setPosition] = useState("Junior Developer");
    const [message, setMessage] = useState("");

    const handlePromote = () => {
        setMessage("Congratulations! You got promoted!");
        setPosition("Senior Developer");
    };

    return (
        <div style={{ textAlign: 'center', marginTop: '50px' }}>
            <h1>Employee Details</h1>
            <p><strong>Name:</strong> John Doe</p>
            <p><strong>Position:</strong> {position}</p>
            <p><strong>Company:</strong> TechCorp</p>
            <p><strong>Location:</strong> New York, USA</p>
            <p><strong>Years of Experience:</strong> 2</p>

            {message && <div style={{ color: 'green', margin: '10px 0' }}>{message}</div>}

            <button onClick={handlePromote}>
                Повысить в должности
            </button>
        </div>
    );
};

export default PersonInfo;