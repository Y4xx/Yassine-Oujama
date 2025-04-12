import React, { useState, useEffect } from "react";
import styled, { keyframes } from "styled-components";
import { data } from "../data/data";
import { RxCaretRight, RxCaretLeft } from "react-icons/rx";


const WorkCard = () => {
  const reversedData = [...data];

  return (
    <>
      {reversedData.map((item) => (
        <Card key={item.id}>
          <ImageCarousel imgs={item.imgs} />

          <p className="text-gray-800 font-medium sm:text-lg">
            {item.title}
          </p>
        </Card>
      ))}
    </>
  );
};

// Fade-in animation for images
const fade = keyframes`
  from {
    opacity: 0;
    transform: scale(0.98);
  }
  to {
    opacity: 1;
    transform: scale(1);
  }
`;

const AnimatedImg = styled.img`
  width: 100%;
  height: 100%;
  animation: ${fade} 0.5s ease-in-out;
`;

const ImageCarousel = ({ imgs }) => {
  const [index, setIndex] = useState(0);

  const handleNext = () => {
    setIndex((prev) => (prev + 1) % imgs.length);
  };

  const handlePrev = () => {
    setIndex((prev) => (prev === 0 ? imgs.length - 1 : prev - 1));
  };

  // Automatically change image every 3 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      handleNext();
    }, 3000); // Change image every 3 seconds

    // Clear the interval on component unmount
    return () => clearInterval(interval);
  }, [index, imgs.length]);

  return (
    <div className="relative h-[220px] w-[350px] sm:h-[260px] sm:w-[92%] mx-auto shadow-xl rounded-md overflow-hidden">
      <AnimatedImg
        key={imgs[index]} // trigger animation on change
        src={imgs[index]}
        alt="project screenshot"
      />
      {imgs.length > 1 && (
        <span>
          <button
            onClick={handlePrev}
            className="absolute left-2 top-1/2 transform -translate-y-1/2 text-3xl text-white bg-black bg-opacity-30 hover:bg-opacity-70 rounded-full w-8 h-8 flex items-center justify-center"
          >
            <RxCaretLeft />
          </button>
          <button
            onClick={handleNext}
            className="absolute right-2 top-1/2 transform -translate-y-1/2 text-3xl text-white bg-black bg-opacity-30 hover:bg-opacity-70 rounded-full w-8 h-8 flex items-center justify-center"
          >
            <RxCaretRight />
          </button>
        </span>
      )}
    </div>
  );
};

export default WorkCard;

const Card = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;

  .popup {
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    opacity: 0;
    margin: auto;
    transition: 0.5s ease;
    background: rgba(255, 255, 255, 0.5);
    backdrop-filter: blur(2px);
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
  }

  &:hover .popup {
    opacity: 1;
  }
`;
