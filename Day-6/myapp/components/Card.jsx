import React from 'react'

const Card = ({title,description}) => {
  return (
     <div className="bg-blue-200 shadow-lg rounded-xl p-6 hover:shadow-2xl transition">
     
      <h3 className="text-xl text-teal-800 font-semibold mb-2">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>

  )
}

export default Card