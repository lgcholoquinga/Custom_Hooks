/* REACT */
import React, { useEffect, useReducer } from "react";
/* COMPONENTS */
import { TodoList } from "../08-use-reducer/TodoList";
import { AddTodo } from "./TodoAdd";
/* REDUCER */
import { todoReducer } from "./todoReducer";

const init = () => {
  return JSON.parse(localStorage.getItem("todos")) || [];
};

export const TodoApp = () => {
  const [todos, dispatch] = useReducer(todoReducer, [], init);

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  const handleDelete = (todoId) => {
    dispatch({
      type: "delete",
      payload: todoId,
    });
  };

  const handleToggle = (todoId) => {
    dispatch({
      type: "toggle",
      payload: todoId,
    });
  };

  const handleAddTodo = (newTodo) => {
    dispatch({
      type: "add",
      payload: newTodo,
    });
  };

  return (
    <div className="container">
      <h2>
        TodoApp (<small>{todos.length})</small>
      </h2>
      <hr />

      <div className="row">
        <div className="col-6">
          <TodoList
            todos={todos}
            handleDelete={handleDelete}
            handleToggle={handleToggle}
          />
        </div>
        <div className="col-4">
          <AddTodo handleAddTodo={handleAddTodo} />
        </div>
      </div>
    </div>
  );
};
