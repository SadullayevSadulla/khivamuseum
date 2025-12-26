import React from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import img from "../assets/_1759731797457.png";
import img1 from "../assets/khiva.jpg";
import img2 from "../assets/_1756636849768.jpeg"; 
import img3 from "../assets/art-2.jpg";
import './Elonlar/elonlar.css';

const Announcements = () => {
  const { t } = useTranslation();
  
  const announcements = [
    { 
      id: 1, 
      title: t('elderly_discounts'), 
      image: img,
      date: '2023-12-10' 
    },
    { 
      id: 2, 
      title: t('mobile_reception'), 
      image: img1,
      date: '2023-12-05' 
    },
    { 
      id: 3, 
      title: t('open_doors_week'), 
      image: img2,
      date: '2023-12-15' 
    },
    { 
      id: 4, 
      title: t('elderly_discounts'), 
      image: img3,
      date: '2023-12-20' 
    },
  ];

  return (
    <section>
      <div className="ikki">
        <div className="about container">
          <h1>{t('announcements')}</h1>
          <p>{t('home')} ----- {t('announcements')}</p>
        </div>
      </div>
      <div className="bit container">
        {announcements.map((item) => (
          <div key={item.id} className="bit1">
            <img src={item.image} alt={item.title} />
            <h1>{item.title}</h1>
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              width="30px" 
              height="30px" 
              viewBox="0 0 24 24"
            >
              <path 
                fill="none" 
                stroke="currentColor" 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                d="M3 12.013L20.789 12m-6.776 7L21 12l-6.988-7" 
                strokeWidth="1" 
              />
            </svg>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Announcements;
