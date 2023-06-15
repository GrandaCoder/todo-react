import React from "react";
import { useLocalStorage } from "./userLocalStorage";

const TodoContext = React.createContext();

function TodoProvider({ children }) {
    const {
        item: todos,
        completeItem: completeTodo,
        deleteItem: deleteTodo,
        loading,
        error } = useLocalStorage('todos_v1', []);


    const [searchValue, setSearchValue] = React.useState('');
    const todosFiltered = todos.filter(todo => {
        const textoAnalizado = todo.text.toLowerCase();
        const textoBuscado = searchValue.toLowerCase();
        return textoAnalizado.includes(textoBuscado);
    });

    const numberOfDoneTodos = todos.filter(todo => todo.done).length;
    const totalTodos = todos.length;

    const [openModal, setOpenModal] = React.useState(false);

    return (
        <TodoContext.Provider value={{
            searchValue,
            setSearchValue,
            todos,
            completeTodo,
            deleteTodo,
            todosFiltered,
            numberOfDoneTodos,
            totalTodos,
            loading,
            error,
            openModal,
            setOpenModal
        }}>
            {children}
        </TodoContext.Provider>
    )
}

export {
    TodoContext,
    TodoProvider
}