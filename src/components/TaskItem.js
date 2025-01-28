import React, { useState } from 'react';

const TaskItem = ({ task, onDelete, onToggleStatus, onEdit }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [newName, setNewName] = useState(task.name);
  const [newDescription, setNewDescription] = useState(task.description);
  const [newDeadline, setNewDeadline] = useState(task.deadline);

  const handleSaveEdit = () => {
    onEdit(task.id, newName, newDescription, newDeadline);
    setIsEditing(false);
  };

  return (
    <div className="task-item">
      {isEditing ? (
        <>
          <input 
            type="text" 
            value={newName} 
            onChange={(e) => setNewName(e.target.value)} 
          />
          <input 
            type="text" 
            value={newDescription} 
            onChange={(e) => setNewDescription(e.target.value)} 
          />
          <input 
            type="datetime-local" 
            value={newDeadline} 
            onChange={(e) => setNewDeadline(e.target.value)} 
          />
          <button onClick={handleSaveEdit}>Save</button>
        </>
      ) : (
        <>
          <h3>{task.name}</h3>
          <p>{task.description}</p>
          <p>{task.deadline}</p>
        </>
      )}
      <button onClick={() => onToggleStatus(task.id)}>
        {task.status === 'inProgress' ? 'Mark as Done' : 'Mark as In Progress'}
      </button>
      <button onClick={() => onDelete(task.id)}>Delete</button>
      {!isEditing && <button onClick={() => setIsEditing(true)}>Edit</button>}
    </div>
  );
};

export default TaskItem;