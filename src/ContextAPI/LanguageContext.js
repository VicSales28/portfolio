import React, { createContext, useState, useContext } from 'react';

import { messages, navItems, aboutTitle, projectsTitle, careerTitle, contactsTitle, projectsData } from './Utils/translationUtils';

// Cria o contexto
const LanguageContext = createContext();

// Fornece o contexto aos componentes
export const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState('EN');

  // Função para alternar o idioma
  const toggleLanguage = () => {
    setLanguage(prevLanguage => (prevLanguage === 'EN' ? 'PT' : 'EN'));
  };

  return (
    <LanguageContext.Provider value={{ 
      language, 
      toggleLanguage, 
      messages: messages[language], 
      navItems: navItems[language], 
      aboutTitle: aboutTitle[language], 
      projectsTitle: projectsTitle[language],
      contactsTitle: contactsTitle[language],
      careerTitle: careerTitle[language],
      projectsData: projectsData[language] 
      }}>
      {children}
    </LanguageContext.Provider>
  );
};

// Hook para usar o contexto facilmente
export const useLanguage = () => useContext(LanguageContext);

