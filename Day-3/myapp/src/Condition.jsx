import React, { use, useState } from 'react'

const Condition = () => {


  //how to creat a hooks

  const[name,setName]=useState("nandhini")
  const[email,setEmail]=useState("")
  const[city,setCity]=useState("")

const handleSubmit=()=>
{
    alert(`The user name is ${name} and his email is ${email} he is living in ${city}`)

}


  return (
    <>
      <form>
        <label>FirstName:</label>
        <input type='text'  value={name} onChange={(e)=>setName(e.target.value)}/>

        <label>Email:</label>
        <input type='email'  value={email} onChange={(e)=> setEmail(e.target.value)}/>

        <label>City:</label>
        <input type='text'  value={city} onChange={(e)=> setCity(e.target.value)}/>

        <button type='button' onClick={handleSubmit}>Submit</button>
      </form>


    </>
  )





}

export default Condition


