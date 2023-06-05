import './TodoCounter.css'

function TodoCounter({ completedTodos, totalTodos }) {
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