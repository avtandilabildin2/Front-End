import React, { useState } from 'react';
import './App.css';

function App() {
    const [tasks, setTasks] = useState([]);
    const [taskText, setTaskText] = useState('');

    const handleAddTask = () => {
        if (taskText.trim()) {
            const newTask = { id: Date.now(), text: taskText };
            setTasks([...tasks, newTask]);
            setTaskText('');
        }
    };

    const handleDeleteTask = (id) => {
        setTasks(tasks.filter((task) => task.id !== id));
    };

    return (
        <div className="App">
            <h1>Task Manager</h1>
            <div>
                <input
                    type="text"
                    value={taskText}
                    onChange={(e) => setTaskText(e.target.value)}
                    placeholder="Add new task"
                />
                <button onClick={handleAddTask}>Add Task</button>
            </div>
            <div>
                <h3>Tasks:</h3>
                <ul>
                    {tasks.map((task) => (
                        <li key={task.id}>
                            {task.text}
                            <button onClick={() => handleDeleteTask(task.id)}>Delete</button>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
}

export default App;
