import React from 'react';

const TodoItem = ({ data: { text, key, completed } }) => (
  <div>
    {text}
  </div>
);

export default TodoItem;
