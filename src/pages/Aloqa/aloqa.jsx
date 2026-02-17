import React from "react";
import { useTranslation } from "react-i18next";
import "./aloqa.css"

const Aloqa = () => {
    const { t } = useTranslation();
    return <>
        <section>
            <div className="ikki">
                <div className="about container">
                    <h1>Aloqa</h1>
                    <p>Bosh sahifa <div className="line"></div> <span>Aloqa</span></p>
                </div>
            </div>
            <div className="aloqa container">
                <div className="aloqa_cap">
                    <div className="aloqa_h1">
                        <h1>{t('aloqa')}</h1>
                    </div>
                    <div className="aloqa_input">
                        <div className="in">
                            <label htmlFor="name">{t('aloqa1')} <span>*</span></label>
                            <input type="text" placeholder="Ismingizni kiriting" />
                        </div>
                        <div className="in">
                            <label htmlFor="name">{t('aloqa1')} <span>*</span></label>
                            <input type="number" placeholder="+998 93 663 07 85" />
                        </div>
                        <div className="in">
                            <label htmlFor="name">{t('aloqa2')} <span>*</span></label>
                            <input type="text" placeholder="Familyangizni kiriting" />
                        </div>
                        <div className="in">
                            <label htmlFor="name">{t('aloqa3')} <span>*</span></label>
                            <input type="email" placeholder="example@gmail.com" />
                        </div>
                        <div className="in">
                            <label htmlFor="message" style={{ marginBlock: "0px 5px", }}>{t('aloqa4')} <span>*</span></label>
                            <textarea id="message" placeholder="Savolingiz/xabaringiz" style={{ padding: "12px" }} className="tex"></textarea>
                        </div>
                    </div>
                    <div className="aloqa_btn">
                        <button>{t('aloqa5')}</button>
                    </div>
                </div>
                <div className="aloqa_on container">
                    <div style={{ overflow: 'hidden', }} className="n">
                        <iframe
                            src="https://yandex.uz/map-widget/v1/-/CLg7bRkj"
                            width="100%"
                            height="600"
                            frameBorder="0"
                            allowFullScreen={true}
                            style={{ borderRadius: '12px' }}
                            title="Xarita"
                        ></iframe>
                    </div>
                </div>
            </div>
            <div className="tel container">
                <div className="tel_chap">
                    <div className="tel4">
                        <h1>Manzil</h1>
                        <div className="c">
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                                <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
                            </svg>
                            <p>Xorazm viloyati, Xiva, Boltaev ko'chasi, 41-uy</p>
                        </div>
                    </div>
                    <div className="tel4">
                        <h1>Email</h1>
                        <div className="c">
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path strokeDasharray="64" strokeDashoffset="64" d="M4 5h16c0.55 0 1 0.45 1 1v12c0 0.55 -0.45 1 -1 1h-16c-0.55 0 -1 -0.45 -1 -1v-12c0 -0.55 0.45 -1 1 -1Z"><animate fill="freeze" attributeName="stroke-dashoffset" dur="0.6s" values="64;0" /></path><path strokeDasharray="24" strokeDashoffset="24" d="M3 6.5l9 5.5l9 -5.5"><animate fill="freeze" attributeName="stroke-dashoffset" begin="0.6s" dur="0.2s" values="24;0" /></path></g></svg>
                            <p>info@khivamuseum.uz</p>
                        </div>
                    </div>
                    <div className="tel4">
                        <h1>MFO</h1>
                        <p>00014</p>
                    </div>
                    <div className="tel4">
                        <h1>Bank</h1>
                        <p>Toshkent shahar Markaziy banki</p>
                    </div>
                </div>
                <div className="tel_ong">
                    <div className="tel4">
                        <h1>Telefon</h1>
                        <div className="c">
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path fill="none" stroke="currentColor" strokeDasharray="64" strokeDashoffset="64" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 3c0.5 0 2.5 4.5 2.5 5c0 1 -1.5 2 -2 3c-0.5 1 0.5 2 1.5 3c0.39 0.39 2 2 3 1.5c1 -0.5 2 -2 3 -2c0.5 0 5 2 5 2.5c0 2 -1.5 3.5 -3 4c-1.5 0.5 -2.5 0.5 -4.5 0c-2 -0.5 -3.5 -1 -6 -3.5c-2.5 -2.5 -3 -4 -3.5 -6c-0.5 -2 -0.5 -3 0 -4.5c0.5 -1.5 2 -3 4 -3Z"><animate fill="freeze" attributeName="stroke-dashoffset" dur="0.6s" values="64;0" /></path></svg>
                            <p>+998 62 377 63 41</p>
                        </div>
                    </div>
                    <div className="tel4">
                        <h1>R/S</h1>
                        <p>400121860334067082200349001</p>
                    </div>
                    <div className="tel4">
                        <h1>INN</h1>
                        <p>201126524</p>
                    </div>
                    <div className="tel4">
                        <h1>Tel/faks</h1>
                        <p>+998 91 857 45 44</p>
                    </div>
                </div>
            </div>
        </section>
    </>
}

export default Aloqa;