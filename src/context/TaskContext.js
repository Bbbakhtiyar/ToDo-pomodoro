import React, { createContext, useState, useContext } from 'react';

const TaskContext = createContext();

export const useTasks = () => useContext(TaskContext);

export const TaskProvider = ({ children }) => {
  const [tasks, setTasks] = useState([]);

  const addTask = (task) => {
    setTasks([...tasks, task]);
  };

  const deleteTask = (taskId) => {
    setTasks(tasks.filter(task => task.id !== taskId));
  };

  const toggleTaskStatus = (taskId) => {
    setTasks(tasks.map(task =>
      task.id === taskId ? { ...task, status: task.status === 'inProgress' ? 'done' : 'inProgress' } : task
    ));
  };

  return (
    <TaskContext.Provider value={{ tasks, addTask, deleteTask, toggleTaskStatus }}>
      {children}
    </TaskContext.Provider>
  );
};