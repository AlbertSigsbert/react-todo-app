import React, { useState } from "react";
import PropTypes from "prop-types";
import { StyledForm } from "./styled/Form.styled";

TodoForm.propTypes = {
  addTodo: PropTypes.func.isRequired,
};

function TodoForm({ addTodo }) {
  const [todoInput, setTodoInput] = useState("");

  const handleInput = (event) => {
    setTodoInput(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (todoInput.trim().length === 0) {
      return;
    }

    addTodo(todoInput);

    setTodoInput("");
  };

  return (
    <StyledForm>
      <form action="#" onSubmit={handleSubmit}>
        <input
          type="text"
          className="todo-input"
          value={todoInput}
          onChange={handleInput}
          placeholder="Create a new todo..."
        />
      </form>
    </StyledForm>
  );
}

export default TodoForm;
