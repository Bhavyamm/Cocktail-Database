import React from 'react';
import Result from './Result';
import '../css/Results.css';

function Results({ results, openPopup, searchTerm }) {
    return (
        <div className = "results">
            
            <div className = "results__text">
                <h1 className = "results__title">{searchTerm}</h1>
                <hr className = "results__underline" />
            </div>
            
            <div className = "results__main">
                {results?.map(result => (
                    <Result key = {result.idDrink} result = {result} openPopup = {openPopup}/>
                ))}
            </div>
            
        </div>
    )
}

export default Results
