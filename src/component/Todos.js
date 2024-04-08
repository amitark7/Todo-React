import React, { useState } from "react";
import TodoItem from "./TodoItem";
import AddTodos from "./AddTodos";

const Todos = () => {
  const [todos, setTodos] = useState([]);
  const [isEmpty, setIsEmpty] = useState(false);
  const [todoId, setTodoId] = useState(null);

  //Add new todo
  const addTodoAndUpdate = (todoText) => {
    //if inputBox empty then we do nothing simply return or disabled the button and set border red of input box
    if (todoText.length === 0) {
      setIsEmpty(true);
      return;
    } else {
      //Also we check index for updating task if findIndex>=0 then isUpdate true then we handle function according to isUpdate
      const findIndex = todos.findIndex((todo) => todo.id === todoId);
      if (findIndex >= 0) {
        //We find object through todoID and update todo
        setTodos(
          todos.map((todo) => {
            if (todo.id === todoId) {
              return { ...todo, todoText };
            } else {
              return todo;
            }
          })
        );
        setTodoId(null);
        setIsEmpty(false);
      } else {
        //If no index exist thats means we add the todo
        setIsEmpty(false);
        const newTodo = {
          id: Date.now(),
          todoText,
          iComplete: false,
        };
        setTodos([newTodo, ...todos]);
      }
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
  const selectTodoId = (id) => {
    setTodoId(id);
  };

  return (
    <div className="w-4/5 mx-auto mt-10 h-full">
      {todos.length === 0 ? (
        <h1 className="mb-4 font-semibold text-lg ">Todo is Empty</h1>
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
            selectTodoId={selectTodoId}
          />
        );
      })}
      <AddTodos
        addTodoAndUpdate={addTodoAndUpdate}
        isEmpty={isEmpty}
        todoId={todoId}
        todos={todos}
      />
    </div>
  );
};

export default Todos;
