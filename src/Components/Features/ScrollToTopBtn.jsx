import React, { useState, useEffect } from 'react';
import { FaArrowUp } from 'react-icons/fa';

import '../../Styles/Components/Features/ScrollToTopBtn.css';

const ScrollToTopBtn = () => {
  const [visible, setVisible] = useState(false);

  const toggleVisibility = () => {
    if (window.pageYOffset > 300) {
      setVisible(true);
    } else {
      setVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  useEffect(() => {
    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  return (
    <div className="scroll-to-top-btn">
      {visible && 
        <button onClick={scrollToTop} className="scroll-button">
          <FaArrowUp className="arrow-icon"/>
        </button>}
    </div>
  );
};

export default ScrollToTopBtn;