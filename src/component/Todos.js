import React, { useState } from "react";
import TodoItem from "./TodoItem";
import AddTodos from "./AddTodos";

const Todos = () => {
  const [todos, setTodos] = useState([]);
  const [isEmpty, setIsEmpty] = useState(false);

  const addTodo = (todoText) => {
    if (todoText.length === 0) {
      setIsEmpty(true);
      return;
    } else {
      setIsEmpty(false);
      const newTodo = {
        id: Date.now(),
        todoText,
        iComplete: false,
      };
      setTodos([newTodo, ...todos]);
    }
  };
  const handleIsComplete = (id) => {
    setTodos(
      todos.map((todo) => {
        if (todo.id === id) {
          return { ...todo, isComplete: !todo.isComplete };
        } else {
          return todo;
        }
      })
    );
  };
  return (
    <div className="w-4/5 mx-auto mt-10 h-full">
      <h1 className="mb-4 font-semibold text-lg">Todo App</h1>
      {todos.map((todoItem, index) => {
        return (
          <TodoItem
            key={index}
            todoItem={todoItem}
            handleIsComplete={handleIsComplete}
          />
        );
      })}
      <AddTodos addTodo={addTodo} isEmpty={isEmpty} />
    </div>
  );
};

export default Todos;
