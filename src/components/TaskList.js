import React from 'react';
import PropTypes from 'prop-types';
import Task from './Task';
import './TaskList.css';

const TaskList = (props) => {
  // const getTaskListJSX = (tasks) => {
    const taskComponents = props.tasks.map((task) => {
      return (
        <Task
          key={task.id}
          id={task.id}
          title={task.title}
          isComplete={task.isComplete}
          updateTaskComplete={props.updateTaskComplete}
          deleteTasks={props.deleteTasks}
        />
      );
    });

  return (
  <ul className="tasks__list no-bullet">{taskComponents}</ul>);
};

TaskList.propTypes = {
  tasks: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
      isComplete: PropTypes.bool.isRequired,
      // updateTaskComplete: PropTypes.func.isRequired,
    })
  ).isRequired,
  updateTaskComplete: PropTypes.func.isRequired,
  deleteTasks:PropTypes.func.isRequired
};

export default TaskList;
