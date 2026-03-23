import React from 'react'
import './Home.css'
const Home = () => {

    function validate()
    {
        let t1=document.getElementById('t1').value
        let t2=document.getElementById('t2').value

        let uname="rani"
        let pass1="123jkl"

        if(uname === t1 && t2 === pass1)
        {
            alert(`login successful`)
        }
        else{
            alert(`login denied`)
        }
    }
  return (
    <>
       <div className='container'>
         <h1>Login Verification</h1>
        <form>
            <label>Username:</label>
            <input type='text' id='t1' required/>
            <label>Password:</label>
            <input type='password' id='t2' required/>
            <br/>
            <button onClick={validate}>Login</button>
        </form>
       </div>
    
    </>
  )
}

export default Home