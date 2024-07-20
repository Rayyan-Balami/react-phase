export default function Header({clearTodo}) {
  return (
    <div className="flex items-center justify-between gap-4 mb-6">
      <svg
        className="h-8 w-8 text-indigo-500 stroke-current"
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M20 13V6a2 2 0 00-2-2H6a2 2 0 00-2 2v7m16 0v5a2 2 0 01-2 2H6a2 2 0 01-2-2v-5m16 0h-2.586a1 1 0 00-.707.293l-2.414 2.414a1 1 0 01-.707.293h-3.172a1 1 0 01-.707-.293l-2.414-2.414A1 1 0 006.586 13H4"
        />
      </svg>
      <h4 className="font-semibold text-lg ">My Todo's</h4>
      <button className="text-xs bg-indigo-600 py-2 px-3 rounded-md hover:bg-indigo-700 transition-all duration-300"
      onClick={clearTodo}>
        Clear All
      </button>
    </div>
  );
}
