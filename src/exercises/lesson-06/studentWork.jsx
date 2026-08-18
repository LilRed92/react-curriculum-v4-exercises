import { useState } from 'react';
import UserProfile from './components/UserProfile.jsx';
import TaskFilters from './components/TaskFilters.jsx';
import TaskItem from './components/TaskItem.jsx';
import filterTasks from './utils/filterTasks.js';
import useTasks from './hooks/useTasks.js';

export default function StudentWork() {
  const { tasks, loading } = useTasks();
  const [filter, setFilter] = useState('all');

  const visibleTasks = filterTasks(tasks, filter);

  if (loading) {
    return <p>Loading tasks...</p>;
  }

  return (
    <div>
      <UserProfile name="Student" />

      <TaskFilters activeFilter={filter} onFilterChange={setFilter} />

      <ul>
        {visibleTasks.map((task) => (
          <TaskItem
            key={task.id}
            title={task.title}
            completed={task.completed}
          />
        ))}
      </ul>
    </div>
  );
}
