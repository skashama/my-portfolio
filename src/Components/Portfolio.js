import React from 'react'
import portfolioImageOne from '../Assets/Image/sai-kiran-anagani-5Ntkpxqt54Y-unsplash.png'
import portfolioImageTwo from '../Assets/Image/portfolio-img4.PNG'
import portfolioImageThree from '../Assets/Image/solar-energy-startup.JPG'

export default function Portfolio() {
    return (
        <div>
            <div id="portfolio">
            <div class="container">
            <div class="section-title text-center center">
              <h2>Projects</h2>
              <hr />
              <p>These are the side projects that I’m currently working on. I’m continuously updating these projects, all the while staying open to new opportunities and ideas. Let me know if you have an idea that you’d like built.</p>
            </div>

          <div class="row justify-content-center">
              <div class="col-sm-6 col-md-3 col-lg-3 project-card">
                <div class="portfolio-item">
                    <div class="card project">
                        <img src={portfolioImageOne} class="card-img-top" alt="..." />
                        <div class="card-body">
                          <h5 class="card-title">Web Portfolio Site</h5>
                          <p class="card-text">An online portfolio site built with React.</p>
                        </div>
                    </div>
                </div>
              </div>

              <div class="col-sm-6 col-md-3 col-lg-3 project-card">
                <div class="portfolio-item">
                    <div class="card project">
                        <img src={portfolioImageTwo} class="card-img-top" alt="..." />
                        <div class="card-body">
                          <h5 class="card-title">Local Business Website</h5>
                          <p class="card-text">Seattle based security agency website built with WordPress CMS.</p>
                        </div>
                    </div>
                </div>
              </div>   

              <div class="col-sm-6 col-md-3 col-lg-3 project-card">
                <div class="portfolio-item">
                    <div class="card project">
                        <img src={portfolioImageThree} class="card-img-top" alt="..." />
                        <div class="card-body">
                          <h5 class="card-title">Startup website</h5>
                          <p class="card-text">Startup engaged in solar power generation and system integration.</p>
                          <p class="card-text">Website built with Sage/WordPress</p>
                        </div>
                    </div>
                </div>
              </div>
       
            </div>
          </div>
        </div>
    </div>
    )
}
