// src/pages/Main/main.jsx
import React from "react";
import { useTranslation } from 'react-i18next';
import "./main.css";
import xiva from "../../assets/xiva.webp";

const Main = () => {
    const { t } = useTranslation();
    
    return (
        <main>
            <div className="main_card container">
                <div className="main_left">
                    <h1 className="yt">{t('main_title')}</h1>
                    <p>{t('main_description')}</p>

                    <div className="main_btnnn">
                        <button
                            type="button"
                            className="main_btn"
                            aria-label={t('buy_ticket')}
                        >
                            {t('buy_ticket')}
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="20"
                                height="20"
                                viewBox="0 0 20 20"
                                fill="none"
                            >
                                <path
                                    d="M4.1665 10H15.8332M15.8332 10L9.99984 4.16666M15.8332 10L9.99984 15.8333"
                                    stroke="white"
                                    strokeWidth="1.5"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                />
                            </svg>
                        </button>
                    </div>
                </div>
                <div className="main_right container">
                    <img src={xiva} alt={t('khiva_museum')} />
                </div>
            </div>
        </main>
    );
};

export default Main;