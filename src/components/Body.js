import React from 'react';
import { ReactComponent as Lemonade } from '../lemonade.svg';
import { ReactComponent as Cocktail } from '../cocktail.svg';
import { ReactComponent as Coffee } from '../coffee.svg';
import Facts from './Facts';
import '../css/Body.css';

function Body() {
    return (
        <div>
            <div className = "body">

            <div className = "body__container">
                <Lemonade className = "body__image"/>
                <p className = "body__text">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
            </div>

            <div className = "body__container">
                <p className = "body__text">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                <Cocktail className = "body__imageInverted"/>
            </div>

            <div className = "body__container">
                <Coffee className = "body__image"/>
                <p className = "body__text">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
            </div>

            </div>

            <Facts />
        </div>
        
    )
}

export default Body
