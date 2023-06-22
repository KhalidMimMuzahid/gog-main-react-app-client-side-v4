import React from 'react'

import StudentStories from './StudentStories/StudentStories'

import FAQ from './FAQ/FAQ'
import WhatsIncluded from './WhatsIncluded/WhatsIncluded'
import BookFreeDemo from './BookFreeDemo/BookFreeDemo'


function SpecificCoursePageComponent({data}) {
  return (
    <div>
      {/* Sojib */}
      <StudentStories/>


      {/* Sojib */}

      {/* Sarwar */}
      <FAQ />
      <WhatsIncluded />
      <BookFreeDemo/>
      {/* Sarwar */}
    </div>
  )
}

export default SpecificCoursePageComponent