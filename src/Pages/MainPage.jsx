import React from 'react';

import PrimaryMenu from '../Components/PrimaryMenu/PrimaryMenu';
import Hero from '../Components/Hero/Hero';
import About from '../Components/About/About';
import Projects from '../Components/Projects/Projects';
import Contacts from '../Components/Contacts/Contacts';


const MainPage = () => {
  return (
    <div>
      <PrimaryMenu/>
      <Hero />
      <About />
      <Projects />
      <Contacts />
    </div>
  );
};

export default MainPage;
