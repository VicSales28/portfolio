import React, { useState } from 'react';

import Signature from './SubComponents/Signature';
import NavItems from './SubComponents/NavItems';
import SocialMediaItems from './SubComponents/SocialMediaItems';

import '../../Styles/Components/PrimaryMenu/PrimaryMenu.css';
import DropDownItems from './SubComponents/DropDownItems';

const PrimaryMenu = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const handleMenuClick = () => {
    setIsDropdownOpen(true);
  };

  const handleCloseClick = () => {
    setIsDropdownOpen(false);
  };

  return (
    <div>
      <div className="div-primary-menu">
        <Signature />
        <NavItems />
        <SocialMediaItems onMenuClick={handleMenuClick} />
      </div>

      {isDropdownOpen && (
      <div className="div-dropdown slide-down-enter hide-lg">
        <DropDownItems onCloseClick={handleCloseClick} />
      </div>
      )}

    </div>
  );
};

export default PrimaryMenu;
