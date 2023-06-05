import React from 'react';
import { AiOutlineCloseCircle } from 'react-icons/ai';

function DeleteIcon({ onClick }) {
    return (
        <span className='span-icon-close'
            onClick={onClick}
        >
            <AiOutlineCloseCircle />
        </span>
    )
}

export {
    DeleteIcon
}