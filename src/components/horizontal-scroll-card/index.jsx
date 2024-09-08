/* eslint-disable react/prop-types */
import { FaAngleLeft, FaAngleRight } from "react-icons/fa6";
import { useRef } from 'react';
import Card from './../card/index';

export default function HorizontalScrollCard({ data = [], heading ,tranding,media_type}) {
  const container = useRef();

  const handleNext = () => {
    const containerWidth = container.current.scrollWidth;
    const scrollPosition = container.current.scrollLeft + container.current.clientWidth;

    if (scrollPosition >= containerWidth) {
      container.current.scrollLeft = 0;
    } else {
      container.current.scrollLeft += 300;
    }
  };

  const handlePreviouse = () => {
    if (container.current.scrollLeft === 0) {
      container.current.scrollLeft = container.current.scrollWidth;
    } else {
      container.current.scrollLeft -= 300;
    }
  };


  return (
    <div className="container mx-auto px-3 my-5">
      <h1 className="text-xl lg:text-2xl font-bold capitalize ">{heading}</h1>
      <div className="relative">
        <div ref={container} className="grid grid-cols-[repeat(auto-fit,260px)] grid-flow-col gap-6 overflow-hidden overflow-x-scroll relative z-10 scroll-smooth transition-all scrolbar-none">
          {data.length > 0 && data.map((item, index) => (
            <Card
              key={item.id}
              data={item}
              tranding={tranding}
              index={index}
              media_type={media_type}
            />
          ))}
        </div>
        {/* Button next and previous like carousel */}
        <div className="absolute top-0 w-full h-full hidden lg:flex items-center justify-between">
          <button
            onClick={handlePreviouse}
            className="bg-neutral-300 -ml-3 hover:bg-neutral-100 transition-all text-black rounded-full text-base lg:text-xl p-1 z-10"
          >
            <FaAngleLeft />
          </button>
          <button
            onClick={handleNext}
            className="bg-neutral-300 relative -right-3 hover:bg-neutral-100 transition-all text-black rounded-full text-base lg:text-xl p-1 z-10"
          >
            <FaAngleRight />
          </button>
        </div>
      </div>
    </div>
  );
}
