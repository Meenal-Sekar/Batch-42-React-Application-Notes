import React from 'react'
import {Link} from 'react-router-dom'

function Navbar() {
  return (
    <div className="bg-gray-800 text-white p-3">

      <Link to="/" className="mr-4">Home</Link>
      <Link to="/users" className="mr-4">Users</Link>
    </div>
  );
}

export default Navbar