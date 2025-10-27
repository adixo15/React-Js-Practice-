import React from 'react'

function MovieCard(props) {
  return (
    <div className="max-w-xs bg-gray-900 rounded-2xl shadow-xl overflow-hidden hover:scale-105 transform transition-transform duration-300 text-white">
      
      {/* Movie Poster */}
      <img
        src={props.image}
        alt={props.name}
        className="w-full h-64 object-cover"
      />

      {/* Movie Info */}
      <div className="p-4">
        <h2 className="text-xl font-bold mb-2 text-red-500">Title: {props.title}</h2>
        <p className="text-gray-400 mb-1">Year: {props.year}</p>
        <p className="text-yellow-400 mb-3">Rating: {props.rate}</p>

        {/* Watch Button */}
        <button className="w-full py-2 bg-red-600 hover:bg-red-700 rounded-lg font-semibold shadow-md transition-colors duration-300">
          Watch Now
        </button>
      </div>
    </div>
  )
}

export default MovieCard
