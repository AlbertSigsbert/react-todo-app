import { useState } from "react";
import { TodosContext } from "./context/TodosContext";
import { Helmet, HelmetProvider } from "react-helmet-async";
import NoTodos from "./NoTodos";
import TodoForm from "./TodoForm";
import TodoList from "./TodoList";
import TodoBg from "./TodoBg";
import Header from "./Header";
import useLocalStorage from "./hooks/useLocalStorage";
import { ThemeProvider } from "styled-components";
import "../css/reset.css";
import { GlobalStyles } from "./styled/GlobalStyle.styled";
import { darkTheme, lightTheme } from "./styled/Theme.styled";

function Todo() {
  const [todos, setTodos] = useLocalStorage("todos", []);

  const [idForTodo, setIdForTodo] = useLocalStorage("idForTodo", 1);

  const [filter, setFilter] = useState("all");

  const [theme, setTheme] = useLocalStorage("theme", "dark");

  const themeToggler = () => {
    theme === "dark" ? setTheme("light") : setTheme("dark");
  };

  return (
    <HelmetProvider>
      <ThemeProvider theme={theme === "dark" ? darkTheme : lightTheme}>
        <Helmet>
          <title>Todo App</title>
          <link rel="preconnect" href="https://fonts.googleapis.com"></link>
          <link rel="preconnect" href="https://fonts.gstatic.com"></link>
          <link
            href="https://fonts.googleapis.com/css2?family=Josefin+Sans:ital,wght@0,700;1,400&display=swap"
            rel="stylesheet"
          ></link>
        </Helmet>
        <main>
          <GlobalStyles />

          <TodoBg />
          <TodosContext.Provider
            value={{
              todos,
              setTodos,
              idForTodo,
              setIdForTodo,
              filter,
              setFilter,
            }}
          >
            <Header themeToggler={themeToggler} />

            <TodoForm />

            {todos.length > 0 ? <TodoList /> : <NoTodos />}
          </TodosContext.Provider>
        </main>
      </ThemeProvider>
    </HelmetProvider>
  );
}

export default Todo;
