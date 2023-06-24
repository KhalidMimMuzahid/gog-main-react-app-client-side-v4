import React from 'react'

import StudentStories from './StudentStories/StudentStories'

import FAQ from './FAQ/FAQ'
import WhatsIncluded from './WhatsIncluded/WhatsIncluded'
import BookFreeDemo from './BookFreeDemo/BookFreeDemo'
import CourseLayout from './CourseLayout/CourseLayout'
import ProgramOverview from './ProgramOverview/ProgramOverview'
import CourseStructure from './CourseStructure/CourseStructure'
import Instructor from './Instructor/Instructor'
import MeetOurTeam from '../../Home/MeetOurTeam/MeetOurTeam'
import CourseContent from './CourseContent/CourseContent'
import CoursesPageHero from './CoursesPageHero/CoursesPageHero'
import Placement from './Placement/Placement'


function SpecificCoursePageComponent({data}) {
  return (
    <div>
      {/* Sojib */}
      <CoursesPageHero/>
      <Placement/>
      <ProgramOverview/>
      <CourseLayout/>
      <CourseContent/>
      <CourseStructure/>
      <Instructor/>
      <MeetOurTeam showHeading={false}/>
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