import React, { useState } from 'react';
import Results from './components/Results';
import Popup from './components/Popup';
import Nav from './components/Nav';
import Carousel from './components/Carousel';
import Body from './components/Body';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import axios from 'axios';
import './App.css';

function App() {

  const [state, setState] = useState({
    s: "",
    results: [],
    selected: {}
  });

  const url = "https://www.thecocktaildb.com/api/json/v1/1/";

  const search = e => {
    if(e.key === "Enter") {
      axios(url + "search.php" + "?s=" + state.s)
        .then(({ data }) => {
          setState(prevState => {
            return {
              ...prevState,
              results: data.drinks
            }
          });
        })
    }
  }


  const handleInput = e => {
    setState(prevState => {
      return {
        ...prevState,
        s: e.target.value
      }
    })
  }

  const openPopup = id => {
    axios(url + "lookup.php?" + "i=" + id)
      .then(({ data }) => {

        setState(prevState => {
          return {
            ...prevState,
            selected: data.drinks[0]
          }
        })
      });
  }

  const closePopup = () => {
    setState(prevState => {
      return { ...prevState, selected: {} }
    });
  }

  return (
    <div className="App">
      <main>
        <Router>
          <Switch>

            <Route path = "/search">
              {(typeof state.selected.strDrink != "undefined") ? <Popup selected={state.selected} closePopup = {closePopup}/> : ""}
            </Route>

            <Route path = "/">
              <Nav search = {search} handleInput = {handleInput}/>
              
              { state.results?.length === 0 ? <Body /> : <Results searchTerm = {state.s} results = {state.results} openPopup = {openPopup}/>}
            </Route>
              
          </Switch>
        
        </Router>
        
      </main>
    </div>
  );
}

export default App;
