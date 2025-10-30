import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { addTodo, toggleTodo, deleteTodo } from store
import { store } from "./store/store";

function App() {
  const [text, setText] = useState("");
  const todos = useSelector((state) => state.todos);
  const dispatch = useDispatch();

  const handleAdd = () => {
    if (text.trim() !== "") {
      dispatch(addTodo(text));
      setText("");
    }
  };

  return (
    <div className="max-w-md mx-auto mt-10 p-6 bg-white/70 dark:bg-gray-900/70 backdrop-blur-lg shadow-xl rounded-2xl border border-gray-200 dark:border-gray-700">
      <h1 className="text-2xl font-bold text-center mb-6 text-indigo-600 dark:text-indigo-400">
        📝 Redux Todo App
      </h1>

      <div className="flex gap-2 mb-6">
        <input
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="Enter Todo"
          className="flex-1 px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg 
                     focus:outline-none focus:ring-2 focus:ring-indigo-400 
                     bg-white dark:bg-gray-800 text-gray-800 dark:text-gray-100 
                     placeholder-gray-400"
        />
        <button
          onClick={handleAdd}
          className="px-4 py-2 bg-indigo-500 text-white font-semibold rounded-lg 
                     hover:bg-indigo-600 transition-all duration-300"
        >
          Add
        </button>
      </div>

      <ul className="space-y-2">
        {todos.map((todo) => (
          <li
            key={todo.id}
            className="flex justify-between items-center px-3 py-2 bg-gray-100 dark:bg-gray-800 
                       rounded-lg shadow-sm hover:shadow-md transition-all duration-300"
          >
            <span
              onClick={() => dispatch(toggleTodo(todo.id))}
              className={`cursor-pointer text-base font-medium ${
                todo.completed
                  ? "line-through text-gray-500 dark:text-gray-400"
                  : "text-gray-800 dark:text-gray-100"
              }`}
            >
              {todo.text}
            </span>

            <button
              onClick={() => dispatch(deleteTodo(todo.id))}
              className="text-red-500 hover:text-red-600 transition-colors duration-200"
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
