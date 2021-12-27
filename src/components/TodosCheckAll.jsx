import React, { useContext } from 'react';
import { TodosContext } from './context/TodosContext';



function TodosCheckAll() {
    const { todos,setTodos } = useContext(TodosContext);
    const checkAll = () => {
        const updatedTodos = todos.map((todo) => {
          todo.isComplete = true;
    
          return todo;
        });
    
        setTodos(updatedTodos);
      };
    return (
        <div>
           <a href="/#" onClick={checkAll} >Check All</a>
        </div>
    );
}

export default TodosCheckAll;