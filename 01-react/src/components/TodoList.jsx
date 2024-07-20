export default function TodoList({taskName,id,removeTodo,index}) {
  return (
    <div>
    <input
      className="hidden"
      type="checkbox"
      id={id}
      defaultChecked=""
    />
    <label
      className="flex items-center px-2 py-4 gap-4 rounded cursor-pointer hover:bg-gray-900
      transition-all duration-300"
      htmlFor={id}
    >
      <span className="flex items-center justify-center w-5 h-5 text-transparent border-2 border-gray-500 rounded-full">
        <svg
          className="w-4 h-4 fill-current"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path
            fillRule="evenodd"
            d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
            clipRule="evenodd"
          />
        </svg>
      </span>
      <span className="text-sm">
        {taskName}
      </span>
      <button 
      onClick={()=>removeTodo(index)}
      className="ml-auto text-red-500 transition-all duration-300">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="size-8"
          viewBox="0 0 24 24"
        >
          <g fill="none">
            <circle
              cx={12}
              cy={12}
              r={9}
              fill="currentColor"
              fillOpacity="0.25"
            />
            <path
              stroke="currentColor"
              strokeWidth="1.2"
              d="m9 15l6-6m0 6L9 9"
            />
          </g>
        </svg>
      </button>
    </label>
  </div>
  )
}
