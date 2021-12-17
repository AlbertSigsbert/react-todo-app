import React, { useState } from "react";
import PropTypes from "prop-types";
import TodosRemaining from "./TodosRemaining";
import TodosClearCompleted from "./TodosClearCompleted";
import TodosCheckAll from "./TodosCheckAll";
import TodoFilters from "./TodoFilters";


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

  const [filter, setFilter] = useState('all');
  return (
    <>
      <ul className="todo-list">
        { todosFiltered(filter).map((todo) => (
          <li key={todo.id} className="todo-item-container">
            <div className="todo-item">
              <input
                type="checkbox"
                onChange={() => completeTodo(todo.id)}
                checked={todo.isComplete ? true : false}
              />
              {!todo.isEditing ? (
                <span
                  onDoubleClick={() => markAsEditing(todo.id)}
                  className={`todo-item-label ${
                    todo.isComplete ? "line-through" : ""
                  }`}
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
            <button onClick={() => deleteTodo(todo.id)} className="x-button">
              <svg
                className="x-button-icon"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </li>
        ))}
      </ul>
      <div className="check-all-container">
       <TodosCheckAll checkAll={checkAll}  />

        <TodosRemaining remaining={remaining} />
      </div>
      <div className="other-buttons-container">
         <TodoFilters filter={filter}  setFilter={setFilter}/>
        <TodosClearCompleted clearCompleted={clearCompleted} />
      </div>
    </>
  );
}

export default TodoList;
