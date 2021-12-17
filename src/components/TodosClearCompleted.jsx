import React from "react";
import PropTypes from 'prop-types';

TodosClearCompleted.propTypes = {
   clearCompleted: PropTypes.func.isRequired
}

function TodosClearCompleted({clearCompleted}) {
  return (
    <div>
      <button onClick={clearCompleted} className="button">Clear completed</button>
    </div>
  );
}

export default TodosClearCompleted;
