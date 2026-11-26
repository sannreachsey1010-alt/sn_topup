import React from 'react'
import Navbar from '../components/Navbar'
import Banner from '../components/Banner'
import Checkout from './Checkout'
import DiamondCard from '../components/DiamondCard'

const Home = () => {
  return (
    <div>
        <Navbar/>
        <Banner/>
        <Checkout/>
        <DiamondCard/>
    </div>
  )
}

export default Home