import React from 'react';
import './TodoForm.css';
import { TodoContext } from '../Context/TodoContext';

function TodoForm() {

    const {
        setOpenModal,
        addTodo
    } = React.useContext(TodoContext);

    // estado local
    const [newTodo, setNewTodo] = React.useState('');

    const onSubmit = (e) => {
        e.preventDefault();
        setOpenModal(false);
    }

    const onCalcel = () => {
        setOpenModal(false);
    }

    const onChange = (e) => {
        setNewTodo(e.target.value);
    }

    const onClick = () => {
        if (newTodo.trim().length > 0) addTodo(newTodo);
    }

    return (
        <div className="formContent">
            <form onSubmit={onSubmit}>
                <label>Qué tarea quieres agregar?</label>
                <textarea placeholder='Escribe tu tarea aquí' value={newTodo} onChange={onChange} required/>
                <div className='todoForm--btnContainer'>
                    <button className='btn btn-cancel' onClick={onCalcel}>Cancelar</button>
                    <button className='btn btn-add' onClick={onClick}>Agregar</button>
                </div>
            </form>
        </div>
    )
}

export{
    TodoForm
}