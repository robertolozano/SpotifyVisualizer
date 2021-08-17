import React from 'react'
import '../App.css'
import { NavLink } from 'react-router-dom'


export default function Nav() {
  return (
    <nav className="row justify-end navbar">
        <ul className="row space-around">
            <NavLink 
                className="nav-button"
                to='/' 
                exact
            >
                Home
            </NavLink>
             <NavLink 
                className="nav-button"
                to='/about' 
            >
                About
            </NavLink>
        </ul>
    </nav>
  );
}