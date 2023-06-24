import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

import img1 from "../../../../assets/toolsImgs/img1.svg";
import img2 from "../../../../assets/toolsImgs/img2.svg";
import img3 from "../../../../assets/toolsImgs/img3.svg";
import img4 from "../../../../assets/toolsImgs/img4.svg";
import img5 from "../../../../assets/toolsImgs/img5.svg";
import img6 from "../../../../assets/toolsImgs/img6.svg";
import img7 from "../../../../assets/toolsImgs/img7.svg";
import img8 from "../../../../assets/toolsImgs/img8.svg";
import person1 from "../../../../assets/StudentReview/person1.png";
import person2 from "../../../../assets/StudentReview/person2.png";
import person3 from "../../../../assets/StudentReview/person3.png";
import person4 from "../../../../assets/StudentReview/person4.png";
import EachHireStudentCarousel from "./EachHireStudentCarousel";

const data = [
  {
    img: person1,
    name: "Aarav Sharma",
    position: "Full Stack Developer",
    skills: [img1, img2, img3, img4],
  },
  {
    img: person2,
    name: "Arjun Mehta",
    position: "Mobile Developer",
    skills: [img5, img6, img7, img8],
  },
  {
    img: person3,
    name: "Advaitha Singh",
    position: "Data Analyst",
    skills: [img1, img2, img3, img4],
  },
  {
    img: person4,
    name: "Aanya Gupta",
    position: "Database Developer",
    skills: [img5, img6, img7, img8],
  },
];

function HireStudentCarousel() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev === data.length - 2 ? 0 : prev + 1));
    }, 5000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <div className="flex justify-center lg:justify-end">
      <div className="overflow-hidden ml-[35px] md:ml-0 w-[235px] md:w-[472px]">
        <motion.div
          transition={{ duration: 0.7, ease: [0.32, 0.72, 0, 1] }}
          animate={{ x: `-${index * 269}px` }}
          className="flex gap-[70px]"
        >
          {data.map((item, index) => (
            <EachHireStudentCarousel item={item} key={index} />
          ))}
        </motion.div>
      </div>
    </div>
  );
}

export default HireStudentCarousel;
