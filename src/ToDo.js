import React from 'react';

// we pass in a todo element below
const ToDo = ({todo}) => {
    return (
        <div>
            <label>
                <input type="checkbox" checked={todo.complete} />
                 {todo.name}
            </label>
        </div>
    )
}

export default ToDo;