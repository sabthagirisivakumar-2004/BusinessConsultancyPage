import React from 'react'
import Nav from './Navigation/Header'
import Hero from './Hero/Hero'
import Analyse from './card/Analyse'
import Personal from './personal/personal';
import Review from './Client/Client'
import Footer from './Footer/Footer'
const App = () => {
  return (
    <>
    <Hero/>
    <Analyse/>
   <Personal/>
   <Review/>
   <Footer/>
  </>
  )
}

export default App