import React from 'react';
import TodoItem from './todoItem';

const TodoList = ({ listOfItems }) => (
  <div>
    {listOfItems.map((eachItem) => <TodoItem data={eachItem} />)}
  </div>
);

export default TodoList;
