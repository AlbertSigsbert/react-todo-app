import { useState } from "react";
import { Helmet, HelmetProvider } from "react-helmet-async";
import NoTodos from "./NoTodos";
import TodoForm from "./TodoForm";
import TodoList from "./TodoList";
import { ThemeProvider } from "styled-components";
import "../css/reset.css";
import "../css/Todo.css";
import { GlobalStyles } from "./styled/GlobalStyle.styled";
import TodoBg from "./TodoBg";
import { darkTheme, lightTheme } from "./styled/Theme.styled";
import Header from "./Header";

function Todo() {
  const [todos, setTodos] = useState([
    {
      id: 1,
      title: "Read a book",
      isComplete: false,
      isEditing: false,
    },
    {
      id: 2,
      title: "Pickup kids from school",
      isComplete: true,
      isEditing: false,
    },
    {
      id: 3,
      title: "Walk the dog",
      isComplete: false,
      isEditing: false,
    },
  ]);

  const [idForTodo, setIdForTodo] = useState(4);

  const [ theme, setTheme] = useState('dark');

  const themeToggler = () => {
    theme === 'dark' ? setTheme('light') : setTheme('dark');
  }

  const addTodo = (todo) => {
    setTodos([...todos, { id: idForTodo, title: todo, isComplete: false }]);

    setIdForTodo((prevId) => prevId + 1);
  };

  const deleteTodo = (id) => {
    setTodos([...todos].filter((todo) => todo.id !== id));
  };

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

  const todosRemaining = () => {
    return todos.filter((todo) => !todo.isComplete).length;
  };

  const clearCompleted = () => {
    setTodos([...todos].filter((todo) => !todo.isComplete));
  };

  const markAllAsCompleted = () => {
    const updatedTodos = todos.map((todo) => {
      todo.isComplete = true;

      return todo;
    });

    setTodos(updatedTodos);
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
    <HelmetProvider>
      <ThemeProvider theme={theme === 'dark' ? darkTheme : lightTheme}>
        <Helmet>
          <title>Todo App</title>
          <link rel="preconnect" href="https://fonts.googleapis.com"></link>
          <link
            rel="preconnect"
            href="https://fonts.gstatic.com"
            crossorigin
          ></link>
          <link
            href="https://fonts.googleapis.com/css2?family=Josefin+Sans:ital,wght@0,700;1,400&display=swap"
            rel="stylesheet"
          ></link>
        </Helmet>

        <GlobalStyles />

        <TodoBg/>

            <Header themeToggler={themeToggler} />

            <TodoForm addTodo={addTodo} />

            {todos.length > 0 ? (
              <TodoList
                todos={todos}
                completeTodo={completeTodo}
                markAsEditing={markAsEditing}
                updateTodo={updateTodo}
                cancelEditing={cancelEditing}
                deleteTodo={deleteTodo}
                remaining={todosRemaining}
                clearCompleted={clearCompleted}
                checkAll={markAllAsCompleted}
                todosFiltered={todosFiltered}
              />
            ) : (
              <NoTodos />
            )}
          
        
      </ThemeProvider>
    </HelmetProvider>
  );
}

export default Todo;
