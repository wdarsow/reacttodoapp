import React, { useState } from 'react';
import ToDoList from './ToDoList';
// import ToDo from './ToDo';

const App = () => {
  const [todos, setTodos] = useState(['Todo 1', 'Todo 2'])
  // first variable 'todos' contains every todos inside of todo state
  // setTodos is function we call to update those todos

  // object destructuring - read about it
  // all componenets like app or todo list have props that we can pass them
  // we have props todos on ToDoList and we want to pass the todos variable to that prop 
  return (
    <div>
      <ToDoList todos={todos}/>
      <input type="text" />
      <button>Add ToDo</button>
      <button>Clear Completed</button>
      <div>0 left</div>
    </div>
    

  )
}


export default App;
