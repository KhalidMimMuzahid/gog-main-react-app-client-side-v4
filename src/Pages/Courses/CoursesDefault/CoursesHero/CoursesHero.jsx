import React from 'react'
import HeroInfoComponent from './HeroInfoComponent/HeroInfoComponent'
import HeroFormComponent from './HeroFormComponent/HeroFormComponent'

function CoursesHero() {
  return (
    <div className='grid lg:grid-cols-12 grid-cols-1 gap-10 md:gap-14 my-[30px] md:my-[65px]'>
        <HeroInfoComponent />
        <HeroFormComponent />
    </div>
  )
}

export default CoursesHero