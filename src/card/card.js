import React from 'react'
import './card.css'
import image from '../image assets/planning.png'
const card = () => {
  return (
    <>
    <div className="card">
    <img src={image} className='img1'/>
    <h1 className='cardhead'>25y</h1>
    <h3 className='carddes'>Project Management</h3>
    </div>
    </>
  )
}

export default card