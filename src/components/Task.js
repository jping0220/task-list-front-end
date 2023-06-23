/* eslint-disable camelcase */
import React from 'react';
import PropTypes from 'prop-types';
import './Task.css';

const Task = ({ id, title, is_complete, updateTaskComplete, deleteTasks,toggleIncompleteTask}) => {
  // const [complete, setComplete] = useState(is_complete);
  // const updateTaskStatus = () => {
  //   updateTaskComplete(id);
  // };
  const buttonClass = is_complete ? 'tasks__item__toggle--completed' : '';
  const newEventHandler = () => {
    if (is_complete) {
      toggleIncompleteTask(id);
    } else {
      updateTaskComplete(id);
    }
  };
 

  return (
    <li className="tasks__item">
      <button
        className={`tasks__item__toggle ${buttonClass}`}
        onClick={newEventHandler}
      >
        {title}
      </button>
      <button className="tasks__item__remove button"
        onClick={() => { deleteTasks(id);}}>x</button>
    </li>
  );
};

Task.propTypes = {
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  is_complete: PropTypes.bool.isRequired,
  updateTaskComplete: PropTypes.func.isRequired,
  deleteTasks: PropTypes.func.isRequired,
  toggleIncompleteTask:PropTypes.func.isRequired
};

export default Task;
