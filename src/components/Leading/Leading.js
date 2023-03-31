import React from 'react'
import './Leading.css'

export default function Leading() {
  return (
    <div className='landing text-center '>
      <div className= 'introduction'>
          <h3> <h1> Hi there! I'm <span className='text-primary'> Maaloum </span></h1></h3>
          <p> I'm a Full Stack Web Developer based in Nouakchoutt, Mauritania </p>
          <div className='buttons'>
              <button className='btn btn-primary'>Let's talk</button>
              <button className='btn btn-secondary'>My projects</button>
          </div>
      </div>
      <div className='photo'>
          <img src="./assets/my_photo.jpg" alt="personal photo"/>
      </div>
    </div>
  )
}
