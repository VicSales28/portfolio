import React from 'react';
import { useSwipeable } from 'react-swipeable';

const CareerHighlights = ({ period, company, roleDesc, role, availableSetofImgs, images, availableHeroImg, heroImg, id }) => {
  const [currentImageIndex, setCurrentImageIndex] = React.useState(0);

  const handlers = useSwipeable({
    onSwipedLeft: () => setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length),
    onSwipedRight: () => setCurrentImageIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length),
    preventDefaultTouchmoveEvent: true,
    trackMouse: true
  });

  return (
    <div className="job-card">

      {availableSetofImgs && images.length > 0 && (
        <div className="job-carousel" {...handlers}>
          <img src={images[currentImageIndex]} alt={`slide ${currentImageIndex}`} />
          <div className="navigation-dots">
            {images.map((_, index) => (
              <div
                key={index}
                className={`dot ${currentImageIndex === index ? 'active' : ''}`}
              ></div>
            ))}
          </div>
        </div>
      )}

      <div className="job-details">
        <p className="role poppins-semibold">{role}</p>
        <p className="role-desc poppins-regular">{roleDesc}</p>
        <p className="company poppins-medium">{company}</p>
        <small className="period poppins-regular">{period}</small>
      </div>
    </div>
  );
};

export default CareerHighlights;
