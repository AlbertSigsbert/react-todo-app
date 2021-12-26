import React from "react";
import addTodoSvg from "../img/addTodo.svg";
import { StyledNoTodos } from "./styled/NoTodos.styled";

function NoTodos() {
  return (
    <StyledNoTodos>
      <img src={addTodoSvg} alt="Add Todo Svg" />
      <p>Add some todos ...</p>
    </StyledNoTodos>
  );
}

export default NoTodos;
