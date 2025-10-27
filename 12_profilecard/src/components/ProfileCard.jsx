import React from 'react'

function ProfileCard(props) {
  return (
    <div className="max-w-sm mx-auto bg-white shadow-lg rounded-2xl overflow-hidden transform transition-all duration-300 hover:scale-105 hover:shadow-2xl text-center p-6">
      
      {/* Profile Image */}
      <img
        src={props.image}
        alt={props.name}
        className="w-32 h-32 rounded-full mx-auto border-4 border-pink-200 object-cover"
      />

      {/* Name */}
      <h2 className="mt-4 text-2xl font-semibold text-gray-800">
        {props.name}
      </h2>

      {/* Details */}
      <p className="text-gray-500 mt-1">Age: {props.age}</p>
      <p className="text-gray-600 italic">{props.profession}</p>

      {/* Button */}
      <button className="mt-5 px-5 py-2 bg-gradient-to-r from-pink-400 to-purple-400 text-white font-medium rounded-full shadow-md hover:from-pink-500 hover:to-purple-500 transition-all duration-300">
        View Profile
      </button>
    </div>
  )
}

export default ProfileCard
