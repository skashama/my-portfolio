import React from 'react'
import profil from '../Assets/Image/IMG-7177.jpg'

export default function About() {
    return (
      <div id="about">
          <div class="container">
          <div class="section-title text-center center">
            <h2>About Me</h2>   
            <hr />  
          </div>
          <div class="row">
            <div class="col-md-12 text-center">
              <img src={profil} class="img-responsive" alt="profil" />
            </div>
            <div class="col-md-8 col-md-offset-2">
              <div class="about-text">
                <p>I attended PSC in Little Rock, AR and graduated with a bachelor of science in Computer Science. I’ve had a chance to travel across the country from Washington, DC to Seattle, WA. I ran into great people, built friendships, exchanged ideas.</p>
                <p>Through it all, technology made it easy for us to keep in contact. This gave me more than a reason to dedicate myself on using web technologies to build products and services to maintain communities.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
}
