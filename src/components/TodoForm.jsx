import React, { useContext, useState } from "react";
import { StyledForm } from "./styled/Form.styled";
import { TodosContext } from "./context/TodosContext";



function TodoForm() {
  const { todos,setTodos,idForTodo,setIdForTodo } = useContext(TodosContext);
  const [todoInput, setTodoInput] = useState("");

  const handleInput = (event) => {
    setTodoInput(event.target.value);
  };

  const addTodo = (event) => {
    event.preventDefault();

    if (todoInput.trim().length === 0) {
      return;
    }

    setTodos([...todos, { id: idForTodo, title: todoInput, isComplete: false }]);

    setIdForTodo((prevId) => prevId + 1);

    setTodoInput("");
  };

  return (
    <StyledForm>
      <form action="#" onSubmit={addTodo}>
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
