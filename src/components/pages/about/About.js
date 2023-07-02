import React from 'react'
import './About.css';
import Gardening from '../../assets/gardening.webp';

const About = () => {
  return (
    <div className="container_about">
        <div className="l_about">
            <img src={Gardening} alt=""/>
        </div>
        <div className="r_about">
            <div className="about_title">
                <h2>Sunt in culpa qui officia </h2>
            </div>
            <div className="about_text">
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                    sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                     Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi 
                     ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in
                      voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint 
                    occaecat cupidatat non proident.</p>
            </div>
        </div>
    </div>
  )
}

export default About