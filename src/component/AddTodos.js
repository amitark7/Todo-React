import React, { useEffect, useState } from "react";

const AddTodos = ({ addTodoAndUpdate, isEmpty, todos, todoId }) => {
  const [input, setInput] = useState("");

  //This function get perticular task and update input box to update todo
  const findTodo = () => {
    const todo = todos.find((todo) => todo.id === todoId);
    if (todo) {
      setInput(todo.todoText);
    }
  };

  //We run findTodo when todoID exist or not
  useEffect(() => {
    findTodo();
  }, [todoId]);

  return (
    <div className="w-full mt-4">
      <h3 className="font-semibold lg:text-2xl">
        {todoId ? "Update Todo" : "Add Todo"}
      </h3>
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
          addTodoAndUpdate(input);
          setInput("");
        }}
        className="border border-gray-300 p-2 rounded text-xs mt-2 font-semibold lg:text-base lg:px-4"
      >
        {todoId ? "Update" : "Add"}
      </button>
    </div>
  );
};

export default AddTodos;
