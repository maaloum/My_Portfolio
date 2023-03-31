import React from 'react';
import "bootstrap/js/src/collapse.js";
import './NavBar.css';

export default function NavBar() {
  return (
<nav className="navbar navbar-expand-lg bg-white">
  <a className="navbar-brand" href="/">
    <img src="./assets/logo.png"  alt="..."/>
  </a>
  <button class="navbar-toggler mx-3 "
  type="button"
   data-bs-toggle="collapse"
    data-bs-target="#navbarSupportedContent"
     aria-controls="navbarSupportedContent" 
     aria-expanded="false" aria-label="Toggle navigation">
     <i class="fa fa-bars navbar-collapse" aria-hidden="true"></i>
 </button>

  <div className="collapse navbar-collapse" id="navbarSupportedContent">
    <ul className="navbar-nav ms-auto me-5">
      <li className="nav-item">
        <a className="nav-link p-2 p-lg-3 " href="/">About Me</a>
      </li>
      <li className="nav-item">
        <a className="nav-link p-2 p-lg-3" href="/">Skills</a>
      </li>
      <li className="nav-item">
        <a className="nav-link p-2 p-lg-3" href="/">Projects</a>
      </li>
      <li className="nav-item ">
        <a className="nav-link p-2 p-lg-3 " href="/">Contact Me</a>
      </li>

    </ul>
  </div>
</nav>

  )
}
