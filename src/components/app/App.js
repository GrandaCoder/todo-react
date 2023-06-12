import React from 'react';
import { AppUI } from './AppUI';
import { useLocalStorage } from './userLocalStorage';



// const todoDefault = [
//   {
//     id: 1,
//     text: 'Cortar cebolla',
//     done: false
//   },
//   {
//     id: 2,
//     text: 'la tarea de ingles',
//     done: true
//   },
//   {
//     id: 3,
//     text: 'Estados derivados',
//     done: false
//   },
//   {
//     id: 4,
//     text: 'Repasar duolingo',
//     done: true
//   },{
//     id: 5,
//     text: 'Estudiar React',
//     done: false
//   }
// ]

// localStorage.setItem('todos_v1', JSON.stringify(todoDefault));
// localStorage.removeItem('todos_v1');


function App() {
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


  return (
    <AppUI
      loading={loading}
      error={error}
      searchValue={searchValue}
      setSearchValue={setSearchValue}
      todos={todos}
      completeTodo={completeTodo}
      deleteTodo={deleteTodo}
      todosFiltered={todosFiltered}
      numberOfDoneTodos={numberOfDoneTodos}
      totalTodos={totalTodos}
    />
  )
}

export default App;
