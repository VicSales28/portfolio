import React from 'react';

import Signature from './SubComponents/Signature';
import NavItems from './SubComponents/NavItems';
import SocialMediaItems from './SubComponents/SocialMediaItems';

import '../../Styles/Components/PrimaryMenu/PrimaryMenu.css';

const PrimaryMenu = () => {
  return (
    <div className="div-primary-menu">
      <Signature />
      <NavItems />
      <SocialMediaItems />
    </div>
  );
};

export default PrimaryMenu;
