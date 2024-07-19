import React, { useState, useEffect, useRef } from 'react';
import '../../../Styles/Components/Projects/Projects.css';

const FilterDropdown = ({ selectedFilter, onSelectFilter }) => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

  const handleSelect = (value) => {
    onSelectFilter(value);
    setIsOpen(false);
  };

  const handleClickOutside = (event) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <div className="filter-dropdown-container hide-lg" ref={dropdownRef}>
      <div
        className={`filter-dropdown-header ${isOpen ? 'open' : ''}`}
        onClick={() => setIsOpen(!isOpen)}
      >
        {selectedFilter === "development"
          ? "Web Development"
          : selectedFilter === "analysis"
            ? "Data Analysis"
            : "UX/UI Design"}
        <span className="filter-dropdown-icon fas fa-chevron-down"></span>
      </div>
      {isOpen && (
        <div className="filter-dropdown-menu">
          <div
            className="filter-dropdown-item"
            onClick={() => handleSelect("development")}
          >
            Web Development
          </div>
          <div
            className="filter-dropdown-item"
            onClick={() => handleSelect("analysis")}
          >
            Data Analysis
          </div>
          <div
            className="filter-dropdown-item"
            onClick={() => handleSelect("uxui")}
          >
            UX/UI Design
          </div>
        </div>
      )}
    </div>
  );
};

export default FilterDropdown;
