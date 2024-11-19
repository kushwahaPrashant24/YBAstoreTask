import React from 'react'
import Starter from './Starter';
import Content from './Content';
import Navbar from '../navbar';

function Hero() {
  return (
    <div className='text-white'> 
    <Navbar />
    <Starter />
    <Content />
    </div>
  )
}

export default Hero;