import React from 'react';
import './TodoCounter.css'
import { TodoContext } from '../Context/TodoContext';

function TodoCounter() {
   const { totalTodos, numberOfDoneTodos: completedTodos } = React.useContext(TodoContext);

    const mesajeFelicitaciones = `Felicitaciones 🎉 🥳`
    const mesajeHasCompletado = `has completado ${completedTodos} de ${totalTodos}`
    const todoMesage = (completedTodos === totalTodos) ? mesajeFelicitaciones: mesajeHasCompletado;
    return (
      <h1>
        {todoMesage}
      </h1>
    )
  }

export { TodoCounter }