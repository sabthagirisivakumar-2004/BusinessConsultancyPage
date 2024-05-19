import React from 'react'
import './Hero.css'
import Creative from './Creative'
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import image from '../image assets/new1.png';
import Nav from '../Navigation/Header' 

const Hero = () => {
  return (
    <>
    <img src={image} className='image1'/>
    <Nav/>
    <h1 className='head1'>Provide Business<br></br> Consulting</h1><br></br>
    <p className='hp'>Empowering businesses to thrive and evolve, our consulting <br></br>agency offers and expert guidance to drive growth, maximize <br></br> efficiency, and navigate complex challenges.With a blend of<br></br> industry insight, innovative solutions, and personalized attention,<br></br> efficient, high-quality solutions on the development side.</p>
    <br></br>
    <button className="Glowsticky1">Get Started</button>
    </>
)

}

export default Hero