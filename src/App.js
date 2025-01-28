import React, { useState } from 'react';
import TaskList from './components/TaskList';
import TaskForm from './components/TaskForm';
import Filter from './components/Filter';
import { useTasks } from './context/TaskContext'; // Подключаем контекст
import PomodoroTimer from './components/PomodoroTimer';

const App = () => {
  const { tasks, addTask, deleteTask, toggleTaskStatus, editTask, setFilter } = useTasks();
  const [filter, setFilterState] = useState('all');

  const handleFilterChange = (filter) => {
    setFilterState(filter);
    setFilter(filter);
  };

  return (
    <div className="App">
      <h1>Task Manager</h1>
      <TaskForm addTask={addTask} />
      <Filter onFilterChange={handleFilterChange} />
      <TaskList tasks={tasks} onDelete={deleteTask} onToggleStatus={toggleTaskStatus} onEdit={editTask} />
      <PomodoroTimer />
    </div>
  );
};

export default App;