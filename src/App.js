import logo from './platzi.webp';
import { TodoCounter } from './TodoCounter';
import { TodoSearch } from './TodoSearch';
import { TodoList } from './TodoList';
import { TodoItem } from './TodoItem';
import { CreateTodoButton } from './CreateTodoButton';
import React from 'react';


const todoInformation = [
  {
    id: 1,
    text: 'Tarea 1',
    done: false
  },
  {
    id: 2,
    text: 'Tarea 2',
    done: true
  },
  {
    id: 3,
    text: 'Tarea 3',
    done: false
  }
]
//
function App() {
  return (
    <React.Fragment>
      <TodoCounter completedTodos={3} totalTodos={10}/>
      <TodoSearch />

      <TodoList>
        {todoInformation.map(todo => (
          <TodoItem key={todo.id} text={todo.text} done={todo.done}/>
        ))}
      </TodoList>

    {/* min 9.20 */}
      <CreateTodoButton/>
    </React.Fragment>
  );
}

export default App;
