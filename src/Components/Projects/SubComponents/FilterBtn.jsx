import React from 'react';

const FilterBtn = ({ buttonText, onClick }) => {
  return (
    <button className="filter-project-btn">
      <div className="rtgle1-filter-project-btn"></div>
      <div className="rtgle2-filter-project-btn"></div>
      <span
        id="text-filter-project-btn"
        className="poppins-regular"
        onClick={onClick}
        >
        {buttonText}
      </span>
    </button>
  );
};

export default FilterBtn;
