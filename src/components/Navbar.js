import { NavLink } from "react-router-dom";

export const NavBar = () => {
  return (
    <div className="navbar">
      <NavLink to="/reduxadd">Redux Dodaj Przepis </NavLink>---
      <NavLink to="/reduxlist"> Redux Lista</NavLink>
    </div>
  );
};
