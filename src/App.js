import React from 'react';
import {BrowserRouter, Route, NavLink} from "react-router-dom";
import VendingMachine from './VendingMachine';
import Oreos from './Oreos';
import Dunkaroos from './Dunkaroos';
import Lunchables from './Lunchables';
import './App.css';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Route exact path="/oreos">
          <Oreos />
        </Route>
        <Route exact path="/dunkaroos">
          <Dunkaroos />
        </Route>
        <Route exact path="/lunchables">
          <Lunchables />
        </Route>
        <Route exact path="/">
          <VendingMachine />  
        </Route>
      </BrowserRouter>      
    </div>
  );
}

export default App;
