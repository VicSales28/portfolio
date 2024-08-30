import React from 'react';
import { MdTranslate } from "react-icons/md"

import { useLanguage } from '../../../ContextAPI/LanguageContext';

const TranslateBtn = () => {
  const { language, toggleLanguage } = useLanguage();
  return (
    <button
      className="translate-btn hide-sm"
      title='Translate the content'
      onClick={toggleLanguage}
    >
      < MdTranslate />&nbsp;
      <span>{language === 'EN' ? 'PT' : 'EN'}</span>&nbsp;|&nbsp;<span>{language}</span>
    </button>
  );
};

export default TranslateBtn;
