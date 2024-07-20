import AddTodo from "./components/AddTodo";
import Header from "./components/Header";
import Todos from "./components/Todos";

export default function App() {

  return (
    <div className="h-screen flex flex-grow items-center justify-center bg-gray-900">
      <div className="p-8 bg-gray-800 rounded-lg shadow-lg w-full max-w-xl text-gray-200">
        <Header />
        <Todos />
        <AddTodo/>
      </div>
    </div>
  );
}
