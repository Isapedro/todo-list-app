
import './App.css';
import TodoForm from"./components/TodoForm";
function App() {
  return (
    
    <div className='container'>
      <div className='app-wrapper'>
      <header>
        <h1 className='title'>
          My To-Do List  
          <br></br>
          📋
       </h1>
      </header>
      <TodoForm/>
    </div>
    </div>
  );
}

export default App;
