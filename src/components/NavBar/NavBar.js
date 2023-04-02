import React from 'react';
import "bootstrap/js/src/collapse.js";
import './NavBar.css';
import { Anchor } from 'antd';
export default function NavBar() {
  const {Link} = Anchor;
  return (
<nav className="navbar navbar-expand-lg">
  <a className="navbar-brand" href="/">
    <img src="./assets/logo1.png"  alt="..."/>
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
        <Link className="nav-link p-2 p-lg-3 " href="#About" title='About Me'></Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link p-2 p-lg-3" href="#MySkills" title ='Skills' ></Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link p-2 p-lg-3" href="#MyProjects" title='Projects'></Link>
      </li>
      <li className="nav-item ">
        <Link className="nav-link p-2 p-lg-3 " href="#ContactMe" title='Contact Me'></Link>
      </li>
      <li className="nav-item ">
      <a className="nav-link p-2 p-lg-3 " href="CV-Maaloum.pdf" download="CV-Maaloum" >Resume</a>
    </li>

    </ul>
  </div>
</nav>

  )
}
