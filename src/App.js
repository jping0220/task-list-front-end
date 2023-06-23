/* eslint-disable camelcase */
import React from 'react';
import TaskList from './components/TaskList.js';
import NewTaskForm from './components/NewTaskForm.js';
import './App.css';
import { useState, useEffect } from 'react';
import axios from 'axios';


// const data = [
//   {
//     id: 1,
//     title: 'Mow the lawn',
//     isComplete: false,
//   },
//   {
//     id: 2,
//     title: 'Cook Pasta',
//     isComplete: false,
//   },
//   {
//     id: 3,
//     title: 'Do the laundry',
//     isComplete: false,
//   },
// ];

const App = () => {
  const [tasks, setTasks] = useState([]);
  const API = 'https://task-list-api-c17.onrender.com/'; 

  useEffect(() => {
    axios
      .get(`${ API }/tasks`)
      .then((response) => {
        setTasks(response.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  
  const addTask = (newTasks) => {
    axios
      .post(`${API}/tasks`, newTasks)
      .then((response) => {
        const newTasks = [...tasks, response.data];
        setTasks(newTasks);
      })
      .catch((err) => {
        console.log(err);
      });
  };

 
  const togglePresent = (id) => {
    axios
      .patch(`${API}/tasks/${id}/mark_complete`)
      .then(() => {
        const newTasks = tasks.map((task) => {
          if (task.id === id) {
            return { ...task, is_complete: true };
          } else {
            return task;
          }
        });
        setTasks(newTasks);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const toggleIncompleteTask = (id) => {
    axios
      .patch(`${API}/tasks/${id}/mark_incomplete`)
      .then(() => {
        const newTasks = tasks.map((task) => {
          if (task.id === id) {
            return { ...task, is_complete: false };
          }
          else {
            return task;
          }
        });
        setTasks(newTasks);
      })
      .catch((err) => {
        console.log(err);
      });
  };


  const deleteTasks = (id) => {
    axios
      .delete(`${API}/tasks/${id}`)
      .then(() => {
        const newTasks = tasks.filter((task) => task.id !== id);
        setTasks(newTasks);
      })
      .catch((err) => {
        console.log(err);
      });
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
          toggleIncompleteTask={toggleIncompleteTask}
          deleteTasks={deleteTasks} />}
        </div>
        <NewTaskForm addTask={addTask} />
      </main>
    </div>
  );
};

export default App;
