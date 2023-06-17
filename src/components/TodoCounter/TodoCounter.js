import React from 'react';
import './TodoCounter.css'
import { TodoContext } from '../Context/TodoContext';

function TodoCounter() {
   const { totalTodos, numberOfDoneTodos: completedTodos } = React.useContext(TodoContext);

    const mesajeFelicitaciones = `Felicitaciones 🎉 🥳`
    const mensajeNoTodos = `No hay tareas TODO 😔`
    const mesajeHasCompletado = `Has completado ${completedTodos} de ${totalTodos}`
    //const todoMesage = (completedTodos === totalTodos) ? mesajeFelicitaciones: mesajeHasCompletado;
    
    let todoMesage = ''; 
    if(totalTodos === 0){
      todoMesage = mensajeNoTodos
    }else if(completedTodos === totalTodos){
      todoMesage = mesajeFelicitaciones
    }else{
      todoMesage = mesajeHasCompletado
    }

    return (
      <h1>
        {todoMesage}
      </h1>
    )
  }



export { TodoCounter }