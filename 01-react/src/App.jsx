import { useState } from "react";
import AddTodo from "./components/AddTodo";
import Header from "./components/Header";
import TodoList from "./components/TodoList";

export default function App() {
  const [tasks, setTasks] = useState(["Buy eggs", "Watch Demon Slayer", "take a nap"]);
  const addTodo = (task) => {
    if(task.length !== 0)
    setTasks([task, ...tasks]);
  };
  const removeTodo = (taskIndex) => {
    const newTasks = tasks.filter((_,index)=> index !== taskIndex);
    setTasks(newTasks);
  };
  const clearTodo = () => {
    setTasks([]);
  }
  return (
    <div className="h-screen flex flex-grow items-center justify-center bg-gray-900">
      <div className="p-8 bg-gray-800 rounded-lg shadow-lg w-full max-w-xl text-gray-200">
        <Header clearTodo={clearTodo}/>
        {tasks.map((task, index) => (
          <TodoList
            key={`task_${index}`}
            taskName={task}
            id={`task_${index}`}
            index={index}
            removeTodo={removeTodo}
          />
        ))}
        <AddTodo addTodo={addTodo} />
      </div>
    </div>
  );
}
