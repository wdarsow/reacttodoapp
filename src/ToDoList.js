import React from 'react';
import ToDo from './ToDo';

const ToDoList = ({ todos }) => {
    return (
            todos.map(todo => {
                return <ToDo todo={todo} />
                })
            )
}

export default ToDoList;

// Wade's ToDoList
// <hr></hr>
// {todos.length}