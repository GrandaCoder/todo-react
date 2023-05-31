import './TodoCounter.css'

function TodoCounter({ completedTodos, totalTodos }) {
    return (
      <h1>
        Has completado {completedTodos} de {totalTodos} TODOS
      </h1>
    )
  }

export { TodoCounter }