import React, { useState } from 'react';

function AddTask({ onAdd }) {
    const [taskText, setTaskText] = useState('');

    const handleSubmit = () => {
        if (taskText.trim()) {
            onAdd(taskText);
            setTaskText('');
        }
    };

    return (
        <div>
            <input
                type="text"
                value={taskText}
                onChange={(e) => setTaskText(e.target.value)}
                placeholder="Enter new task"
            />
            <button onClick={handleSubmit}>Add Task</button>
        </div>
    );
}

export default AddTask;
