import React from 'react';

export default (props) => (
  <input
    value={props.inputValue}
    onChange={(e) => props.textChange(e.target.value)}
    onKeyDown={(e) => { if (e.which === 13) { props.addToList(props.inputValue); } }}
  />
);
