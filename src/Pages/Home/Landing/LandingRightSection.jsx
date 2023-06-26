import React, { useEffect, useState } from "react";
import img1 from "../../../assets/Landing/img1.svg";
import img2 from "../../../assets/Landing/img2.svg";
import img3 from "../../../assets/Landing/img3.svg";
import img4 from "../../../assets/Landing/img4.svg";

function LandingRightSection() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev === 3 ? 0 : prev+1));
    }, 5000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <div className="relative overflow-hidden">
      <div
        className={`duration-500 ${index === 0 ? "opacity-100" : "absolute opacity-0"}`}
      >
        <img src={img1} alt="review1" />
      </div>
      <div
        className={`duration-500 ${index === 1 ? "opacity-100" : "absolute opacity-0"}`}
      >
        <img src={img2} alt="review2" />
      </div>
      <div
        className={`duration-500 ${index === 2 ? "opacity-100" : "absolute opacity-0"}`}
      >
        <img src={img3} alt="review3" />
      </div>
      <div
        className={`duration-500 ${index === 3 ? "opacity-100" : "absolute opacity-0"}`}
      >
        <img src={img4} alt="review4" />
      </div>
    </div>
  );
}

export default LandingRightSection;
