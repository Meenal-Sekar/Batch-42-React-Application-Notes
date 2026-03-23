import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
const Home = () => {

    const[id,setId]=useState();
    
    const navigate=useNavigate();

    const handleSubmit = (e) => {
    e.preventDefault();
    navigate(`/users/${id}`);
  }
   

  return (
    <div className="p-5">
      <h1 className="text-xl font-bold">Home Page</h1>

      <form onSubmit={handleSubmit} className="mt-4">
        <input
          type="number"
          placeholder="Enter User ID"
          value={id}
          onChange={(e) => setId(e.target.value)}
          className="border p-2"
        />
        <button className="bg-blue-500 text-white px-4 py-2 ml-2">
          Get User
        </button>
      </form>
    </div>

  )
}

export default Home