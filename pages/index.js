import React from 'react'
import { HeroSection } from '../components/ComponentIndex'
import { Service, BigNFTSlider, NFTCard, Filter, Subscribe, Category, Title } from '../components/ComponentIndex'

const index = () => {
  return (
    <div>
      <HeroSection />
      <Service />
     <BigNFTSlider />
    
     <Filter />
     <NFTCard />
     <Title heading="Browse by Category" paragraph="Explore NFTs in most features categories" />
     <Category />
     <Subscribe />
    </div>
  )
}

export default index