import React from 'react';
import TaskItem from './TaskItem';

function TaskList({ tasks, onDelete }) {
    return (
        <div>
            <h3>Task List</h3>
            <ul>
                {tasks.map((task) => (
                    <TaskItem key={task.id} task={task} onDelete={onDelete} />
                ))}
            </ul>
        </div>
    );
}

export default TaskList;
