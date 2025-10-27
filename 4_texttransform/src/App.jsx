import { useState } from "react";
import "./App.css";

function App() {
  const [text, setText] = useState("");
  const [wordcount, setcount] = useState("");

  const handleUpperCase = () => {
    setText(text.toUpperCase());
  };

  const handlewordCount = () => {
    const count = text.trim() === "" ? 0 : text.trim().split(/\s+/).length;
    setcount(count);
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-linear-to-br from-gray-900 via-purple-900 to-black text-white px-6">
      <div className="bg-white/10 backdrop-blur-lg border border-white/20 rounded-3xl p-8 w-full max-w-md shadow-2xl text-center">
        <h1 className="text-4xl font-bold mb-3 text-purple-300">Text Transformer</h1>
        <p className="text-gray-300 mb-6">Click a button to transform your text</p>

        <input
          type="text"
          placeholder="Enter your text"
          onChange={(e) => setText(e.target.value)}
          value={text}
          className="w-full px-4 py-3 rounded-xl text-gray-900 focus:outline-none focus:ring-2 focus:ring-purple-500 placeholder-gray-400"
        />

        <div className="flex flex-wrap justify-center gap-4 mt-6">
          <button
            onClick={handleUpperCase}
            className="px-5 py-2 rounded-xl bg-purple-600 hover:bg-purple-700 transition-all duration-200 shadow-md hover:shadow-purple-400/40"
          >
            Uppercase
          </button>
          <button
            onClick={handlewordCount}
            className="px-5 py-2 rounded-xl bg-pink-600 hover:bg-pink-700 transition-all duration-200 shadow-md hover:shadow-pink-400/40"
          >
            Count Words
          </button>
        </div>

        <p className="mt-6 text-lg text-gray-200">
          Word Count: <span className="font-semibold text-white">{wordcount}</span>
        </p>
      </div>
    </div>
  );
}

export default App;
