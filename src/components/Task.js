import React from 'react';
import PropTypes from 'prop-types';

import './Task.css';

const Task = ({ id, title, isComplete, updateTaskComplete, deleteTasks}) => {
  // const [complete, setComplete] = useState(isComplete);
  // const updateTaskStatus = () => {
  //   updateTaskComplete(id);
  // };
  const buttonClass = isComplete ? 'tasks__item__toggle--completed' : '';

  return (
    <li className="tasks__item">
      <button
        className={`tasks__item__toggle ${buttonClass}`}
        onClick={() => updateTaskComplete(id)}
      >
        {title}
      </button>
      <button className="tasks__item__remove button"
        onClick={() => { deleteTasks(id); }}>x</button>
    </li>
  );
};

Task.propTypes = {
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  isComplete: PropTypes.bool.isRequired,
  updateTaskComplete: PropTypes.func.isRequired,
  deleteTasks:PropTypes.func.isRequired
};

export default Task;
