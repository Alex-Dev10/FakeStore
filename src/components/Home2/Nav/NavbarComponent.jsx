import React from 'react';
import './Navbar.css';
import Logo from './Recursos/Logo.png';
import 'bootstrap/dist/css/bootstrap.min.css';

function NavbarComponent() {
  return (
    <div className="containerNavbar">

      <img className="image" src={Logo} alt="" />

      <ul className="navbar-nav">
       
        <li className="nav-item">
          <a className="nav-link" href="#">
            Products
          </a>
        </li>

        <li className="nav-item">
          <a className="nav-link" href="#">
            Categories
          </a>
        </li>




      </ul>

    </div>
  );
}

export default NavbarComponent;
