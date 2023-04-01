import React from 'react';
import './Skills.css'

export default function Skills() {
  return (
    <div className='skills'>
        <h2> My Skills</h2>
        <div className='skills__container__left'>
            <div className='section'>
                <div className='skill'>
                    <img src='./assets/frontend.jpg' alt='frontend'/>
                    <h2>Front End</h2>
                </div>
                <ul>
                    <li>HTML</li>
                    <li>CSS</li>
                    <li>JavaScript</li>
                    <li>React</li>
                    <li>Redux</li>
                    <li>Bootstrap</li>
                </ul>
            </div>
                <div className='section'>
                <div className='skill'>
                <img src='./assets/backend.jpg' alt='backend'/>
                <h2>Backend End</h2>
             </div>
            <ul>
                <li>Ruby</li>
                <li>Rails</li>
                <li>PostgreSQL</li>
                <li>MangoDb</li>
                <li>Java</li>
                <li>Spring Boot</li>
            </ul>
                </div>
                <div className='section'>
                            <div className='skill' >
                            <img src='./assets/tools.jpg' alt = 'tools'/>
                            <h2> Others </h2>
                        </div>
                        <ul>
                            <li>Git</li>
                            <li>GitHub</li>
                            <li>Docker</li>
                            <li>WorldPress</li>
                            <li>TypScript</li>
                            <li>Jest</li>
                        </ul>
                </div>
        </div>
 
    
    </div>
  )
}
