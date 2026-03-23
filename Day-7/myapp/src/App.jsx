import React, { useState } from 'react'
import './App.css'
const App = () => {

    const [count,setCount]=useState(0);
    //count=0
    //count : varible value:0
    //setCount: function to update the variable 

    function increase()
    {
        setCount(count+1)
    }
    function decrease()
    {
       setCount(count-1)
    }
    function reset()
    {
        setCount(0)
    }


  return (
    <>
       <div className='bg-blue-100 text-dark  flex items-center flex-col justify-center h-screen'>
         
          <div className='border-2 border-solid border-pink-300 p-5 '>
            <h1 className='text-xl'>Counter App</h1>
            <br/>
             <h2>Count: {count} </h2>

            <div className='flex flex-row'>
               <button className='bg-pink-500 p-2 border-2 border-solid' onClick={increase}>➕</button>
                <button className='bg-pink-500 p-2 border-2 border-solid' onClick={decrease}>➖</button>
                <button className='bg-pink-500 p-2 border-2 border-solid' onClick={reset}>🔄️</button>
            </div>
          </div>
       </div>
    </>
  )
}

export default App





//sample=67   sample(67)