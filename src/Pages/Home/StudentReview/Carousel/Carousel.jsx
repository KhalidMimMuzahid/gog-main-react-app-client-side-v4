import React, { useState } from "react";
import EachCarouselSection from "./EachCarouselSection/EachCarouselSection";
import { AnimatePresence, motion, MotionConfig } from "framer-motion";
import { useEffect } from "react";

function Carousel({ data }) {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev >= 3 ? 0 : prev + 1));
    }, 5000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <>
      <div className="w-full">
        <div className="mx-auto flex flex-col justify-center">
          <div className="w-[90dvw] overflow-hidden">
            <motion.div
              animate={{ x: `-${index * 100}%` }}
              className="flex items-center"
            >
              {data.map((item, indexHere) => (
                <div id={item?.id} className="" key={indexHere}>
                  <EachCarouselSection item={item} />
                </div>
              ))}
            </motion.div>
          </div>
        </div>
        <div className="my-5 flex gap-10 justify-center">
          {data.map((item, indexHere) => (
            <div className={`h-[10px] w-[10px] ${index === indexHere ? "bg-[#4BA25D]" : "bg-[#a0ffb3]"} rounded-full`} key={indexHere} onClick={() => setIndex(indexHere)}></div>
          ))}
        </div>
      </div>
    </>
  );
}

export default Carousel;
