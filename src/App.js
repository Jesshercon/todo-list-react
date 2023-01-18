import logo from './logo.svg';
import './App.css';
import TaskList from './components/TaskList';
import { useState } from 'react';

function App() {
const [inputString, setInputString]=useState("")

const getInputText=(event)=>{
  setInputString(event.target.value)  
}


  return (
    <div className="App">
   
<div>
    
<form className='my-10'>
  <label className='text-xl font-semibold'> Insert your task here: </label>

  <div className='mt-6'>
  <input className='input-task border border-gray-500 rounded-sm px-2 shadow-sm' 
  type="text" placeholder='Type your task' value={inputString}
  onChange={getInputText} />
  <button className='mx-4 px-2 py-1 text-white bg-blue-400 rounded' type='submit'>Add task</button>
  <p className='mt-6'>You added the following tasks: {inputString}</p>
  </div>

</form>

</div>

    </div>
  );
}

export default App;
