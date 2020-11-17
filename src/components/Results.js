import React from 'react';
import Result from './Result';
import '../css/Results.css';

function Results({ results, openPopup }) {
    return (
        <div className = "results">
            {results?.map(result => (
                <Result key = {result.idDrink} result = {result} openPopup = {openPopup}/>
            ))}
        </div>
    )
}

export default Results
