import React from 'react'
import './card2.css'
import image from '../image assets/marketing.png'
const card = () => {
  return (
    <>
    <div className="card2">
    <img src={image} className='img2'/>
    <h1 className='cardhead'>200+</h1>
    <h3 className='carddes'>Strategy Planning</h3>
    </div>
    </>
  )
}

export default card