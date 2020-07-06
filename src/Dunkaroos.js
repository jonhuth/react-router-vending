import React from 'react';
import { NavLink } from "react-router-dom";
function Dunkaroos() {
  return (
    <div>
      <h1>Dunkarooooosss</h1>
      <img src='https://media.tegna-media.com/assets/WBNS/images/b7bdd620-ab04-4335-89ae-7f32ed4c9cbe/b7bdd620-ab04-4335-89ae-7f32ed4c9cbe_750x422.jpg' alt=''></img>
      <NavLink exact to="/">Home</NavLink>
    </div>
  )
}

export default Dunkaroos;