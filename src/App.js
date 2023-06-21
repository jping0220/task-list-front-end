import React from 'react';
import TaskList from './components/TaskList.js';
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
        // console.log(response.data);
        setTasks(response.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  

//   const getTasks = () => {
//     axios
//       .get(API)
//       .then((res) => {
//   const newTasks = res.data.map((tasks) => {
//     return {
//       id: tasks.id,
//       text: tasks.title,
//       done: tasks.isComplete,
//     };
//   });
//   setTasks(newTasks);
//       })
//       .catch ((err) => {
//         console.log(err);
// });
    
//   };
     
 

  const togglePresent = (id) => {
    axios
      .patch(`${API}/tasks/${id}/mark_complete`)
      .then(() => {
        const newTasks = tasks.map((task) => {
          if (task.id === id) {
            return { ...task, isComplete: true };
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
            return { ...task, isComplete: false };
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
          deleteTasks={deleteTasks} />}</div>
      </main>
    </div>
  );
};

export default App;
