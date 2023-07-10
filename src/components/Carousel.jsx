import React, { useState } from 'react';
import '../styles/components/carousel.sass' 
import { FaAngleLeft, FaAngleRight } from 'react-icons/fa'

const Carousel = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToNextSlide = () => {
    const nextIndex = (currentIndex + 1) % images.length;
    setCurrentIndex(nextIndex);
  };

  const goToPreviousSlide = () => {
    const prevIndex = (currentIndex + images.length - 1) % images.length;
    setCurrentIndex(prevIndex);
  };

  return (
    <div className="carousel">
      <button className="carousel_prev-button" onClick={goToPreviousSlide}>
        <FaAngleLeft/>
      </button>
      <img className="carousel_image" src={images[currentIndex]} alt="Carousel" />
      <button className="carousel_next-button" onClick={goToNextSlide}>
        <FaAngleRight/>
      </button>
    </div>
  );
};

export default Carousel;
