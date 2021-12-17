import React from 'react';
import PropTypes from 'prop-types';

TodosCheckAll.propTypes = {
   checkAll: PropTypes.func.isRequired
}

function TodosCheckAll({checkAll}) {
    return (
        <div>
           <button onClick={checkAll} className="button">Check All</button>
        </div>
    );
}

export default TodosCheckAll;