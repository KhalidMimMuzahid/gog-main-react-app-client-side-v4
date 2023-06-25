import React from 'react'
import Hero from './Hero/Hero'
import StatsCard from './StatsCard/StatsCard'
import TrustedCompany from './TrustedCompany/TrustedCompany'
import ReviewArea from './ReviewArea/ReviewArea'

const Alumni = () => {
  return (
      <div className='p-[64px]'>
      <Hero />
      <StatsCard />
      <TrustedCompany />
      <ReviewArea/>
      </div>
      
  )
}

export default Alumni