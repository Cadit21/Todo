import React, { useState } from 'react';
import { useTodo } from '../Context/TodoContext';

function TodoForm() {
    const [todo, setTodo] = useState(''); // Initialize with an empty string
    const { addtodo } = useTodo(); // Correctly invoke useTodo as a function

    const add = (e) => {
        e.preventDefault(); // Fix typo here
        if (!todo.trim()) return; // Ensure todo is not empty or just whitespace

        addtodo({ todo, completed: false });    
        setTodo(''); // Reset todo to an empty string
    };

    return (
        <form onSubmit={add} className='flex'>
            <input
                type="text"
                placeholder='Write Todo...'
                className='w-full border border-black/10 rounded-l-lg px-3 outline-none duration-150 bg-white/20 py-1.5'
                value={todo}
                onChange={(e) => setTodo(e.target.value)}
            />
            <button
                type="submit"
                className='rounded-r-lg px-3 py-1 bg-green-600 text-white shrink-0'
            >
                Add
            </button>
        </form>
    );
}

export default TodoForm;
