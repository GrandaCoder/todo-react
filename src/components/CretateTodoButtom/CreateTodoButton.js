import React from 'react';
import { TodoContext } from '../Context/TodoContext';

import './CreateTodoButton.css';
function CreateTodoButton() {
    const {openModal, setOpenModal } = React.useContext(TodoContext);
    return (
        <button onClick={
            (event) => {
                setOpenModal(!openModal);
                // console.log('clicked');
                // console.log(event);
                // console.log(event.target);
            }
        }>
            +
        </button>
    )
}

export {
    CreateTodoButton
}