import React from 'react';
import { useTranslation } from 'react-i18next';

const LanguageSwitcher = () => {
  const { i18n } = useTranslation();

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };

  return (
    <div className="language-switcher">
      <button 
        className={`language-btn ${i18n.language === 'uz' ? 'active' : ''}`}
        onClick={() => changeLanguage('uz')}
      >
        UZ
      </button>
      <button 
        className={`language-btn ${i18n.language === 'ru' ? 'active' : ''}`}
        onClick={() => changeLanguage('ru')}
      >
        RU
      </button>
      <button 
        className={`language-btn ${i18n.language === 'en' ? 'active' : ''}`}
        onClick={() => changeLanguage('en')}
      >
        EN
      </button>
      
      <style jsx>{`
        .language-switcher {
          display: flex;
          gap: 5px;
          margin-left: 20px;
        }
        .language-btn {
          background: none;
          border: 1px solid #ccc;
          border-radius: 4px;
          padding: 2px 8px;
          cursor: pointer;
          font-size: 12px;
          transition: all 0.3s ease;
        }
        .language-btn:hover {
          background: #f0f0f0;
        }
        .language-btn.active {
          background: #007bff;
          color: white;
          border-color: #0056b3;
        }
      `}</style>
    </div>
  );
};

export default LanguageSwitcher;
