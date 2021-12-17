import React from 'react';
import PropTypes from 'prop-types';


TodosRemaining.propTypes = {
    remaining: PropTypes.func.isRequired
}


function TodosRemaining({remaining}) {
    return (
        <span>{remaining()} items remaining</span>
    );
}

export default TodosRemaining;