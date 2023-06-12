
import { TodoCounter } from '../TodoCounter/TodoCounter';
import { TodoSearch } from '../TodoSearch/TodoSearch';
import { TodoList } from '../TodoList/TodoList';
import { TodoItem } from '../TodoItem/TodoItem';
import { CreateTodoButton } from '../CretateTodoButtom/CreateTodoButton';


function AppUI({searchValue,
   setSearchValue, 
   todos, 
   completeTodo, 
   deleteTodo,
   todosFiltered, 
   numberOfDoneTodos, 
   totalTodos,
   loading,
   error}) {
    return (
        // react fragment
        <> 
          <TodoCounter completedTodos={numberOfDoneTodos} totalTodos={totalTodos} />
          <TodoList>
              {loading && <p>Cargando...</p>}
              {error && <p>Hubo un error</p>}
              {(!loading && todos.length === 0) && <p>No hay tareas</p>}

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
        </>
      );
}

export{
    AppUI
}