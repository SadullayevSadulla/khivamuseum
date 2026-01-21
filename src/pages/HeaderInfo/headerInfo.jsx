import React from 'react';
import { useTranslation } from 'react-i18next';  // Add this import
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay, EffectFade } from 'swiper/modules';

import kalta from '../../assets/xiva.webp';
import xiva from '../../assets/nzpkfm5qgjmve2v6b69y6a4b5ka66erc.jpg';
import arda from '../../assets/DJI_0001.00_01_05_18.Still001.jpg';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/effect-fade';
import './headerInfo.css';

const HeaderInfo = () => {
    const { t } = useTranslation();  // Add this line to initialize the translation function

    return (
        <section className="headerInfo container">
            <Swiper
                spaceBetween={0}
                effect="fade"
                autoplay={{ delay: 5000, disableOnInteraction: false }}
                navigation={true}
                pagination={{ clickable: true }}
                modules={[Navigation, Pagination, Autoplay, EffectFade]}
                className="headerSwiper"
            >
                <SwiperSlide>
                    <div className="slide">
                        <img src={kalta} alt="" />
                        <div className="textBox">
                            <h1>{t('kaltaminor_title')}</h1>
                            <p><svg xmlns="http://www.w3.org/2000/svg" width="20px" height="20px" viewBox="0 0 24 24"><g fill="currentColor" fillRule="evenodd" clipRule="evenodd"><path d="M7.25 10a4.75 4.75 0 1 1 9.5 0a4.75 4.75 0 0 1-9.5 0M12 6.75a3.25 3.25 0 1 0 0 6.5a3.25 3.25 0 0 0 0-6.5" /><path d="M3.524 8.857a8.29 8.29 0 0 1 8.26-7.607h.432a8.29 8.29 0 0 1 8.26 7.607a8.94 8.94 0 0 1-1.99 6.396l-4.793 5.861a2.187 2.187 0 0 1-3.386 0l-4.793-5.861a8.94 8.94 0 0 1-1.99-6.396m8.26-6.107A6.79 6.79 0 0 0 5.02 8.98a7.44 7.44 0 0 0 1.656 5.323l4.793 5.862a.687.687 0 0 0 1.064 0l4.793-5.862A7.44 7.44 0 0 0 18.98 8.98a6.79 6.79 0 0 0-6.765-6.23z" /></g></svg>{t('khiva_location')}</p>
                        </div>
                    </div>
                </SwiperSlide>

                <SwiperSlide>
                    <div className="slide">
                        <img src={xiva} alt="img" />
                        <div className="textBox">
                            <h1>{t('ichanqala_t')}</h1>
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                                <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z" />
                            </svg>
                        </div>
                    </div>
                </SwiperSlide>

                <SwiperSlide>
                    <div className="slide">
                        <img src={arda} alt="" />
                        <div className="textBox">
                            <h1>Arda Khiva – {t('modern_life')}</h1>
                            <p><svg xmlns="http://www.w3.org/2000/svg" width="20px" height="20px" viewBox="0 0 24 24"><g fill="currentColor" fillRule="evenodd" clipRule="evenodd"><path d="M7.25 10a4.75 4.75 0 1 1 9.5 0a4.75 4.75 0 0 1-9.5 0M12 6.75a3.25 3.25 0 1 0 0 6.5a3.25 3.25 0 0 0 0-6.5" /><path d="M3.524 8.857a8.29 8.29 0 0 1 8.26-7.607h.432a8.29 8.29 0 0 1 8.26 7.607a8.94 8.94 0 0 1-1.99 6.396l-4.793 5.861a2.187 2.187 0 0 1-3.386 0l-4.793-5.861a8.94 8.94 0 0 1-1.99-6.396m8.26-6.107A6.79 6.79 0 0 0 5.02 8.98a7.44 7.44 0 0 0 1.656 5.323l4.793 5.862a.687.687 0 0 0 1.064 0l4.793-5.862A7.44 7.44 0 0 0 18.98 8.98a6.79 6.79 0 0 0-6.765-6.23z" /></g></svg> {t('khiva_city')}</p>
                        </div>
                    </div>
                </SwiperSlide>
            </Swiper>
        </section>
    );
};

export default HeaderInfo;