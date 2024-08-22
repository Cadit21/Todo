import logo from './logo.svg';
import { TodoProvider, useTodo } from './Context/TodoContext';
import { useEffect, useState } from 'react';
import TodoForm from './Components/TodoForm';
import Todoitem from './Components/Todoitem';


function App() {
  const [Todos, setTodos] = useState([]);

  const addtodo = (todo) => {
      setTodos((prev) => [{ id: Date.now(), ...todo }, ...prev]);
  };
  
  const updateTodo = (id, updatedTodo) => {
      setTodos((prev) => 
          prev.map((todo) => 
              todo.id === id ? { ...todo, ...updatedTodo } : todo
          )
      );
  };
  
  const deletetodo = (id) => {
      setTodos((prev) => prev.filter((todo) => todo.id !== id));
  };
  
  const Togglecomplete = (id) => {
      setTodos((prev) =>
          prev.map((todo) =>
              todo.id === id ? { ...todo, completed: !todo.completed } : todo
          )
      );
  };


  
  useEffect(() => {
    const todos = JSON.parse(localStorage.getItem('Todos'));
    if (todos && todos.length > 0) {
      setTodos(todos);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('Todos', JSON.stringify(Todos));
  }, [Todos]);

    
  
  return (

    

    <TodoProvider value={{addtodo,updateTodo,deletetodo,Togglecomplete,Todos}}>
    <div className="App">
    <div className="  bg-[#CADCFC]  min-h-screen py-8">
                <div className="w-full max-w-2xl bg-[#00246B] mx-auto shadow-md rounded-lg px-4 py-3 text-white">
                    <h1 className="text-2xl font-bold text-center mb-8 mt-2">Todos</h1>
                    <div className="mb-4">
                        {/* Todo form goes here */} 
                        <TodoForm />
                    </div>
                    <div className="flex flex-wrap gap-y-3">
                        {/*Loop and Add TodoItem here */}
                        {Todos.map((todo) => (
                          <div key={todo.id}
                          className='w-full'
                          >
                            <Todoitem todo={todo} />
                          </div>
                        ))}
                    </div>
                </div>
            </div>
    </div>
    </TodoProvider>
 
  );
}

export default App;
