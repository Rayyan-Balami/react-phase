import React from "react";
import { evaluate, log } from "mathjs";

const buttons = [
  { value: "C", bg: "bg-yellow-100", text: "text-yellow-600" },
  { value: "(", bg: "bg-gray-200", text: "text-black" },
  { value: ")", bg: "bg-gray-200", text: "text-black" },
  { value: "/", bg: "bg-yellow-500", text: "text-white" },

  { value: "7", bg: "bg-gray-200", text: "text-black" },
  { value: "8", bg: "bg-gray-200", text: "text-black" },
  { value: "9", bg: "bg-gray-200", text: "text-black" },
  { value: "*", bg: "bg-yellow-500", text: "text-white" },

  { value: "4", bg: "bg-gray-200", text: "text-black" },
  { value: "5", bg: "bg-gray-200", text: "text-black" },
  { value: "6", bg: "bg-gray-200", text: "text-black" },
  { value: "-", bg: "bg-yellow-500", text: "text-white" },

  { value: "1", bg: "bg-gray-200", text: "text-black" },
  { value: "2", bg: "bg-gray-200", text: "text-black" },
  { value: "3", bg: "bg-gray-200", text: "text-black" },
  { value: "+", bg: "bg-yellow-500", text: "text-white" },

  { value: "0", bg: "bg-gray-200", text: "text-black" },
  { value: ".", bg: "bg-gray-200", text: "text-black" },
  { value: "←", bg: "bg-red-100", text: "text-red-600" },
  { value: "=", bg: "bg-green-500", text: "text-white" },
];

const Buttons = ({ expression, setExpression, setResult }) => (
  <div className="grid grid-cols-4 gap-4">
    {buttons.map(({ value, bg, text }, index) => (
      <button
        key={index}
        type="button"
        title={value}
        className={`${bg} ${text} shadow-md hover:shadow-lg hover:brightness-95 cursor-pointer rounded-2xl aspect-square flex justify-center items-center`}
        onClick={() => {
          console.log(value);
          if (value === "=") {
            const result = evaluate(expression);
            setResult(result);
          } else if (value === "←") {
            setExpression(prevExpression => prevExpression.slice(0, -1));
          }else if (value === "C") {
            setExpression('');
          } else {
            setExpression((prevExpression) => prevExpression + value);
          }
        }}
      >
        {value === '*' ? 'X' : value}
      </button>
    ))}
  </div>
);

export default Buttons;
