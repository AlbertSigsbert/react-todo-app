import React from 'react';
import PropTypes from 'prop-types';

TodosCheckAll.propTypes = {
   checkAll: PropTypes.func.isRequired
}

function TodosCheckAll({checkAll}) {
    return (
        <div>
           <a href="/#" onClick={checkAll} >Check All</a>
        </div>
    );
}

export default TodosCheckAll;