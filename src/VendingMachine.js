import React from 'react';
import { NavLink } from "react-router-dom";


function VendingMachine() {
  return (
    <div className="VendingMachine">
      <NavLink exact to="/oreos">Oreos</NavLink>
      <NavLink exact to="/dunkaroos">Dunkaroos</NavLink>
      <NavLink exact to="/lunchables">Lunchables</NavLink>
      <h1>welcome to our vending machine</h1>
      <img src="https://sc01.alicdn.com/kf/UT8WWkgXZFaXXagOFbXt/205728887/UT8WWkgXZFaXXagOFbXt.jpg_.webp" alt=""></img>
    </div>
  )
}

export default VendingMachine;
