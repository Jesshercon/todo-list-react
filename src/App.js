import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
   
<div>
    
<form>
  <label className='title-label'> Insert your task here: </label>

  <div className='insert-elements'>
  <input className='input-task' type="text" placeholder='Type your task' />
  <button className='task-button'>Add task</button>
  </div>

</form>

</div>

    </div>
  );
}

export default App;
