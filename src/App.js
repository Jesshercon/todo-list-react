import logo from './logo.svg';
import './App.css';
import TaskList from './components/TaskList';
import { useState } from 'react';

function App() {
const [inputString, setInputString]=useState("")

const getInputText=(event)=>{
  console.log(event.target.value)
}

  return (
    <div className="App">
   
<div>
    
<form className='my-10'>
  <label className='text-xl font-semibold'> Insert your task here: </label>

  <div className=''>
  <input className='input-task border border-gray-500 rounded-sm px-2 shadow-sm' 
  type="text" placeholder='Type your task' value={inputString}
  onChange={getInputText} />
  <button className='mx-4 px-2 py-1 text-white bg-blue-400 rounded'>Add task</button>
  </div>

</form>

</div>

    </div>
  );
}

export default App;
