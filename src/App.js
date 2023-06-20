import React from 'react';
import TaskList from './components/TaskList.js';
import './App.css';
import { useState } from 'react';


const TASKS = [
  {
    id: 1,
    title: 'Mow the lawn',
    isComplete: false,
  },
  {
    id: 2,
    title: 'Cook Pasta',
    isComplete: true,
  },
];

const App = () => {
  const [task, setTasks] = useState(TASKS);

  const togglePresent = (id) => {
    const tasks = task.map((task) => {
      if (task.id === id) {
        return {
          ...task,
          isComplete: !task.isComplete,
        };
      } else {
        return task;
      }
    });
    setTasks(tasks);
  };


  return (
    <div className="App">
      <header className="App-header">
        <h1>Ada&apos;s Task List</h1>
      </header>
      <main>
        <div>{<TaskList tasks={task} updateTaskComplete={togglePresent}/>}</div>
      </main>
    </div>
  );
};

export default App;
