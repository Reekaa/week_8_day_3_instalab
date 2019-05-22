import React, { Component, Fragment } from 'react';
import ImageListContainer from './containers/ImageListContainer'
import './App.css';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import NavBar from './NavBar.js';
import FavouritesContainer from './containers/FavouritesContainer';

class App extends Component {
  render(){
    return(
      <Router>
        <Fragment>
          <div>
          <h1>INSTA--LAB!!!!</h1>
            <NavBar/>
              <Route
              path='/favourites'
              component={FavouritesContainer}
              />
              <Route
              exact path="/"
              component={ImageListContainer}
              />
          </div>
        </Fragment>
      </Router>
    );
  }
}

export default App;
