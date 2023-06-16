import { TodoCounter } from '../TodoCounter/TodoCounter';
import { TodoSearch } from '../TodoSearch/TodoSearch';
import { TodoList } from '../TodoList/TodoList';
import { TodoItem } from '../TodoItem/TodoItem';
import { CreateTodoButton } from '../CretateTodoButtom/CreateTodoButton';
import { TodosLoading } from '../TodosLoading/TodosLoading';
import { EmptyTodos } from '../EmptyTodos/EmptyTodos';

import React from 'react';
import { Modal } from '../Modal/Modal';
import { TodoContext } from '../Context/TodoContext';
import { TodoForm } from '../TodoForm/TodoForm';


function AppUI() {
  const {
    error,
    loading,
    todos,
    todosFiltered,
    completeTodo,
    deleteTodo,
    openModal,
    setOpenModal
  } = React.useContext(TodoContext);

  return (
    // react fragment
    <>
      <TodoCounter />
      <TodoSearch />
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
      <CreateTodoButton />

      {
        openModal && (
          <Modal>
            <TodoForm />
          </Modal>
        )
      }
    </>
  );
}

export {
  AppUI
}