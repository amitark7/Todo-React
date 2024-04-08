import React, { useState } from "react";

const AddTodos = ({ addTodo, isEmpty }) => {
  const [input, setInput] = useState("");

  return (
    <div className="w-full mt-4">
      <h3 className="font-semibold lg:text-2xl">Todo</h3>
      <input
        type="text"
        value={input}
        placeholder="Your Todo.."
        className={`w-full border-2 ${
          isEmpty ? "border-red-300" : "border-gray-300"
        } p-2 rounded outline-none`}
        onChange={(e) => setInput(e.target.value)}
      />
      <button
        onClick={() => {
          addTodo(input);
          setInput("");
        }}
        className="border border-gray-300 p-2 rounded text-xs mt-2 font-semibold lg:text-base lg:px-4"
      >
        Submit
      </button>
    </div>
  );
};

export default AddTodos;
