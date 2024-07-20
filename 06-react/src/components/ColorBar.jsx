import React, { useState } from "react";

function ColorBar() {
  const [color, setColor] = useState("bg-white");
  return (
    <div className={`h-screen w-full ${color}`}>
      <div className="fixed bottom-10 left-10 right-10 flex justify-center gap-2 flex-wrap p-4 shadow-xl bg-slate-200 rounded-lg *:size-16 *:border-2 *:border-black *:rounded-lg">
        <button
          onClick={() => setColor("bg-red-600")}
          className="bg-red-600"
        ></button>
        <button
          onClick={() => setColor("bg-blue-600")}
          className="bg-blue-600"
        ></button>
        <button
          onClick={() => setColor("bg-green-600")}
          className="bg-green-600"
        ></button>
        <button
          onClick={() => setColor("bg-yellow-600")}
          className="bg-yellow-600"
        ></button>
        <button
          onClick={() => setColor("bg-orange-600")}
          className="bg-orange-600"
        ></button>
        <button
          onClick={() => setColor("bg-pink-600")}
          className="bg-pink-600"
        ></button>
        <button
          onClick={() => setColor("bg-amber-800")}
          className="bg-amber-800"
        ></button>
        <button
          onClick={() => setColor("bg-black")}
          className="bg-black"
        ></button>
        <button
          onClick={() => setColor("bg-white")}
          className="bg-white"
        ></button>
        <button
          onClick={() => setColor("bg-gray-600")}
          className="bg-gray-600"
        ></button>
      </div>
    </div>
  );
}

export default ColorBar;
