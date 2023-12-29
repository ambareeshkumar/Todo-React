import { useState } from 'react'
import todoIcon from '../assets/todoIcon.png'
import './TodoForm.css'

// eslint-disable-next-line react/prop-types
export default function TodoForm ({addTodo}){
    
    const [input, setInput] = useState(' ');

    const handleInputChange = (event)=>{
        setInput(event.target.value)
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        if (input.trim() !== '') {
          addTodo(input);
          setInput('');
        }
      };

    return (
        <>
        <img className = "icon"src= {todoIcon}/>
        <form className='container' onSubmit={handleSubmit}>
            <input className='input' placeholder='Type to remember' onChange={handleInputChange}/>        
            <button className='btn' type='submit'>Add </button>
        </form>
        </>
    )
}