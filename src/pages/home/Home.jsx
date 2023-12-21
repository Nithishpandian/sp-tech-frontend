import React from 'react'
import HeroSection from '../../components/Home/HeroSection'
import FeaturedProducts from '../../components/Home/FeaturedProducts'
import WhatWeOffer from '../../components/Home/WhatWeOffer'

const Home = () => {
  return (
    <div>
        <HeroSection />
        <FeaturedProducts />
        <WhatWeOffer />
    </div>
  )
}

export default Home