import React from "react";
import PropTypes from 'prop-types';

TodosClearCompleted.propTypes = {
   clearCompleted: PropTypes.func.isRequired
}

function TodosClearCompleted({clearCompleted}) {
  return (
    <div>
      <a href="/#" onClick={clearCompleted} >Clear completed</a>
    </div>
  );
}

export default TodosClearCompleted;
