import React from 'react';
import { useHistory } from 'react-router-dom';
import '../css/Result.css';

function Result({ result, openPopup}) {

    const history = useHistory();

    return (
        <div className = "result" onClick = {() => openPopup(result.idDrink)}>
            <img className = "result__image" src = {result.strDrinkThumb} onClick = {() => history.push('/search')}/>
            <h3 className = "result__title" onClick = {() => history.push('/search')}>{result.strDrink}</h3>
        </div>
        
    )
}

export default Result
