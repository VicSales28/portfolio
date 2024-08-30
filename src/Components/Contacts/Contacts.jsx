import React from 'react';

import SocialButton from './SubComponents/SocialBtn';

import { useLanguage } from '../../ContextAPI/LanguageContext';
import { descriptionsData as descriptionsDataEN } from '../../Data/English/Descriptions';
import { descriptionsData as descriptionsDataPT } from '../../Data/Portuguese/Descriptions';
import Preview from '../../Styles/Assets/Pictures/SVG/github-preview.svg';
import Linkedin from '../../Styles/Assets/Icons/linkedin-icon-02.svg';
import Gmail from '../../Styles/Assets/Icons/gmal-icon-01.svg';
import GitHub from '../../Styles/Assets/Icons/github-icon-02.svg';

import "../../Styles/Components/Contacts/Contacts.css";

const Contacts = () => {
  const { language, contactsTitle } = useLanguage();

  const descriptionsData = language === 'EN' ? descriptionsDataEN : descriptionsDataPT;

  const descriptionData = descriptionsData.find(item => item.section === 'contacts');

  return (
    <div className="contacts-container">

      <p className="contacts-title poppins-extrabold">
        {contactsTitle.contacts}
      </p>

      <section className="contacts-section">

        <div className="contacts-info poppins-regular">
          <p>{descriptionData.description}</p>

          <div className='hide-sm'>
            <SocialButton
              buttonText="Linkedin"
              href="https://www.linkedin.com/in/victoria-sales-dev/"
              svgImage={Linkedin}
            />
            <SocialButton
              buttonText="Gmail"
              href="mailto:contatovictoriasales@gmail.com"
              svgImage={Gmail}
            />
            <SocialButton
              buttonText="GitHub"
              href="https://github.com/VicSales28?tab=projects"
              svgImage={GitHub}
            />
          </div>

          <div className='liks-mobile hide-lg'>
            <a href="https://www.linkedin.com/in/victoria-sales-dev/">
              <img src={Linkedin} alt="GitHub" />
            </a>

            <a href="mailto:contatovictoriasales@gmail.com">
              <img src={Gmail} alt="GitHub" />
            </a>

            <a href="https://github.com/VicSales28?tab=projects">
              <img src={GitHub} alt="GitHub" />
            </a>

          </div>
        </div>

        <div className="contacts-image">
          <img
            src={Preview}
            alt="A computer screen displaying the GitHub profile of the portfolio owner"
          />
        </div>

      </section>

    </div>
  );
};

export default Contacts;
