import React from "react";

export const TodoListItem = ({ todo, i, handleDelete, handleToggle }) => {
  return (
    <>
      <li className="list-group-item">
        <p
          className={`${
            todo.done ? "text-center text-success" : "text-center text-warning"
          }`}
          onClick={() => handleToggle(todo.id)}
        >
          {i + 1}.{todo.description}
        </p>
        <button
          className="btn btn-danger"
          onClick={() => handleDelete(todo.id)}
        >
          Delete
        </button>
      </li>
    </>
  );
};
