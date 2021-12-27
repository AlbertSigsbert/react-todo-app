import React, { useContext} from "react";
import { TodosContext } from "./context/TodosContext";
import TodosRemaining from "./TodosRemaining";
import TodosClearCompleted from "./TodosClearCompleted";
import TodosCheckAll from "./TodosCheckAll";
import TodoFilters from "./TodoFilters";
import { StyledList } from "./styled/List.styled";
import { StyledControllers } from "./styled/Controllers.styled";
import { StyledFiltersContainer } from "./styled/FiltersContainer.styled";

function TodoList() {
  const { todos, setTodos, filter } = useContext(TodosContext);
  

  const completeTodo = (id) => {
    const updatedTodos = todos.map((todo) => {
      if (todo.id === id) {
        todo.isComplete = !todo.isComplete;
      }
      return todo;
    });

    setTodos(updatedTodos);
  };

  const updateTodo = (event, id) => {
    const updatedTodos = todos.map((todo) => {
      if (event.target.value.trim().length === 0) {
        todo.isEditing = false;
        return todo;
      }
      if (todo.id === id) {
        todo.title = event.target.value;
        todo.isEditing = false;
      }
      return todo;
    });

    setTodos(updatedTodos);
  };

  const markAsEditing = (id) => {
    const updatedTodos = todos.map((todo) => {
      if (todo.id === id) {
        todo.isEditing = true;
      }
      return todo;
    });

    setTodos(updatedTodos);
  };

  const cancelEditing = (id) => {
    const updatedTodos = todos.map((todo) => {
      if (todo.id === id) {
        todo.isEditing = false;
      }
      return todo;
    });

    setTodos(updatedTodos);
  };

  const deleteTodo = (id) => {
    setTodos([...todos].filter((todo) => todo.id !== id));
  };

  const todosFiltered = (filter) => {
    if (filter === "all") {
      return todos;
    } else if (filter === "active") {
      return todos.filter((todo) => !todo.isComplete);
    } else if (filter === "completed") {
      return todos.filter((todo) => todo.isComplete);
    }
  };

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
          <TodosRemaining />
          <TodosCheckAll />
          <TodosClearCompleted />
        </StyledControllers>

        <StyledFiltersContainer>
          <TodoFilters />
        </StyledFiltersContainer>
      </StyledList>
    </>
  );
}

export default TodoList;
