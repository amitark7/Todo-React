import React, { useState } from "react";
import TodoItem from "./TodoItem";
import AddTodos from "./AddTodos";

const Todos = () => {
  const [todos, setTodos] = useState([]);
  const [isEmpty, setIsEmpty] = useState(false);

  //Add new todo
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

  //Handle isComplete or not
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

  //delete todo
  const deleteTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  //Update todo through prompt
  const updateTodo = (id) => {
    const editedTodo = prompt("Edit the todo:");
    if (editedTodo !== null) {
      setTodos(
        todos.map((todo) => {
          if (todo.id === id) {
            return { ...todo, todoText: editedTodo };
          }
        })
      );
    }
  };
  return (
    <div className="w-4/5 mx-auto mt-10 h-full">
      {todos.length === 0 ? (
        <h1 className="mb-4 font-semibold text-lg text-center">
          Todo Empty Add Task
        </h1>
      ) : (
        <h1 className="mb-4 font-semibold text-lg">Todo App</h1>
      )}
      {todos.map((todoItem, index) => {
        return (
          <TodoItem
            key={index}
            todoItem={todoItem}
            handleIsComplete={handleIsComplete}
            deleteTodo={deleteTodo}
            updateTodo={updateTodo}
          />
        );
      })}
      <AddTodos addTodo={addTodo} isEmpty={isEmpty} />
    </div>
  );
};

export default Todos;
