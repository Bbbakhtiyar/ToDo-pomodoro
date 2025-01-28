import React from 'react';
import TaskItem from './TaskItem';

const TaskList = ({ tasks, onDelete, onToggleStatus, onEdit }) => {
  return (
    <ul>
      {tasks.map(task => (
        <li key={task.id}>
          <TaskItem 
            task={task}
            onDelete={onDelete}
            onToggleStatus={onToggleStatus}
            onEdit={onEdit}
          />
        </li>
      ))}
    </ul>
  );
};

export default TaskList;