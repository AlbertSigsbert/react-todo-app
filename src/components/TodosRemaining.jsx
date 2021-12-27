import React, { useContext } from "react";
import { TodosContext } from "./context/TodosContext";

function TodosRemaining() {
  const { todos } = useContext(TodosContext);
  const remaining = () => {
    return todos.filter((todo) => !todo.isComplete).length;
  };
  return <span>{remaining()} items remaining</span>;
}

export default TodosRemaining;
