import React, { useState, useRef } from 'react';
import ToDoList from './ToDoList';
// import ToDo from './ToDo';

const App = () => {
  const [todos, setTodos] = useState([])
  // first variable 'todos' contains every todos inside of todo state
  // setTodos is function we call to update those todos

  // object destructuring - read about it
  // all componenets like app or todo list have props that we can pass them
  // we have props todos on ToDoList and we want to pass the todos variable to that prop 
  const todoNameRef = useRef()
  const handleAddTodo = (e) => {
    const name = todoNameRef.current.value
    if(name === '') return
    console.log(name)
    todoNameRef.current.value = null
  }

  return (
    <div>
      <ToDoList todos={todos}/>
      <input ref={todoNameRef} type="text" />
      <button onClick={handleAddTodo}>Add ToDo</button>
      <button>Clear Completed</button>
      <div>0 left</div>
    </div>
    

  )
}


// const [todos, setTodos] = useState([{ id:1, name: 'Todo 1', complete: false }])

export default App;
