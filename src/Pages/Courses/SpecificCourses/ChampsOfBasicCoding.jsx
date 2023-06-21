import React from 'react'
import SpecificCoursePageComponent from '../SpecificCoursePageComponent/SpecificCoursePageComponent'

const data = {
    module: "SCHOOL CHAMP",
    course: "Basic Coding",
    description: "BASIC (Beginners' All-purpose Symbolic Instruction Code) is a family of general-purpose, high-level programming languages designed for ease of use.Computer Programming Including Programming Concepts, Programming Languages.",
}

function ChampsOfBasicCoding() {
  return (
    <div className='p-[30px] md:p-[65px] dark:text-white'>
        <SpecificCoursePageComponent data={data} />
    </div>
  )
}

export default ChampsOfBasicCoding