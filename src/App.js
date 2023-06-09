import { TodoCounter } from './components/TodoCounter/TodoCounter';
import { TodoSearch } from './components/TodoSearch/TodoSearch';
import { TodoList } from './components/TodoList/TodoList';
import { TodoItem } from './components/TodoItem/TodoItem';
import { CreateTodoButton } from './components/CretateTodoButtom/CreateTodoButton';
import React, { useState } from 'react';



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
function useLocalStorage() {
  
}

function App() {
  const [todos, setTodos] = useState(() => {
    return JSON.parse(localStorage.getItem('todos_v1') ) || []}
    )

  const [searchValue, setSearchValue] = React.useState('');
  console.log(`set todos: ${setTodos}`);

  const todosFiltered = todos.filter(todo => {
    const textoAnalizado = todo.text.toLowerCase();
    const textoBuscado = searchValue.toLowerCase();
    return textoAnalizado.includes(textoBuscado);
  });

  const numberOfDoneTodos = todos.filter(todo => todo.done).length;
  const totalTodos = todos.length;

  const completeTodo = (id) => {
    const newTodos = [...todos];
    const todoIndex = newTodos.findIndex(todo => todo.id === id);
    newTodos[todoIndex].done = !newTodos[todoIndex].done;
    localStorage.setItem('todos_v1', JSON.stringify(newTodos));
    setTodos(newTodos);
  }

  const deleteTodo = (id) => {
    const newTodos = [...todos];
    const todoIndex = newTodos.findIndex(todo => todo.id === id);
    newTodos.splice(todoIndex, 1);
    localStorage.setItem('todos_v1', JSON.stringify(newTodos));
    setTodos(newTodos);
  }

  return (
    <React.Fragment>
      <TodoCounter completedTodos={numberOfDoneTodos} totalTodos={totalTodos} />
      <TodoList>

        <TodoSearch
          searchValue={searchValue}
          setSearchValue={setSearchValue}
        />
        {todosFiltered.map(todo => (
          <TodoItem
            key={todo.id}
            text={todo.text}
            done={todo.done}
            // se le pasa una funcion que cuando se le hace click se ejecuta
            onComplete={() => completeTodo(todo.id)}
            onDelete={() => deleteTodo(todo.id)}
          />
        ))}
      </TodoList>
      <CreateTodoButton />
    </React.Fragment>
  );
}

export default App;
