import { useState } from "react";

export default function AddTodo({ addTodo }) {
  const [newTask, setNewTask] = useState('');
  return (
    <div className="flex items-center mt-6 gap-4 ">
      <input
        className="flex-grow py-2 px-3 bg-transparent border-b-2 border-gray-500 focus:outline-none focus:border-indigo-600 transition-colors duration-300"
        type="text"
        placeholder="add a new task"
        value={newTask}
        required
        onChange={(e) => setNewTask(e.target.value)
        }
      />
      <button
        className="flex items-center gap-2 font-medium text-xs bg-indigo-600 py-2 px-3 rounded-md hover:bg-indigo-700 transition-all duration-300"
        onClick={() => {
          addTodo(newTask);
          setNewTask('');
        }}
      >
        <svg
          className="w-5 h-5 fill-current"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M12 6v6m0 0v6m0-6h6m-6 0H6"
          />
        </svg>
        Add
      </button>
    </div>
  );
}
