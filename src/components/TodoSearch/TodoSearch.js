import React from 'react';
import './TodoSearch.css';
import { TodoContext } from '../Context/TodoContext';

function TodoSearch() {

    const { searchValue, setSearchValue } = React.useContext(TodoContext);
    
    return (
        <input
            type="text"
            placeholder="Buscar"
            className='TodoSearch'
            value={searchValue}
            onChange={
                (e) => {
                    setSearchValue(e.target.value);
                }
            }
        />
    )
}

export { TodoSearch }