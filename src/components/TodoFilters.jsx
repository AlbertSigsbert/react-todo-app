import React, { useContext } from "react";
import { TodosContext } from "./context/TodosContext";

function TodoFilters() {

  const { filter, setFilter } = useContext(TodosContext);
  return (
    <div>
      <a href="/#" onClick={() => setFilter('all')} className={ filter === 'all' ? "filter-active" :""}>All</a>
      <a href="/#" onClick={() => setFilter('active')} className={  filter === 'active' ? "filter-active" :"" }>Active</a>
      <a href="/#" onClick={() => setFilter('completed')} className={  filter === 'completed' ? "filter-active" :"" }>Completed</a>
    </div>
  );
}

export default TodoFilters;
