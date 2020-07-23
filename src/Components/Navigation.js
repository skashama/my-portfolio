import React from 'react'

export default function Navigation() {
    return (
        <div>
          <nav id="navbar" class="navbar navbar-expand-lg sticky-top navbar-dark bg-dark">
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
              <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
              <ul class="navbar-nav mr-auto mt-2 mt-lg-0">
                <li class="nav-item active">
                  <a class="nav-link" href="#">Home <span class="sr-only">(current)</span></a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="#about">About</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="#skills">Skills</a>
                </li>
                <li class="nav-item">
                      <a class="nav-link" href="#portfolio">Portfolio</a>
                </li>
                <li class="nav-item">
                      <a class="nav-link" href="#contact">Contact</a>
                </li>
              </ul>
            </div>
          </nav>
        </div>
    )
}
