import React from 'react';

import { descriptionsData } from '../../Data/Descriptions';
import Preview from '../../Styles/Assets/Pictures/SVG/github-preview.svg';

const Contacts = () => {
  const descriptionData = descriptionsData.find(item => item.section === 'contacts');

  return (
    <div>

      <h2>Contacts</h2>

      <div className="contact-info">

        <div>
          <p>{descriptionData.description}</p>
        </div>

        <div className="contact-buttons">
          <button>Linkedin</button>
          <button>Gmail</button>
          <button>GitHub</button>
        </div>

      </div>

      <div className="contact-image">
        <img src={Preview} alt="A computer screen displaying the GitHub profile of the portfolio owner" />
      </div>
    </div>
  );
};

export default Contacts;
