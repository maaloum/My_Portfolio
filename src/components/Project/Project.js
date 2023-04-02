import React from 'react';
import Projects from '../../projects.json';
import './Project.css';

export default function Project() {
  return (
    
    <div className='project-section' id='MyProjects'>
            <h1>My Projects</h1>
    <div className='projects'> {Projects.map(project => {
            return (
                <div className='project' key = {project.id}>
                    <div class="card">
                        <img src={project.image} class="card-img-top" alt="ecommerce"/>
                        <div class="card-body">
                            <h5 class="card-title text-primary">{project.name}</h5>
                            <p class="card-text">{project.description}</p>
                            <i class="fa fa-github" aria-hidden="true"><a className='text-dark' href={project.github} target='_blank' rel="noreferrer"> Github</a></i>
                            <a href={project.deployed}  target='_blank' rel="noreferrer" class="btn btn-primary">Go Live</a>
                        </div>
                    </div>
                </div>
                )

        })}
        </div>



        
    </div>


  )

}
