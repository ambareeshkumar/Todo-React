import { useState } from 'react';
import TodoForm from './TodoForm';
import TodoList from './TodoList';


export default function TodoUI() {
  
  const [todos, setTodos] = useState([]);

  const addTodo = (text) => {
    setTodos([...todos, { text, completed: false }]);
  };

  const toogleTodo = (index)=>{
    const newTodos = [...todos]
    newTodos[index].completed = ! newTodos[index].completed;
    setTodos(newTodos)
  }

  const deleteTodo = (index)=>{
    const newTodos = [...todos];
    newTodos.splice(index,1)
    setTodos(newTodos)
  }

  return (
    <>
      <TodoForm  addTodo={addTodo}/>
      <TodoList data = {todos} toggleTodo={toogleTodo} deleteTodo={deleteTodo}/>
    </>
  )
}
