import React from 'react';

const Button = ({ onClick, text }) => {
    return (
        <button onClick={onClick} style={{ padding: '10px 20px', cursor: 'pointer', backgroundColor: '#007bff', color: 'white', border: 'none', borderRadius: '5px' }}>
            {text}
        </button>
    );
};

export default Button;
