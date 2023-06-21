import React, { useState } from "react";
import PropTypes from 'prop-types';


const newTaskForm = ({ id }) => {
    const [title, setTitle] = useState('');
    const [isComplete, setIsComplete] = useState(false);
    const handleSubmit = (e) => {
        e.preventDefault();

        const newTask = {
            title: title,
            isComplete: isComplete,
        };
        addTask(newTask);
        setTitle('');
        setIsComplete(false);
    };
    return (
        <form onSubmit={handleSubmit}>
            <label htmlFor="title"> Title:</label>
            <input
                type="text"
                id="title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}></input>
            <label htmlFor="isComplete" >Is Complete:</label>
            <input
                type="text"
                id="isComplete"
                checked={isComplete}
                onChange={(e) => setIsComplete(e.target.checked)} />
            
            <button type="submit">  Add Task </button>
        </form>
    );
};
newTaskForm.propTypes = {
    addTask: PropTypes.func.isRequired,
};

export default newTaskForm;