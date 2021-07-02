import React from "react";
import { TodoListItem } from "./TodoListItem";

export const TodoList = ({ todos, handleDelete, handleToggle }) => {
  return (
    <div className="container">
      <ul className="list-group">
        {todos.map((todo, i) => {
          return (
            <TodoListItem
              key={todo.id}
              todo={todo}
              i={i}
              handleDelete={handleDelete}
              handleToggle={handleToggle}
            />
          );
        })}
      </ul>
    </div>
  );
};
