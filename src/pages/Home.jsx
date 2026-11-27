import React from 'react'
import Navbar from '../components/Navbar'
import Banner from '../components/Banner'
import Checkout from './Checkout'
import DiamondCard from '../components/DiamondCard'
import Footer from '../components/Footer'

const Home = () => {
  return (
    <div>
        <Navbar/>
        <Banner/>
        <Checkout/>
        <DiamondCard/>
        <Footer/>
    </div>
  )
}

export default Home