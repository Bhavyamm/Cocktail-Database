import React from 'react';
import '../css/Result.css';

function Result({ result, openPopup }) {
    return (
        <div className = "result" onClick = {() => openPopup(result.idDrink)}>
            <img className = "result__image" src = {result.strDrinkThumb} />
            <h3 className = "result__title">{result.strDrink}</h3>
        </div>
    )
}

export default Result
