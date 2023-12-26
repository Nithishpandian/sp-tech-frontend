import React from 'react'
import HeroSection from '../../components/Home/HeroSection'
import FeaturedProducts from '../../components/Home/FeaturedProducts'
import WhatWeOffer from '../../components/Home/WhatWeOffer'
import Header from "../../components/common/Header"
import Footer from "../../components/common/Footer"

const Home = () => {
  return (
    <div>
      <Header />
        <HeroSection />
        <FeaturedProducts />
        <WhatWeOffer />
        <Footer />
    </div>
  )
}

export default Home