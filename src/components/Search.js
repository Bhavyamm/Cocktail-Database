import React from 'react';
import '../css/Search.css';

function Search({ search, handleInput }) {
    return (
        <div className = "container">
            <input type = "text" placeholder = "Search..." className = "search__input" onKeyPress = {search} onChange = {handleInput}/>
            <div className = "search" />
        </div>
    )
}

export default Search;
