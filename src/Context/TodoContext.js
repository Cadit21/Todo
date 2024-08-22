import { useContext, createContext } from "react";

// Create the TodoContext with a default value
export const TodoContext = createContext({
    todos: [
        {
            id: 1,
            todo: 'todomsg',
            completed: false,
        },
    ],
    addtodo: (todo) => {},
    updateTodo: (id, todo) => {},
    deleteTodo: (id) => {},
    Togglecomplete: (id) => {},
});

// Custom hook to use the TodoContext
export const useTodo = () => {
    return useContext(TodoContext);
};

// Provider component to wrap around the part of the app where context is needed
export const TodoProvider = TodoContext.Provider;
