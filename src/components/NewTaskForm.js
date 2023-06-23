/* eslint-disable camelcase */
import React, { useState } from 'react';
import PropTypes from 'prop-types';


const NewTaskForm = ({ addTask }) => {
    const [title, setTitle] = useState('');
    const [is_complete, setIsComplete] = useState(false);
    
    const handleSubmit = (event) => {
        event.preventDefault();
        console.log('we are in handlesubmit');

        const newTask = {
            title: title,
            is_complete: is_complete,
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
                onChange={(event) => setTitle(event.target.value)}
            />
            
            <label htmlFor="is_complete" >Is Complete:</label>
            <input
                type="bool"
                id="is_complete"
                value={is_complete}
                onChange={(event) => setIsComplete(event.target.value)} />
        
            <input type="submit" value="Add Task"/>
        </form>
    );
};
NewTaskForm.propTypes = {
    addTask: PropTypes.func.isRequired,
};

export default NewTaskForm;