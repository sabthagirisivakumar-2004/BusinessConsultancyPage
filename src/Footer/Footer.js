import React from 'react'
import './Footer.css'
import insta from '../image assets/insta.png'
import x from '../image assets/X.png'
import facebook from '../image assets/facebook.png';
const Footer = () => {
  return (
   <>
   <div className='box'>
   <h1 className="headercontact">Contact us</h1>
  
   <p className='query'>Ready to take your business to the next level? Schedule<br></br> a consultation with one of our experts to discuss goals,<br></br> challenges, and how our consulting services can support <br></br> success. Fill out the consultation request form here<br></br> and we'll be in touch shortly.
   </p>
   <input type="text" placeholder='Name' className='name'/>
   <input type="email" placeholder='Email' className='name1'/>
   <textarea className='name2'>Let us know if you have any queries</textarea>
   <input type='submit' className='submit'/>
   <img src={insta} width={"130px"} height={"110px"} className='insta'/>
   <img src={x} width={"60px"} height={"60px"} className='x'/>
   <img src={facebook} width={"70px"} height={"70px"} className='facebook'/>
   </div>
   </>
  )
}

export default Footer