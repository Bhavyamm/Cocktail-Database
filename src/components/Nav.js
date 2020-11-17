import React from 'react';
import header_image from '../header_image.svg';
import '../css/Nav.css';

function Nav({ search, handleInput }) {
    return (
        <div className = "nav">
            <div className = "nav__main">
                <h1 className = "nav__logo">
                    Cocktail Database
                </h1>

                <div className = "container">
                    <input type = "text" placeholder = "Search..." className = "search__input" onKeyPress = {search} onChange = {handleInput}/>
                    <div className = "search" />
                </div>
            </div>
            <div className="nav__header">
                <div className="nav__container">
                    <div>
                        <h1 className = "nav__text">Make your favorite drink right away!</h1>
                    </div>
                    <img className = "nav__headerImage" src={header_image} alt="" />
                </div>
            </div>
        </div>
    )
}

export default Nav;
