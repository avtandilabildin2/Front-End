import React from 'react';

const PromotionMessage = ({ message }) => {
    if (!message) return null; // Не показывать компонент, если нет сообщения
    return (
        <div style={{ color: 'green', margin: '10px 0' }}>
            {message}
        </div>
    );
};

export default PromotionMessage;
