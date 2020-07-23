import React from 'react'
import { FaRegEnvelope } from "react-icons/fa";
import { FaMapMarkerAlt } from "react-icons/fa";
import { FaPhoneAlt } from "react-icons/fa";
import { DiGithubBadge } from "react-icons/di";
import {FaLinkedinIn } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";

export default function Contact() {
    return (
        <div>
            <div id="contact" class="text-center">
            <div class="container">
                <div class="section-title center">
                <h2>Contact</h2>
                <hr />
                </div>
                <div class="row">
                <div class="col-md-8 col-md-offset-2 myContact-details">
                    <div class="row">
                <div class="col-md-4">
                    <FaMapMarkerAlt size={30} />
                    <p>Seattle, WA 98102</p>
                </div>
                <div class="col-md-4">
                    <FaRegEnvelope size={30} />
                    <p>skashama02@gmail.com</p>
                </div>
                <div class="col-md-4">
                    <FaPhoneAlt size={30} />
                    <p> +1 206 475 8277</p>
                </div>
                <div class="clearfix"></div>
                </div>
                </div>
                
                <div class="col-md-8 col-md-offset-2">  
                <div class="social">
                    <ul>
                    <li>
                      {/* <a href="https://www.instagram.com/shalom_bowa/?hl=en" target="_blank"> */}
                        <FaInstagram size={30}/>
                      {/* </a> */}
                    </li>
                    <li>
                      <a href="https://github.com/skashama" target="_blank" rel="noopener noreferrer">
                        <DiGithubBadge size={40}/>
                      </a>
                    </li>
                    <li>
                      <a href="https://www.linkedin.com/in/shaloom-k-6a2a96190/" target="_blank" rel="noopener noreferrer">
                        <FaLinkedinIn size={30}/>
                      </a>
                    </li>
                    </ul>
                </div>
                </div>
                </div>
            </div>
            </div>
        </div>
    )
}
