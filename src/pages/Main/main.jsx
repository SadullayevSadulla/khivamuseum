import React from "react";
import "./main.css";
import xiva from "../../assets/xiva.webp";

const Main = () => {
    return (
        <main>
            <div className="main_card container">
                <div className="main_left">
                    <h1>Xiva muzeyi – 1970 yildan beri tarix merosi</h1>
                    <p>
                        Xiva muzeyi 1970 yilda tashkil etilgan bo‘lib, Xiva va uning atrofi
                        hududning boy tarixiy merosini saqlash va namoyish etishga
                        bag‘ishlangan nufuzli madaniy va ta’lim muassasasidir. Ko‘p
                        tarmoqli markaz sifatida muzey tadqiqot, konservatsiya va omma
                        ta’limida muhim rol o‘ynaydi. U Xivaning o'tmishidagi san’at,
                        me’morlik va kundalik hayot an’analari aks etgan keng kolleksiyaga ega.
                        Muzey shahar madaniy merosining nafaqat qo‘riqchisi, balki mahalliy
                        aholi va mehmonlar orasida tarixiy ongni rivojlantirish va qadrlash
                        uchun markaz sifatida xizmat qiladi. Tashkil topganidan buyon Xiva
                        muzeyi ilmiy tadqiqotlarni qo‘llab-quvvatlash va madaniy muloqotni
                        rivojlantirishda muhim rol o‘ynab, O‘zbekiston tarixini asrashda
                        asosiy muassasa sifatida o‘z o‘rnini mustahkamladi.
                    </p>

                    <div className="main_btnnn">
                        <button
                            type="button"
                            className="main_btn"
                            aria-label="Chipta olish"
                        >
                            Chipta olish
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="20"
                                height="20"
                                viewBox="0 0 512 512"
                                aria-hidden="true"
                                focusable="false"
                            >
                                <path
                                    fill="none"
                                    stroke="currentColor"
                                    strokeMiterlimit="10"
                                    strokeWidth="32"
                                    d="M366.05 146a46.7 46.7 0 0 1-2.42-63.42a3.87 3.87 0 0 0-.22-5.26l-44.13-44.18a3.89 3.89 0 0 0-5.5 0l-70.34 70.34a23.6 23.6 0 0 0-5.71 9.24a23.66 23.66 0 0 1-14.95 15a23.7 23.7 0 0 0-9.25 5.71L33.14 313.78a3.89 3.89 0 0 0 0 5.5l44.13 44.13a3.87 3.87 0 0 0 5.26.22a46.69 46.69 0 0 1 65.84 65.84a3.87 3.87 0 0 0 .22 5.26l44.13 44.13a3.89 3.89 0 0 0 5.5 0l180.4-180.39a23.7 23.7 0 0 0 5.71-9.25a23.66 23.66 0 0 1 14.95-15a23.6 23.6 0 0 0 9.24-5.71l70.34-70.34a3.89 3.89 0 0 0 0-5.5l-44.13-44.13a3.87 3.87 0 0 0-5.26-.22a46.7 46.7 0 0 1-63.42-2.32Z"
                                />
                                <path
                                    fill="none"
                                    stroke="currentColor"
                                    strokeLinecap="round"
                                    strokeMiterlimit="10"
                                    strokeWidth="32"
                                    d="m250.5 140.44l-16.51-16.51m60.53 60.53l-11.01-11m55.03 55.03l-11-11.01m60.53 60.53l-16.51-16.51"
                                />
                            </svg>
                        </button>

                        <button
                            type="button"
                            className="main_btn1"
                            aria-label="Batafsil"
                        >
                            Batafsil
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

                <div className="main_right">
                    <img src={xiva} alt="Xiva muzeyi" />
                </div>
            </div>
        </main>
    );
};

export default Main;