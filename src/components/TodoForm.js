import React,{useState} from "react";


export default function Todoform(){
  let [input, setInput]= useState("")
  return(
    <form className="todo-form">
      <input type="text" placeholder="Add a to-do..." value={input} name="todo-input" className="todo-input"/>
    <button className="todo-button">Add To-Do!</button>
    </form>
  )
}