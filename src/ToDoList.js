import React from 'react';
import ToDo from './ToDo';

const ToDoList = ({ todos }) => {
    return (
            todos.map(todo => {
                return <ToDo key={todo.id} todo={todo} />
                })
            )
}

export default ToDoList;
