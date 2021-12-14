import React from "react";
import addTodoSvg from "../img/addTodo.svg";

function NoTodos() {
  return (
    <div className="no-todos-container">
      <img src={addTodoSvg} alt="Add Todo Svg"/>
      <p>Add some todos ...</p>
    </div>
  );
}

export default NoTodos;
