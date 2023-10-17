import React,{useState} from "react";
import TodoForm from "./TodoForm";


export default function TodoList(){
  const [todos,setTodos]=useState([])

  const addTodo= todo=>{
    if (!todo.text||/^\s*$/.test(todo.text)){
      return;
    }
    const newTodos=[todo,...todos];
    setTodos(newTodos);
    
  };
  return(
    <div>
<h1>Whats the Plan for Today?</h1>
<TodoForm onSubmit={addTodo}/>
    </div>
  )
}