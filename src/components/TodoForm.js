import React,{useState, useEffect, useRef} from "react";


export default function Todoform(props){
  const [input, setInput]= useState(props.edit ? props.edit.value:"");

  const inputRef= useRef(null)


  useEffect(()=>{
    inputRef.current.focus()
  })
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
      {props.edit ? ( 
        <>
      <input type="text" placeholder="Update your item" value={input} name="text" className="todo-input edit" onChange={handleChange} ref ={inputRef}/>
    <button className="todo-button edit">Update!</button>
    </>
  ) : 
   (
    <>
   <input type="text" placeholder="Add a to-do..." value={input} name="text" className="todo-input" onChange={handleChange} ref ={inputRef} autoComplete="off"/>
    <button className="todo-button">Add To-Do!</button>
    </>
    )}
    </form>
  );
}