import { useState } from "react";
import Buttons from "./components/Buttons";
import Header from "./components/Header";
import Screen from "./components/Screen";

export default function App() {

  const [expression, setExpression] = useState('')
  const [result, setResult] = useState('');

  return (
<div className="bg-gray-200 w-screen h-screen flex justify-center items-center">
    <div className="w-[20vw] p-6 bg-white rounded-2xl shadow-xl border-4 border-gray-100">
    <Header />
      <form className="space-y-8">
        <Screen expression={expression} result={result}/>
         <Buttons expression={expression} setExpression={setExpression} setResult={setResult}/>
          <div className="flex justify-center mt-5">
              <div className="w-32 h-1 bg-gray-200 rounded-l-xl rounded-r-xl" />
            </div>
      </form>
    </div>
  </div>
  );
}
