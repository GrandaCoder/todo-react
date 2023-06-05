import React from 'react';
import './TodoSearch.css';

function TodoSearch({ searchValue, setSearchValue }) {
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