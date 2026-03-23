//rafce

import React from 'react'
import './App.css'
// connecting boostrp to react
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './components/Index/Home';
import photo from './assets/building.jpg'
const App = () => {

  function sample()
  {
    let t1=document.getElementById('t1').value
    
    if(t1 > 18)
    {
      document.getElementById('t2').value="You are Eligible"
    }
    else{
      document.getElementById('t2').value="you are not eligible"
    }
  }
  
  return (
   <div className='container'>
        <h1>Online Voting App</h1>
        <label>Type your age:</label>
        <input type='text' id='t1'></input>
        <label>Result:</label>
        <input type='text' id='t2'></input>
        <button onClick={sample}>Check</button>

   </div>
  )
}

export default App