import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { addMovie, toggleWatched, deleteMovie } from "./movieSlice";
import "./App.css";

function App() {
  const movies = useSelector((state) => state.movies); // ✅ Correct slice name
  const dispatch = useDispatch();
  const [title, setTitle] = useState("");

  const handleAdd = () => {
    if (title.trim() !== "") {
      dispatch(addMovie(title));
      setTitle("");
    }
  };

  return (
    <div className="max-w-md mx-auto mt-12 p-6 bg-white/70 dark:bg-gray-900/70 backdrop-blur-lg 
                border border-gray-200 dark:border-gray-700 shadow-xl rounded-2xl">
  <h1 className="text-3xl font-bold text-center mb-6 text-indigo-600 dark:text-indigo-400">
    🎬 Favorite Movies List
  </h1>

  <div className="flex gap-3 mb-6">
    <input
      type="text"
      value={title}
      onChange={(e) => setTitle(e.target.value)}
      placeholder="Enter your movie name..."
      className="flex-1 px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600
                 focus:outline-none focus:ring-2 focus:ring-indigo-400
                 bg-white dark:bg-gray-800 text-gray-800 dark:text-gray-100
                 placeholder-gray-400"
    />
    <button
      onClick={handleAdd}
      className="px-4 py-2 bg-indigo-500 text-white font-semibold rounded-lg
                 hover:bg-indigo-600 active:scale-95 transition-all duration-200"
    >
      Add
    </button>
  </div>

  <ul className="space-y-3">
    {movies.map((movie) => (
      <li
        key={movie.id}
        className="flex justify-between items-center px-4 py-2 bg-gray-100 dark:bg-gray-800 
                   rounded-lg shadow-sm hover:shadow-md transition-all duration-300"
      >
        <span
          onClick={() => dispatch(toggleWatched(movie.id))}
          className={`cursor-pointer text-base font-medium ${
            movie.watched
              ? "line-through text-gray-500 dark:text-gray-400"
              : "text-gray-800 dark:text-gray-100"
          }`}
        >
          {movie.title}
        </span>
        <button
          onClick={() => dispatch(deleteMovie(movie.id))}
          className="text-red-500 hover:text-red-600 text-lg transition-colors duration-200"
        >
          ❌
        </button>
      </li>
    ))}
  </ul>
</div>

  );
}

export default App;
