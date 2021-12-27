import React, { useContext } from "react";
import { TodosContext } from "./context/TodosContext";


function TodosClearCompleted() {

  const { todos,setTodos } = useContext(TodosContext);

  const clearCompleted = () => {
    setTodos([...todos].filter((todo) => !todo.isComplete));
  };
  
  return (
    <div>
      <a href="/#" onClick={clearCompleted} >Clear completed</a>
    </div>
  );
}

export default TodosClearCompleted;
