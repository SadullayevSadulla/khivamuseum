import React from "react";
import img from "../../assets/art-2.jpg"
import img2 from "../../assets/art-3.webp"
import img3 from "../../assets/art-1.webp"
import "./mainBoy.css"
import { useTranslation } from "react-i18next"

const MainBoy = () => {
    const { t } = useTranslation();
    return <>
        <section>
            <div className="mainBoy container">
                <div className="mainBoy1">
                    <img src={img} alt="img" />
                    <div className="mainBoy_text">
                        <h1>{t('Boy')}</h1>
                        <p>{t('Boy1')}</p>
                        <button
                            type="button"
                            className="main_btn123"
                            aria-label="Batafsil"
                        >
                            {t('Boy2')}
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="15"
                                height="15"
                                viewBox="0 0 24 24"
                                aria-hidden="true"
                                focusable="false"
                            >
                                <path
                                    fill="currentColor"
                                    d="m6.5 17.5l8.25-5.5L6.5 6.5l1-1.5L18 12L7.5 19z"
                                />
                            </svg>
                        </button>
                    </div>
                </div>
                <div className="mainBoy1">
                        <img src={img2} alt="img" />
                    <div className="mainBoy_text">
                        <h1>{t('Boy3')}</h1>
                        <p>{t('Boy4')}</p>
                        <button
                            type="button"
                            className="main_btn123"
                            aria-label="Batafsil"
                        >
                            {t('Boy5')}
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="15"
                                height="15"
                                viewBox="0 0 24 24"
                                aria-hidden="true"
                                focusable="false"
                            >
                                <path
                                    fill="currentColor"
                                    d="m6.5 17.5l8.25-5.5L6.5 6.5l1-1.5L18 12L7.5 19z"
                                />
                            </svg>
                        </button>
                    </div>
                </div>
                <div className="mainBoy1">
                    <img src={img3} alt="img" />
                    <div className="mainBoy_text">
                        <h1>{t('Boy6')}</h1>
                        <p>{t('Boy7')}</p>
                        <button
                            type="button"
                            className="main_btn123"
                            aria-label="Batafsil"
                        >
                            {t('Boy8')}
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="15"
                                height="15"
                                viewBox="0 0 24 24"
                                aria-hidden="true"
                                focusable="false"
                            >
                                <path
                                    fill="currentColor"
                                    d="m6.5 17.5l8.25-5.5L6.5 6.5l1-1.5L18 12L7.5 19z"
                                />
                            </svg>
                        </button>
                    </div>
                </div>
            </div>
        </section>
    </>
}

export default MainBoy