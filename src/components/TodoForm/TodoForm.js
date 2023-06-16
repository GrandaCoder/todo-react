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
        addTodo(newTodo);
    }

    return (
        <div className="formContent">
            <form onSubmit={onSubmit}>
                <label>What needs to be done?</label>
                <textarea placeholder='What needs to be done' value={newTodo} onChange={onChange} />
                <div className='todoForm--btnContainer'>
                    <button className='btn btn-cancel' onClick={onCalcel}>Cancel</button>
                    <button className='btn btn-add' onClick={onClick}>Add</button>
                </div>
            </form>
        </div>
    )
}

export{
    TodoForm
}