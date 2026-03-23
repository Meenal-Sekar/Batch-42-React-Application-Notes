import { useState } from "react";
import './App.css'
function App() {
  const [item, setItem] = useState("");
  const [list, setList] = useState([]);

  const addItem = () => {
    if (item.trim() === "") return;
    setList([...list, item]);
    setItem("");
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      
      <div className="bg-white p-6 rounded-lg shadow-lg w-96">
        
        <h1 className="text-2xl font-bold text-center mb-4">
          React List App
        </h1>

        <div className="flex gap-2 mb-4">
          <input
            type="text"
            placeholder="Enter item"
            value={item}
            onChange={(e) => setItem(e.target.value)}
            className="border p-2 flex-1 rounded"
          />

          <button
            onClick={addItem}
            className="bg-blue-500 text-white px-4 py-2 rounded"
          >
            Add
          </button>
        </div>

        <ul className="list-disc pl-5">
          {list.map((data, index) => (
            <li key={index} className="py-1">
              {data}
            </li>
          ))}
        </ul>

      </div>

    </div>
  );
}

export default App;