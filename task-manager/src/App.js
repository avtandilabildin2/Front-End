import React, { useState } from 'react';
import TaskList from './components/TaskList';
import AddTask from './components/AddTask';

function App() {
    const [tasks, setTasks] = useState([]);

    const handleAddTask = (text) => {
        const newTask = { id: Date.now(), text };
        setTasks([...tasks, newTask]);
    };

    const handleDeleteTask = (id) => {
        setTasks(tasks.filter((task) => task.id !== id));
    };

    return (
        <div className="App">
            <h1>Task Manager</h1>
            <AddTask onAdd={handleAddTask} />
            <TaskList tasks={tasks} onDelete={handleDeleteTask} />
        </div>
    );
}

export default App;
