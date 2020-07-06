import React from 'react';
import { NavLink } from "react-router-dom";

function Lunchables() {
  return (
    <div>
      <h1>LUnchables</h1>
      <img src='https://images.heb.com/is/image/HEBGrocery/000139999' alt=''></img>
      <NavLink exact to="/">Home</NavLink>
    </div>
  )
}

export default Lunchables