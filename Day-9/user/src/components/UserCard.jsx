import React from 'react'

function UserCard({user})
{

    return(

      <div className='bg-white shadow-lg rounded-lg p-4 hover:shadow-lg transition'>
        {/* name,email,cityname,company name */}

        <h2 className="text-xl font-bold text-teal-600">{user.name}</h2>

         <p className="text-gray-600">{user.email}</p>

      <p className="text-gray-500 text-sm">
        {user.company.name}
      </p>

      <p className="text-sm text-gray-400">
        {user.address.city}
      </p>

        
      </div>

    )
}

export default UserCard