import React from 'react';
import TaskList from './components/TaskList.js';
import './App.css';
import { useState } from 'react';


const data = [
  {
    id: 1,
    title: 'Mow the lawn',
    isComplete: false,
  },
  {
    id: 2,
    title: 'Cook Pasta',
    isComplete: false,
  },
  {
    id: 3,
    title: 'Do the laundry',
    isComplete: false,
  },
];

const App = () => {
  const [tasks, setTasks] = useState(data);

  const togglePresent = (id) => {
    const newTasks = tasks.map((task) => {
      if (task.id === id) {
        return {
          ...task,
          isComplete: !task.isComplete,
        };
      } else {
        return task;
      }
    });
    setTasks(newTasks);
  };
  
  const deleteTasks = (id) => {
    const newTasks = [];
    for (let task of tasks) {
      if (task.id !== id) {
        newTasks.push(task);
      }
    }
    setTasks(newTasks);
  };


  return (
    <div className="App">
      <header className="App-header">
        <h1>Ada&apos;s Task List</h1>
      </header>
      <main>
        <div>{<TaskList
          tasks={tasks}
          updateTaskComplete={togglePresent}
          deleteTasks={deleteTasks} />}</div>
      </main>
    </div>
  );
};

export default App;
