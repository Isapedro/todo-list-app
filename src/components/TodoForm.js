import React,{useState} from "react";


export default function Todoform(props){
  const [input, setInput]= useState("");

  function handleChange(event){
    setInput(event.target.value);
  };
  
  function handleSubmit(event){
    event.preventDefault();
    
    props.onSubmit({
     id:Math.floor(Math.random()*10000),
     text:input
    });
setInput("")
  };
  return(
    <form className="todo-form" onSubmit={handleSubmit}>
      <input type="text" placeholder="Add a to-do..." value={input} name="text" className="todo-input" onChange={handleChange}/>
    <button className="todo-button">Add To-Do!</button>
    </form>
  );
}