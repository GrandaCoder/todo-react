
import { TodoCounter } from '../TodoCounter/TodoCounter';
import { TodoSearch } from '../TodoSearch/TodoSearch';
import { TodoList } from '../TodoList/TodoList';
import { TodoItem } from '../TodoItem/TodoItem';
import { CreateTodoButton } from '../CretateTodoButtom/CreateTodoButton';
import { TodosLoading } from '../TodosLoading/TodosLoading';
import { EmptyTodos } from '../EmptyTodos/EmptyTodos';

import { TodoContext } from '../TodoContext/TodoContext';


function AppUI() {
  return (
    // react fragment
    <>
      <TodoCounter />
      <TodoSearch />

      <TodoContext.Consumer>
        {({ loading, error, todos , completeTodo, deleteTodo, todosFiltered}) => (
                  <TodoList>
                  {loading && <><TodosLoading /> <TodosLoading /><TodosLoading /> </>}
                  {error && <p>Hubo un error</p>}
                  {(!loading && todos.length === 0) && <EmptyTodos />}
        
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
        )}
      </TodoContext.Consumer>

      <CreateTodoButton />
    </>
  );
}

export {
  AppUI
}