import React, { useState } from 'react';
import PropTypes from 'prop-types';


const NewTaskForm = ({ addTask }) => {
    const [title, setTitle] = useState('');
    const [isComplete, setIsComplete] = useState(false);
    const handleSubmit = (event) => {
        event.preventDefault();

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
                onChange={(event) => setTitle(event.target.value)}></input>
            <label htmlFor="isComplete" >Is Complete:</label>
            <input
                type="text"
                id="isComplete"
                checked={isComplete}
                onChange={(event) => setIsComplete(event.target.checked)} />
            
            <button type="submit">  Add Task </button>
        </form>
    );
};
NewTaskForm.propTypes = {
    addTask: PropTypes.func.isRequired,
};

export default NewTaskForm;