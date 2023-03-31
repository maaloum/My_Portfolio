import React from 'react';
import 'bootstrap/js/src/collapse.js';
import './NavBar.css'

export default function NavBar() {
  return (
    <>
<nav className="navbar navbar-expand-lg bg-white">
  <a className="navbar-brand lead fs-4 fw-bolder mx-2" href="/">MaaloumWebDev</a>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>

  <div className="collapse navbar-collapse" id="navbarSupportedContent">
    <ul className="navbar-nav ms-auto me-5">
      <li className="nav-item">
        <a className="nav-link " href="/">About Me</a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="/">Skills</a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="/">Projects</a>
      </li>
      <li className="nav-item ">
        <a className="nav-link " href="/">Contact Me</a>
      </li>

    </ul>
  </div>
</nav>
    </>
  )
}
