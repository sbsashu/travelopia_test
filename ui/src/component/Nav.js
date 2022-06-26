import React from "react";
import {
    NavLink
  } from "react-router-dom";


const Nav = () => {
     

    return (
        <nav className="navbar navbar-expand-lg  navbar-dark bg-dark">
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav mr-auto">
                    <li className="nav-item">
                        <NavLink className="nav-link" to="/">Travel Detail</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink className="nav-link" to="/list">All Traveler</NavLink>
                    </li>
                    </ul>
                </div>
            </nav>
    )
}

export default Nav;