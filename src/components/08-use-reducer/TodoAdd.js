import React from "react";

/* HOOK */
import { useForm } from "../../hooks/useForm";

export const AddTodo = ({ handleAddTodo }) => {
  const [{ description }, handleInputChnage, reset] = useForm({
    description: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (description.trim().length <= 1) {
      return;
    }
    const newTodo = {
      id: new Date().getTime(),
      description: description,
      done: false,
    };
    handleAddTodo(newTodo);
    reset();
  };

  return (
    <>
      <h4>Add Todo</h4>
      <hr />
      <form onSubmit={handleSubmit}>
        <input
          className="form-control"
          type="text"
          name="description"
          placeholder="Add Description"
          autoComplete="off"
          value={description}
          onChange={handleInputChnage}
        />
        <button type="submit" className="btn btn-outline-primary mt-2">
          Save Todo
        </button>
      </form>
    </>
  );
};
