import React from 'react'
import './personal.css'
import image1 from '../image assets/per1.png'
const personal = () => {
  return (
    <>
    <div className='personal1'>
    <h1 className='perhead1'>Meet your perfect <br></br>Personal Trainer</h1><br></br>
    <p className='perhp'>Empowering businesses to thrive and evolve, our consulting <br></br>agency offers and expert guidance to drive growth, maximize <br></br> efficiency, and navigate complex challenges.With a blend of<br></br> industry insight, innovative solutions, and personalized attention,<br></br> efficient, high-quality solutions on the development side.</p>
    <br></br>
    <button className="perGlowsticky1">Get Started</button>
    <div className='upper-layer'>
    <h3 className='pos1'>Sarah</h3>
    </div>
    <img src={image1} className='per1'/>   
    </div>
    </>
  )
}

export default personal