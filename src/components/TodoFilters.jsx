import React from "react";
import PropTypes from 'prop-types';

TodoFilters.propTypes = {
   filter:PropTypes.string.isRequired,
   setFilter:PropTypes.func.isRequired
}
function TodoFilters({ filter, setFilter }) {
  return (
    <div>
      <a href="/#" onClick={() => setFilter('all')} className={ filter === 'all' ? "filter-active" :""}>All</a>
      <a href="/#" onClick={() => setFilter('active')} className={  filter === 'active' ? "filter-active" :"" }>Active</a>
      <a href="/#" onClick={() => setFilter('completed')} className={  filter === 'completed' ? "filter-active" :"" }>Completed</a>
    </div>
  );
}

export default TodoFilters;
