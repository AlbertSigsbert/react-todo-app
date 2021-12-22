import React, { useState } from "react";
import PropTypes from "prop-types";
import TodosRemaining from "./TodosRemaining";
import TodosClearCompleted from "./TodosClearCompleted";
import TodosCheckAll from "./TodosCheckAll";
import TodoFilters from "./TodoFilters";
import { StyledList } from "./styled/List.styled";
import {  StyledControllers } from "./styled/Controllers.styled";
import { StyledFiltersContainer } from "./styled/FiltersContainer.styled";

TodoList.propTypes = {
  todos: PropTypes.array.isRequired,
  todosFiltered: PropTypes.func.isRequired,
  completeTodo: PropTypes.func.isRequired,
  markAsEditing: PropTypes.func.isRequired,
  updateTodo: PropTypes.func.isRequired,
  cancelEditing: PropTypes.func.isRequired,
  deleteTodo: PropTypes.func.isRequired,
  remaining: PropTypes.func.isRequired,
  clearCompleted: PropTypes.func.isRequired,
  checkAll: PropTypes.func.isRequired,
};

function TodoList({
  todosFiltered,
  completeTodo,
  markAsEditing,
  updateTodo,
  cancelEditing,
  deleteTodo,
  remaining,
  clearCompleted,
  checkAll,
}) {
  const [filter, setFilter] = useState("all");
  return (
    <>
      <StyledList>
        {todosFiltered(filter).map((todo) => (
          <li key={todo.id}>
            <div>
              <input
                type="checkbox"
                onChange={() => completeTodo(todo.id)}
                checked={todo.isComplete ? true : false}
               
              />
              {!todo.isEditing ? (
                <span
                  onDoubleClick={() => markAsEditing(todo.id)}
                  className={todo.isComplete ? "line-through" : ""}
                >
                  {todo.title}
                </span>
              ) : (
                <input
                  type="text"
                  className="todo-item-input"
                  defaultValue={todo.title}
                  onBlur={(event) => updateTodo(event, todo.id)}
                  onKeyDown={(event) => {
                    if (event.key === "Enter") {
                      updateTodo(event, todo.id);
                    } else if (event.key === "Escape") {
                      cancelEditing(todo.id);
                    }
                  }}
                  autoFocus
                />
              )}
            </div>
            <a href="/#" onClick={() => deleteTodo(todo.id)}>
              <img src="./images/icon-cross.svg" alt="icon-cross" />
            </a>
          </li>
        ))}

        <StyledControllers>
          <TodosRemaining remaining={remaining} />
          <TodosCheckAll checkAll={checkAll} />
          <TodosClearCompleted clearCompleted={clearCompleted} />
        </StyledControllers>

        <StyledFiltersContainer>
          <TodoFilters filter={filter} setFilter={setFilter} />
        </StyledFiltersContainer>
      </StyledList>
    </>
  );
}

export default TodoList;
