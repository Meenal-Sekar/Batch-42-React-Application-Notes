import React from 'react'
import './App.css'
import Home from './Home'
const App = () => {
  function sample()
  {
    alert(`I am a function called by html button`)
  }

  return (
    <>
          <div>
              <h1>Login Page</h1>
          </div>
          
          <Home/>
    </>

   
  )
}

export default App



// component  2types  1.funciton component(rafce)  2.class component (hooks)rcc