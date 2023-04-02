import React from 'react'
import './Leading.css';
import Typed from 'typed.js';
import { useEffect, useRef } from 'react';

export default function Leading() {
  const el = useRef(null);
  useEffect(() => {
    const options = {
      strings: ['Web Developer', 'Web Designer', 'Freelancer'],
      typeSpeed: 50,
      backSpeed: 50,
      loop: true
    };
    const typed = new Typed(el.current, options);
    return () => {
      typed.destroy();
    };
  }, []);
  


  return (
    <div className='landing text-center '>
      <div className= 'introduction'>
          <h3> <h1> Hi there! I'm <span className='text-primary'> Maaloum </span></h1></h3>
          <p>  I'm a <span className='text-primary'> <span ref={el} /> </span> based in Nouakchoutt, Mauritania </p>
          <div className='buttons'>
              <a className='btn btn-primary' href='#ContactMe'>Let's talk</a>
              <a className='btn btn-secondary project' href='#MyProjects'>My projects</a>
          </div>
      </div>
      <div className='photo'>
          <img src="./assets/photo.jpeg" alt=""/>
    </div>
    </div>
  )
}
