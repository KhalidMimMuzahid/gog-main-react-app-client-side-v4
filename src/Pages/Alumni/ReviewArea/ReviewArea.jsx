import React, { useState } from "react";
import Axix from "../../../assets/Alumni/aixs-bank.svg";
import Citi from "../../../assets/Alumni/citi.svg";
import AmericanExpress from "../../../assets/Alumni/americanExpress.svg";
import Akhil from "../../../assets/Alumni/Akhil Sharma.svg";
import Anagh from "../../../assets/Alumni/Anagh Kanugo.svg";
import Sandeep from "../../../assets/Alumni/Sandeep Kumar.svg";
import ReviewCard from "./ReviewCard/ReviewCard";
import ReactPaginate from "react-paginate";
import './ReviewArea.css'
const ReviewArea = () => {
  const [itemOffset, setItemOffset] = useState(0);
  const Reviews = [
    {
      name: "Akhil Sharma",
      img: Akhil,
      position: "Data scientist",
      reviews:
        "It was a great experience having love Babbar sir as a mentor. Thank you sir for teaching DSA concepts in a graspable thank you sir for teaching DSA concepts in a graspablemanner and supporting us throughout the course  DSA concepts in a graspablemanner",
      logo: Axix,
    },
    {
      name: "Anagh Kanungo",
      img: Anagh,
      position: "Full stack",
      reviews:
        "This is the best course out there to learn recursion and backtracking concepts intuitively from scratch, Bhaiya is a wonderfully teacher and teaches from the basics, explaining every problem in detail including Leetcode Hard problems, highly recommend",
      logo: Citi,
    },
    {
      name: "Anagh Kanungo",
      img: Anagh,
      position: "Full stack",
      reviews:
        "This is the best course out there to learn recursion and backtracking concepts intuitively from scratch, Bhaiya is a wonderfully teacher and teaches from the basics, explaining every problem in detail including Leetcode Hard problems, highly recommend",
      logo: Citi,
    },
    {
      name: "Anagh Kanungo",
      img: Anagh,
      position: "Full stack",
      reviews:
        "This is the best course out there to learn recursion and backtracking concepts intuitively from scratch, Bhaiya is a wonderfully teacher and teaches from the basics, explaining every problem in detail including Leetcode Hard problems, highly recommend",
      logo: Citi,
    },
    {
      name: "Akhil Sharma",
      img: Akhil,
      position: "Data scientist",
      reviews:
        "It was a great experience having love Babbar sir as a mentor. Thank you sir for teaching DSA concepts in a graspable thank you sir for teaching DSA concepts in a graspablemanner and supporting us throughout the course  DSA concepts in a graspablemanner",
      logo: Axix,
    },
    {
      name: "Sandeep kumar",
      img: Sandeep,
      position: "Data scientist",
      reviews:
        "It was a great experience having love Babbar sir as a mentor. Thank you sir for teaching DSA concepts in a graspable thank you sir for teaching DSA concepts in a graspablemanner and supporting us throughout the course  DSA concepts in a graspablemanner",
      logo: Axix,
    },
    {
      name: "Akhil Sharma",
      img: Akhil,
      position: "Data scientist",
      reviews:
        "It was a great experience having love Babbar sir as a mentor. Thank you sir for teaching DSA concepts in a graspable thank you sir for teaching DSA concepts in a graspablemanner and supporting us throughout the course  DSA concepts in a graspablemanner",
      logo: Axix,
    },
    {
      name: "Anagh Kanungo",
      img: Anagh,
      position: "Full stack",
      reviews:
        "This is the best course out there to learn recursion and backtracking concepts intuitively from scratch, Bhaiya is a wonderfully teacher and teaches from the basics, explaining every problem in detail including Leetcode Hard problems, highly recommend",
      logo: Citi,
    },
    {
      name: "Anagh Kanungo",
      img: Anagh,
      position: "Full stack",
      reviews:
        "This is the best course out there to learn recursion and backtracking concepts intuitively from scratch, Bhaiya is a wonderfully teacher and teaches from the basics, explaining every problem in detail including Leetcode Hard problems, highly recommend",
      logo: Citi,
    },
    {
      name: "Anagh Kanungo",
      img: Anagh,
      position: "Full stack",
      reviews:
        "This is the best course out there to learn recursion and backtracking concepts intuitively from scratch, Bhaiya is a wonderfully teacher and teaches from the basics, explaining every problem in detail including Leetcode Hard problems, highly recommend",
      logo: Citi,
    },
    {
      name: "Akhil Sharma",
      img: Akhil,
      position: "Data scientist",
      reviews:
        "It was a great experience having love Babbar sir as a mentor. Thank you sir for teaching DSA concepts in a graspable thank you sir for teaching DSA concepts in a graspablemanner and supporting us throughout the course  DSA concepts in a graspablemanner",
      logo: Axix,
    },
    {
      name: "Akhil Sharma",
      img: Akhil,
      position: "Data scientist",
      reviews:
        "It was a great experience having love Babbar sir as a mentor. Thank you sir for teaching DSA concepts in a graspable thank you sir for teaching DSA concepts in a graspablemanner and supporting us throughout the course  DSA concepts in a graspablemanner",
      logo: Axix,
    },
    {
      name: "Akhil Sharma",
      img: Akhil,
      position: "Data scientist",
      reviews:
        "It was a great experience having love Babbar sir as a mentor. Thank you sir for teaching DSA concepts in a graspable thank you sir for teaching DSA concepts in a graspablemanner and supporting us throughout the course  DSA concepts in a graspablemanner",
      logo: Axix,
    },
    {
      name: "Akhil Sharma",
      img: Akhil,
      position: "Data scientist",
      reviews:
        "It was a great experience having love Babbar sir as a mentor. Thank you sir for teaching DSA concepts in a graspable thank you sir for teaching DSA concepts in a graspablemanner and supporting us throughout the course  DSA concepts in a graspablemanner",
      logo: Axix,
    },
    {
      name: "Akhil Sharma",
      img: Akhil,
      position: "Data scientist",
      reviews:
        "It was a great experience having love Babbar sir as a mentor. Thank you sir for teaching DSA concepts in a graspable thank you sir for teaching DSA concepts in a graspablemanner and supporting us throughout the course  DSA concepts in a graspablemanner",
      logo: Axix,
    },
    {
      name: "Akhil Sharma",
      img: Akhil,
      position: "Data scientist",
      reviews:
        "It was a great experience having love Babbar sir as a mentor. Thank you sir for teaching DSA concepts in a graspable thank you sir for teaching DSA concepts in a graspablemanner and supporting us throughout the course  DSA concepts in a graspablemanner",
      logo: Axix,
    },
    {
      name: "Akhil Sharma",
      img: Akhil,
      position: "Data scientist",
      reviews:
        "It was a great experience having love Babbar sir as a mentor. Thank you sir for teaching DSA concepts in a graspable thank you sir for teaching DSA concepts in a graspablemanner and supporting us throughout the course  DSA concepts in a graspablemanner",
      logo: Axix,
    },
    {
      name: "Akhil Sharma",
      img: Akhil,
      position: "Data scientist",
      reviews:
        "It was a great experience having love Babbar sir as a mentor. Thank you sir for teaching DSA concepts in a graspable thank you sir for teaching DSA concepts in a graspablemanner and supporting us throughout the course  DSA concepts in a graspablemanner",
      logo: AmericanExpress,
    },
  ];

  const itemsPerPage = 18;

  const endOffset = itemOffset + itemsPerPage;

  const currentItems = Reviews?.slice(itemOffset, endOffset);
  const pageCount = Math?.ceil(Reviews?.length / itemsPerPage);

  const handlePageClick = (event) => {
    const newOffset = (event?.selected * itemsPerPage) % Reviews?.length;
    console.log(
      `User requested page number ${event?.selected}, which is offset ${newOffset}`
    );
    setItemOffset(newOffset);
  };
  return (
    <div>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-20'>
      {currentItems?.map((review, i) => (
        <ReviewCard key={i} review={review} />
      ))}
      </div>
      <div>
        <div className='pagination'>
          <ReactPaginate
            breakLabel='...'
            nextLabel='>'
            onPageChange={handlePageClick}
            pageRangeDisplayed={5}
            pageCount={pageCount}
            previousLabel='<'
            renderOnZeroPageCount={null}
            containerClassName='pagination-menu'
          />
        </div>
      </div>
    </div>
  );
};

export default ReviewArea;
