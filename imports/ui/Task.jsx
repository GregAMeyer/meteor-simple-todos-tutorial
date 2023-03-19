import React from 'react';

export const Task = ({ task, onCheckboxClick, onDeleteClick }) => {
  return (
    <li>
      <input
        type="checkbox"
        checked={!!task.isChecked}
        onClick={() => onCheckboxClick(task)}
        readOnly //not sure what this really does here
      />
      <span>{task.text}</span>

      <button onClick={ () => onDeleteClick(task) }>&times;</button>
    </li>
  );
};