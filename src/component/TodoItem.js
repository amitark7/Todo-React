import React from "react";
import { MdDelete } from "react-icons/md";
import { BiSolidEditAlt } from "react-icons/bi";

const TodoItem = ({ todoItem, handleIsComplete, updateTodo, deleteTodo }) => {
  const { id, todoText, isComplete } = todoItem;

  const handleChange = () => {
    handleIsComplete(id);
  };

  return (
    <div className="w-full px-4 py-2 flex justify-between border border-gray-300 rounded">
      <div className="flex items-center">
        <input
          type="checkbox"
          checked={isComplete || false}
          className="mr-1"
          onChange={handleChange}
        />
        <p className="text-xs lg:text-base lg:ml-2">{todoText}</p>
      </div>
      <div className="flex gap-6">
        {isComplete ? (
          <div
            className="
          bg-green-100 rounded-2xl px-2 py-1"
          >
            <p className="text-xs font-semibold">Complete</p>
          </div>
        ) : (
          ""
        )}
        <button className="text-lg text-black" onClick={() => deleteTodo(id)}>
          <MdDelete />
        </button>
        <button className="text-lg text-black" onClick={() => updateTodo(id)}>
          <BiSolidEditAlt />
        </button>
      </div>
    </div>
  );
};

export default TodoItem;
