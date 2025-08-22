import React, { useState, useEffect } from "react";
import { MdKeyboardArrowRight, MdKeyboardArrowLeft } from "react-icons/md";

export default function Hero({ slides }) {
  const [current, setCurrent] = useState(0);
  const [autoPlay, setAutoPlay] = useState(true);
  const slideLength = slides.length;

  const nextSlide = () => {
    setCurrent(current === slideLength - 1 ? 0 : current + 1);
  };

  const prevSlide = () => {
    setCurrent(current === 0 ? slideLength - 1 : current - 1);
  };

  useEffect(() => {
    if (autoPlay) {
      const interval = setTimeout(nextSlide, 2000);
      return () => clearTimeout(interval);
    }
  }, [current, autoPlay]);

  if (slideLength <= 0) return null;

  return (
    <>
    <div className="w-full">
      <div className="max-w-7xl m-auto pt-11">
      <div 
        className="relative overflow-hidden group"
        onMouseEnter={() => setAutoPlay(false)}
        onMouseLeave={() => setAutoPlay(true)}
      >
        <div 
          className="flex transition-transform ease-out duration-500"
          style={{ transform: `translateX(-${current * 100}%)` }}
        >
          {slides.map((slide, index) => (
            <img
              key={index}
              src={slide}
              alt={`Slide ${index + 1}`}
              className="w-full h-auto flex-shrink-0"
            />
          ))}
        </div>

        {/* Navigation Arrows */}
        <div className="absolute inset-0 flex justify-between items-center px-3 z-10">
          <button 
            onClick={prevSlide}
            className="shadow-2xl bg-white rounded-full p-1 opacity-0 group-hover:opacity-100 transition-opacity"
          >
            <MdKeyboardArrowLeft size={24} />
          </button>
          <button 
            onClick={nextSlide}
            className="shadow-2xl bg-white rounded-full p-1 opacity-0 group-hover:opacity-100 transition-opacity"
          >
            <MdKeyboardArrowRight size={24} />
          </button>
        </div>

        {/* Indicators */}
        <div className="absolute bottom-4 left-0 right-0 flex justify-center gap-2 z-10">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrent(index)}
              className={`w-2 h-2 rounded-full transition-all ${current === index ? "bg-white w-4" : "bg-white/50"}`}
            />
          ))}
        </div>
      </div>
    </div>
    </div>
    </>
  );
}
