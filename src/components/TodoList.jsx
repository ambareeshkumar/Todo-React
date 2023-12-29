/* eslint-disable react/prop-types */
// src/components/TodoList.js
// import React from 'react';
// import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';
import './TodoList.css'; // Update or create a new CSS file for TodoList styling

const TodoItem = ({ todo, toggleTodo, deleteTodo }) => {
  return (
    <li className={`todo-item ${todo.completed ? 'completed' : ''}`}>
      <div className="todo-content">
        <span onClick={() => toggleTodo()}>{todo.text}</span>
        <IconButton color="secondary" onClick={() => deleteTodo()}>
          <DeleteIcon />
        </IconButton>
      </div>
    </li>
  );
};

const TodoList = ({ data, toggleTodo, deleteTodo }) => {
  return (
    <ul className="todo-list">
      {data.map((todo, index) => (
        <TodoItem key={index} todo={todo} toggleTodo={() => toggleTodo(index)} deleteTodo={() => deleteTodo(index)} />
      ))}
    </ul>
  );
};

export default TodoList;
