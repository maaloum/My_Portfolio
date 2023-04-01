import React from 'react';
import './Project.css';

export default function Project() {
  return (
    <div className='project-section'>
        <h1>My Projects</h1>
        <div className='projects'>
            <div class="card">
                <img src="./assets/ecommerce.png" class="card-img-top" alt="ecommerce"/>
                <div class="card-body">
                    <h5 class="card-title text-primary">E-commerce</h5>
                    <p class="card-text">The application is built using the React library, which provides a fast and responsive user interface. The Bootstrap framework is used to create a modern and visually appealing design, while Skeleton provides a lightweight and responsive CSS boilerplate.</p>
                    <a href="https://641f963ae0999f35015dbab1--glittering-elf-15ef96.netlify.app/"  target='_blank' rel="noreferrer" class="btn btn-info">Go Live</a>
                </div>
            </div>
        <div class="card">
        <img src="./assets/maaloum_blog.png" class="card-img-top" alt="..."/>
            <div class="card-body">
                <h5 class="card-title text-primary">Maaloum Blog</h5>
                <p class="card-text">Maaloum Blog is a React SPA application that allows users to view and interact with blog posts and to add new posts. It fetches all the information that it displays using a local API creates with a JSON server.</p>
                <a href="https://main--super-paletas-b4ba8a.netlify.app/" target='_blank' rel="noreferrer" class="btn btn-info">Go Live</a>
            </div>
        </div>
        <div class="card">
        <img src="./assets/shopping_card.png" class="card-img-top" alt="..."/>
            <div class="card-body">
                <h5 class="card-title text-primary">Shopping Cart</h5>
                <p class="card-text">This is a small application that I built using ReactJs. It is a little shop that displays products and lets users add or remove items to or from the cart page and calculate the total price of all itemes.</p>
                <a href="/" target='_blank' rel="noreferrer"  class="btn btn-info">Go Live</a>
            </div>
        </div>
        <div class="card">
        <img src="./assets/country_info.png" class="card-img-top" alt="..."/>
            <div class="card-body">
                <h5 class="card-title text-primary">Country Info</h5>
                <p class="card-text">Countries Infos is a React and Redux SPA application that displays interesting information about various countries in the world. It fetches all the information that it displays using API request to a server.</p>
                <a href="/" target='_blank' rel="noreferrer" class="btn btn-info">Go Live</a>
            </div>
        </div>
        <div class="card">
        <img src="./assets/smr.png" class="card-img-top" alt="..."/>
            <div class="card-body">
                <h5 class="card-title text-primary">Smart MS SA</h5>
                <p class="card-text">Smart MS SA is a website built in Html5, Css3, Javascript/Bootstrap for a company that I worked for.</p>
                <a href="https://www.smartmssa.com/" target='_blank' rel="noreferrer"  class="btn btn-info">Go Live</a>
            </div>
        </div>
        <div class="card">
        <img src="./assets/sma.png" class="card-img-top" alt="..."/>
            <div class="card-body">
                <h5 class="card-title text-primary">SmartDev</h5>
                <p class="card-text">SmartDevis a website built in Html5, Css3, Javascript/Bootstrap for a company that I worked for.</p>
                <a href="https://smartdev.ai/" target='_blank' rel="noreferrer"  class="btn btn-info">Go live</a>
            </div>
        </div>
        
        
        
        </div>
    </div>

  )

}
