import React from 'react';
import { Link } from 'react-router-dom';
import '../css/Popup.css';

function Popup({ selected, closePopup }) {
    return (
        <section className = "popup">
            <div className = "popup__content">
                <h2>{selected.strDrink}</h2>

                <div className = "popup__info">
                    <img src = {selected.strDrinkThumb} />
                    <div className = "popup__description">
                        
                        <h3>Ingredients</h3>
                        <div className = "popup__ingredients">
                            {selected.strIngredient1 != null || selected.strMeasure1 != null ? <p>1. {selected.strIngredient1} - {selected.strMeasure1}</p> : <p></p>}
                            {selected.strIngredient2 != null || selected.strMeasure2 != null ? <p>2. {selected.strIngredient2} - {selected.strMeasure2}</p> : <p></p>}
                            {selected.strIngredient3 != null || selected.strMeasure3 != null ? <p>3. {selected.strIngredient3} - {selected.strMeasure3}</p> : <p></p>}
                            {selected.strIngredient4 != null || selected.strMeasure4 != null ? <p>4. {selected.strIngredient4} - {selected.strMeasure4}</p> : <p></p>}
                            {selected.strIngredient5 != null || selected.strMeasure5 != null ? <p>5. {selected.strIngredient5} - {selected.strMeasure5}</p> : <p></p>}
                            {selected.strIngredient6 != null || selected.strMeasure6 != null ? <p>6. {selected.strIngredient6} - {selected.strMeasure6}</p> : <p></p>}
                            {selected.strIngredient7 != null || selected.strMeasure7 != null ? <p>7. {selected.strIngredient7} - {selected.strMeasure7}</p> : <p></p>}
                            {selected.strIngredient8 != null || selected.strMeasure8 != null ? <p>8. {selected.strIngredient8} - {selected.strMeasure8}</p> : <p></p>}
                            {selected.strIngredient9 != null || selected.strMeasure9 != null ? <p>9. {selected.strIngredient9} - {selected.strMeasure9}</p> : <p></p>}
                            {selected.strIngredient10 != null || selected.strMeasure10 != null ? <p>10. {selected.strIngredient10} - {selected.strMeasure10}</p> : <p></p>}
                            {selected.strIngredient11 != null || selected.strMeasure11 != null ? <p>11. {selected.strIngredient11} - {selected.strMeasure11}</p> : <p></p>}
                            {selected.strIngredient12 != null || selected.strMeasure12 != null ? <p>12. {selected.strIngredient12} - {selected.strMeasure12}</p> : <p></p>}
                            {selected.strIngredient13 != null || selected.strMeasure13 != null ? <p>13. {selected.strIngredient13} - {selected.strMeasure13}</p> : <p></p>}
                            {selected.strIngredient14 != null || selected.strMeasure14 != null ? <p>14. {selected.strIngredient14} - {selected.strMeasure14}</p> : <p></p>}
                            {selected.strIngredient15 != null || selected.strMeasure15 != null ? <p>15. {selected.strIngredient15} - {selected.strMeasure15}</p> : <p></p>}
                        </div>

                        <br />


                        <h3>How To Make {selected.strDrink}</h3>
                        <p>{selected.strInstructions}</p>
                        

                    </div>
                </div>
                <Link to = "/">
                    <button className="popup__close" onClick={closePopup}>Close</button>
                </Link>

            </div>
        </section>
    )
}

export default Popup;
