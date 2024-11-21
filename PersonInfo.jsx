import React, { useState } from 'react';
import PromotionMessage from './PromotionMessage';
import Button from './Button';

const PersonInfo = () => {
    const [position, setPosition] = useState("Junior Developer");
    const [message, setMessage] = useState("");

    const handlePromote = () => {
        setMessage("Congratulations! You got promoted!");
        setPosition("Senior Developer");
    };

    return (
        <div style={{ textAlign: 'center', marginTop: '20px' }}>
            <h2>Employee Details</h2>
            <p><strong>Name:</strong> John Doe</p>
            <p><strong>Position:</strong> {position}</p>
            <p><strong>Company:</strong> TechCorp</p>
            <p><strong>Location:</strong> New York, USA</p>
            <p><strong>Years of Experience:</strong> 2</p>

            <PromotionMessage message={message} />

            <Button onClick={handlePromote} text="Повысить в должности" />
        </div>
    );
};

export default PersonInfo;
