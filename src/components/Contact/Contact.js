import React from 'react';
import './Contact.css'

export default function Contact() {
  return (
    <div className = 'container-fuild contenu'>
        <h3 className = 'text-center text-white'>Contact Me</h3>
        <div className = 'contact'>
            <div className = 'facebook'>
                <a href='https://web.facebook.com/elycheikh.maaloum' target='_blank' rel="noreferrer"><i class = 'fa fa-facebook text-white'></i></a>
            </div>
            <div className = 'twitter'>
                <a href='https://twitter.com/maaloumely' target='_blank' rel="noreferrer"><i class = 'fa fa-twitter text-white'></i></a>
            </div>
            <div className = 'linkedin'>
                <a href='https://www.linkedin.com/in/ely-cheikh-maaloum-075a79135/' target='_blank' rel="noreferrer"><i class = 'fa fa-linkedin text-white'></i></a>
            </div>
        </div> 
    
    
    </div>
  )
}
