import React from 'react';

// we pass in a todo element below
const ToDo = ({todo, toggleTodo }) => {
    function handleTodoClick() {
        toggleTodo(todo.id)
    }
    
    return (
        <div>
            <label>
                <input type="checkbox" checked={todo.complete} onChange={handleTodoClick} />
                 {todo.name}
            </label>
        </div>
    )
}

export default ToDo;