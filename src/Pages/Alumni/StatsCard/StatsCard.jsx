import React from 'react'
import EachCard from './EachCard/EachCard'
import LiveMockInterviews from "../../../assets/Alumni/LiveMockInterviews.svg";
import partners from "../../../assets/Alumni/partners.svg";
import fees from "../../../assets/Alumni/fees.svg";
import Rupee from "../../../assets/Alumni/Rupee.svg";
import parcentage from "../../../assets/Alumni/parcent.svg";
const StatsCard = () => {
    const CardsData = [
        {
            img: LiveMockInterviews,
            body: "6000+ Students Currently Enrolled",
          },
          {
            img: partners,
            body: "4000+ hiring partners",
          },
          {
            img: fees,
            body: "6.9 LPA Average Salary",
          },
          {
            img: Rupee,
            body: "36 LPA Highest Salary",
          },
          {
            img: parcentage,
            body: "Placement Rate",
          },
    ]
  return (
      <div className='my-[80px]'>
          <div className='grid md:grid-cols-5  grid-cols-2 gap-x-auto gap-y-auto lg:w-4/5 mx-auto'>
              {
                  CardsData.map((card, i) => <EachCard key={i} card={card} />)
              }
          </div>
      </div>
  )
}

export default StatsCard