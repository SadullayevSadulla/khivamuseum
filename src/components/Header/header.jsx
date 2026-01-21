import React from "react";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useTranslation } from 'react-i18next';
import uzb from "../../assets/emojione--flag-for-uzbekistan (2).svg";
import en from "../../assets/circle-flags--lang-en.svg";
import ru from "../../assets/circle-flags--ru.svg";
import "./header.css";
import img1 from '../../assets/images.jpg';

const Header = () => {
    const { t, i18n } = useTranslation();
    const [isOpen, setIsOpen] = useState(false);
    const [isBurgerOpen, setIsBurgerOpen] = useState(false);
    const [isNewsOpen, setIsNewsOpen] = useState(false);

    const languages = [
        {
            code: "uz",
            label: "O'zbek",
            flag: uzb
        },
        {
            code: "en",
            label: "English",
            flag: en
        },
        {
            code: "ru",
            label: "Русский",
            flag: ru
        }
    ];

    const changeLanguage = async (lng) => {
        try {
            await i18n.changeLanguage(lng);
            localStorage.setItem('i18nextLng', lng);
            // Komponentlarni qayta yuklash uchun
            window.location.reload();
        } catch (error) {
            console.error('Xatolik yuz berdi:', error);
        } finally {
            setIsOpen(false);
        }
    };

    // Close dropdown when clicking outside
    useEffect(() => {
        const handleClickOutside = (event) => {
            // keep dropdown open when clicking inside main lang-selector or sidebar lang selector
            if (event.target.closest('.lang-selector') === null && event.target.closest('.sidebar-lang-selector') === null) {
                setIsOpen(false);
            }
        };
        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    const currentLanguage = languages.find(lang => lang.code === i18n.language) || languages[0];

    return (
        <header>
            <div className="wrap">
                <div className="header container">
                    <div className="khiva">
                        <div className={isBurgerOpen ? "lang-selector hidden" : "lang-selector"}>
                            <button
                                className="lang-btn"
                                onClick={() => setIsOpen(!isOpen)}
                                aria-haspopup="true"
                                aria-expanded={isOpen}
                            >
                                <img src={currentLanguage.flag} alt={currentLanguage.label} />
                                <span>{currentLanguage.label}</span>
                                <i className={`arrow ${isOpen ? "open" : ""}`}></i>
                            </button>

                            {isOpen && (
                                <ul className="lang-dropdown">
                                    {languages.map(lang => (
                                        <li
                                            key={lang.code}
                                            onClick={() => changeLanguage(lang.code)}
                                            className={i18n.language === lang.code ? "active" : ""}
                                            role="option"
                                            aria-selected={i18n.language === lang.code}
                                        >
                                            <img src={lang.flag} alt={lang.label} />
                                            <span>{lang.label}</span>
                                        </li>
                                    ))}
                                </ul>
                            )}
                        </div>
                        <div className="khiva_ay">
                            <div className="khiva_img">
                                <span>
                                    <a href="#">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20">
                                            <path fill="currentColor" d="M11 9a1 1 0 1 1-2 0a1 1 0 0 1 2 0m-4 1a1 1 0 1 1-2 0a1 1 0 0 1 2 0m8 0a1 1 0 1 1-2 0a1 1 0 0 1 2 0M3.97 4.02A1.7 1.7 0 0 0 2 5.697v8.605a1.7 1.7 
                    0 0 0 1.97 1.677a37.9 37.9 0 0 1 12.06 0A1.7 1.7 0 0 0 18 14.302V5.697a1.7 1.7 0 0 0-1.97-1.677a37.9 37.9 0 0 1-12.06 0M3 5.697a.7.7 0 0 1 .81-.69c4.1.662 8.28.662 12.38 0a.7.7 0 0 1 .81.69v8.605a
                    .7.7 0 0 1-.81.69l-.19-.03v-1.963a1 1 0 0 0-1-1h-2v2.613a39 39 0 0 0-1-.065V12a1 1 0 0 0-1-1H9a1 1 0 0 0-1 1v2.548q-.5.026-1 .065V12H5a1 1 0 0 0-1 1v1.963l-.19.03a.7.7 0 0 1-.81-.69z"/>
                                        </svg>
                                    </a>
                                </span>
                                <p>Khiva 360◦</p>
                            </div>
                        </div>

                        <div className="khiva_ay">
                            <div className="khiva_img2">
                                <span>
                                    <a href="#">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 32 32">
                                            <path fill="currentColor" d="m20.448 31.974l9.625-2.083s-3.474-23.484-3.5-23.641s-.156-.255-.281-.255c-.13 0-2.573-.182-2.573-.182s-1.703-1.698-1.922-1.88a.4.4 0 0 0-.161-.099l-1.219 28.141zm-4.833-16.901s-1.083-.563-2.365-.563c-1.932 0-2.005 1.203-2.005 1.521c0 1.641 4.318 2.286 4.318 6.172c0 3.057-1.922 5.01-4.542 5.01c-3.141 0-4.719-1.953-4.719-1.953l.859-2.781s1.661 1.422 3.042 1.422
                    c.901 0 1.302-.724 1.302-1.245c0-2.156-3.542-2.255-3.542-5.807c-.047-2.984 2.094-5.891 6.438-5.891c1.677 0 2.5.479 2.5.479l-1.26 3.625zm-.719-13.969c.177 0 .359.052.536.182c-1.313.62-2.75 2.188-3.344 5.323a76 76 0 0 1-2.516.771c.688-2.38 
                    2.359-6.26 5.323-6.26zm1.646 3.932v.182c-1.005.307-2.115.646-3.193.979c.62-2.37 1.776-3.526 2.781-3.958c.255.667.411 1.568.411 2.797zm.718-2.973c.922.094 1.521 1.151 1.901 2.339c-.464.151-.979.307-1.542.484v-.333c0-1.005-.13-1.828-.359-2.495zm3.99 1.718c-.031 0-.083.026-.104.026c-.026 0-.385.099-.953.281C19.63 2.442 
                    18.625.927 16.849.927h-.156C16.183.281 15.558 0 15.021 0c-4.141 0-6.12 5.172-6.74 7.797c-1.594.484-2.75.844-2.88.896c-.901.286-.927.313-1.031 1.161c-.099.615-2.438 18.75-2.438 18.75L20.01 32z"/>
                                        </svg>
                                    </a>
                                </span>
                                <p>Khiva Museum Shop</p>
                            </div>
                        </div>
                    </div>

                    <div className="khiva_orta">
                        <a href="#">
                            <img src={img1} alt="img" />
                        </a>
                    </div>
                    <div className="khiva_uz">
                        <div className="khiva_icon">
                            <span>
                                <a href="#">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="20px" height="20px" viewBox="0 0 1024 1024"><path fill="currentColor" d="M960 509.2c0-2.2 0-4.7-.1-7.6c-.1-8.1-.3-17.2-.5-26.9c-.8-27.9-2.2-55.7-4.4-81.9c-3-36.1-7.4-66.2-13.4-88.8a139.52 139.52 0 0 0-98.3-98.5c-28.3-7.6-83.7-12.3-161.7-15.2c-37.1-1.4-76.8-2.3-116.5-2.8c-13.9-.2-26.8-.3-38.4-.4h-29.4c-11.6.1-24.5.2-38.4.4c-39.7.5-79.4 1.4-116.5 2.8c-78 3-133.5 7.7-161.7 15.2A139.35 139.35 0 0 0 82.4 304C76.3 326.6 72 356.7 69 392.8c-2.2 26.2-3.6 54-4.4 81.9c-.3 9.7-.4 18.8-.5 26.9c0 2.9-.1 5.4-.1 7.6v5.6c0 2.2 0 4.7.1 7.6c.1 8.1.3 17.2.5 26.9c.8 27.9 2.2 55.7 4.4 81.9c3 36.1 7.4 66.2 13.4 88.8c12.8 47.9 50.4 85.7 98.3 98.5c28.2 7.6 83.7 12.3 161.7 15.2c37.1 1.4 76.8 2.3 116.5 2.8c13.9.2 26.8.3 38.4.4h29.4c11.6-.1 24.5-.2 38.4-.4c39.7-.5 79.4-1.4 116.5-2.8c78-3 133.5-7.7 161.7-15.2c47.9-12.8 85.5-50.5 98.3-98.5c6.1-22.6 10.4-52.7 13.4-88.8c2.2-26.2 3.6-54 4.4-81.9c.3-9.7.4-18.8.5-26.9c0-2.9.1-5.4.1-7.6zm-72 5.2c0 2.1 0 4.4-.1 7.1c-.1 7.8-.3 16.4-.5 25.7c-.7 26.6-2.1 53.2-4.2 77.9c-2.7 32.2-6.5 58.6-11.2 76.3c-6.2 23.1-24.4 41.4-47.4 47.5c-21 5.6-73.9 10.1-145.8 12.8c-36.4 1.4-75.6 2.3-114.7 2.8c-13.7.2-26.4.3-37.8.3h-28.6l-37.8-.3c-39.1-.5-78.2-1.4-114.7-2.8c-71.9-2.8-124.9-7.2-145.8-12.8c-23-6.2-41.2-24.4-47.4-47.5c-4.7-17.7-8.5-44.1-11.2-76.3c-2.1-24.7-3.4-51.3-4.2-77.9c-.3-9.3-.4-18-.5-25.7c0-2.7-.1-5.1-.1-7.1v-4.8c0-2.1 0-4.4.1-7.1c.1-7.8.3-16.4.5-25.7c.7-26.6 2.1-53.2 4.2-77.9c2.7-32.2 6.5-58.6 11.2-76.3c6.2-23.1 24.4-41.4 47.4-47.5c21-5.6 73.9-10.1 145.8-12.8c36.4-1.4 75.6-2.3 114.7-2.8c13.7-.2 26.4-.3 37.8-.3h28.6l37.8.3c39.1.5 78.2 1.4 114.7 2.8c71.9 2.8 124.9 7.2 145.8 12.8c23 6.2 41.2 24.4 47.4 47.5c4.7 17.7 8.5 44.1 11.2 76.3c2.1 24.7 3.4 51.3 4.2 77.9c.3 9.3.4 18 .5 25.7c0 2.7.1 5.1.1 7.1zM423 646l232-135l-232-133z" /></svg>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="20px" height="20px" viewBox="0 0 24 24"><g fill="none"><rect width="17" height="17" x="3.5" y="3.5" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" rx="5.5" /><circle cx="12" cy="12" r="3.606" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" /><circle cx="16.894" cy="7.106" r="1.03" fill="currentColor" /></g></svg>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="20px" height="20px" viewBox="0 0 24 24"><path fill="currentColor" d="M5.856 6.84a.75.75 0 0 0-1.106.66V17a.75.75 0 0 0 1.5 0V8.756l5.394 2.904c.222.12.49.12.712 0l5.394-2.904V17a.75.75 0 0 0 1.5 0V7.5a.75.75 0 0 0-1.106-.66L12 10.148z" /><path fill="currentColor" fillRule="evenodd" d="M17.31 3.722a59.6 59.6 0 0 0-10.62 0l-1.518.135a3.53 3.53 0 0 0-3.179 3.006a35.5 35.5 0 0 0 0 10.274a3.53 3.53 0 0 0 3.18 3.005l1.516.136c3.534.316 7.088.316 10.622 0l1.517-.136a3.53 3.53 0 0 0 3.179-3.005a35.5 35.5 0 0 0 0-10.274a3.53 3.53 0 0 0-3.18-3.006zM6.824 5.216a58 58 0 0 1 10.354 0l1.517.136a2.03 2.03 0 0 1 1.829 1.728a34 34 0 0 1 0 9.84a2.03 2.03 0 0 1-1.829 1.728l-1.517.136c-3.444.308-6.91.308-10.354 0l-1.517-.136a2.03 2.03 0 0 1-1.829-1.728a34 34 0 0 1 0-9.84a2.03 2.03 0 0 1 1.829-1.728z" clipRule="evenodd" /></svg>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="20px" height="20px" viewBox="0 0 24 24"><path fill="currentColor" d="M6.54 5c.06.89.21 1.76.45 2.59l-1.2 1.2c-.41-1.2-.67-2.47-.76-3.79zm9.86 12.02c.85.24 1.72.39 2.6.45v1.49c-1.32-.09-2.59-.35-3.8-.75zM7.5 3H4c-.55 0-1 .45-1 1c0 9.39 7.61 17 17 17c.55 0 1-.45 1-1v-3.49c0-.55-.45-1-1-1c-1.24 0-2.45-.2-3.57-.57a.8.8 0 0 0-.31-.05c-.26 0-.51.1-.71.29l-2.2 2.2a15.15 15.15 0 0 1-6.59-6.59l2.2-2.2c.28-.28.36-.67.25-1.02A11.4 11.4 0 0 1 8.5 4c0-.55-.45-1-1-1" /></svg>
                                </a>
                            </span>
                            <p>+998 93 663 07 85</p>
                        </div>
                        <div className="khiva_chiqta">
                            <button className="btn1">
                                Chipta olish <svg xmlns="http://www.w3.org/2000/svg" width="20px" height="20px" viewBox="0 0 512 512"><path fill="none" stroke="currentColor" strokeMiterlimit="10" strokeWidth="32" d="M366.05 146a46.7 46.7 0 0 1-2.42-63.42a3.87 3.87 0 0 0-.22-5.26l-44.13-44.18a3.89 3.89 0 0 0-5.5 0l-70.34 70.34a23.6 23.6 0 0 0-5.71 9.24a23.66 23.66 0 0 1-14.95 15a23.7 23.7 0 0 0-9.25 5.71L33.14 313.78a3.89 3.89 0 0 0 0 5.5l44.13 44.13a3.87 3.87 0 0 0 5.26.22a46.69 46.69 0 0 1 65.84 65.84a3.87 3.87 0 0 0 .22 5.26l44.13 44.13a3.89 3.89 0 0 0 5.5 0l180.4-180.39a23.7 23.7 0 0 0 5.71-9.25a23.66 23.66 0 0 1 14.95-15a23.6 23.6 0 0 0 9.24-5.71l70.34-70.34a3.89 3.89 0 0 0 0-5.5l-44.13-44.13a3.87 3.87 0 0 0-5.26-.22a46.7 46.7 0 0 1-63.42-2.32Z" /><path fill="none" stroke="currentColor" strokeLinecap="round" strokeMiterlimit="10" strokeWidth="32" d="m250.5 140.44l-16.51-16.51m60.53 60.53l-11.01-11m55.03 55.03l-11-11.01m60.53 60.53l-16.51-16.51" /></svg>
                            </button>
                            <Link to="/profil" className="btn2">
                                <svg xmlns="http://www.w3.org/2000/svg" width="22.5px" height="20px" viewBox="0 0 36 32"><path fill="currentColor" d="M.5 31.983a.503.503 0 0 0 .612-.354c1.03-3.843 5.216-4.839 7.718-5.435c.627-.149 1.122-.267 1.444-.406c2.85-1.237 3.779-3.227 4.057-4.679a.5.5 0 0 0-.165-.473c-1.484-1.281-2.736-3.204-3.526-5.416a.5.5 0 0 0-.103-.171c-1.045-1.136-1.645-2.337-1.645-3.294c0-.559.211-.934.686-1.217a.5.5 0 0 0 .243-.408C10.042 5.036 13.67 1.026 18.12 1l.107.007c4.472.062 8.077 4.158 8.206 9.324a.5.5 0 0 0 .178.369c.313.265.459.601.459 1.057c0 .801-.427 1.786-1.201 2.772a.5.5 0 0 0-.084.158c-.8 2.536-2.236 4.775-3.938 6.145a.5.5 0 0 0-.178.483c.278 1.451 1.207 3.44 4.057 4.679c.337.146.86.26 1.523.403c2.477.536 6.622 1.435 7.639 5.232a.5.5 0 0 0 .966-.26c-1.175-4.387-5.871-5.404-8.393-5.95c-.585-.127-1.09-.236-1.336-.344c-1.86-.808-3.006-2.039-3.411-3.665c1.727-1.483 3.172-3.771 3.998-6.337c.877-1.14 1.359-2.314 1.359-3.317c0-.669-.216-1.227-.644-1.663C27.189 4.489 23.19.076 18.227.005l-.149-.002c-4.873.026-8.889 4.323-9.24 9.83c-.626.46-.944 1.105-.944 1.924c0 1.183.669 2.598 1.84 3.896c.809 2.223 2.063 4.176 3.556 5.543c-.403 1.632-1.55 2.867-3.414 3.676c-.241.105-.721.22-1.277.352c-2.541.604-7.269 1.729-8.453 6.147a.5.5 0 0 0 .354.612" /></svg>
                            </Link>
                        </div>
                        <div className="burger_button" onClick={() => setIsBurgerOpen(!isBurgerOpen)}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="20.84px" height="20px" viewBox="0 0 25 24"><path fill="currentColor" d="M4.32 4.75a1.25 1.25 0 0 0 0 2.5h.01a1.25 1.25 0 1 0 0-2.5zm3.99.5a.75.75 0 1 0 0 1.5h12a.75.75 0 1 0 0-1.5zm0 12a.75.75 0 0 0 0 1.5h12a.75.75 0 1 0 0-1.5zM7.56 12a.75.75 0 0 1 .75-.75h12a.75.75 0 1 1 0 1.5h-12a.75.75 0 0 1-.75-.75m-4.49 0c0-.69.56-1.25 1.25-1.25h.01a1.25 1.25 0 1 1 0 2.5h-.01c-.69 0-1.25-.56-1.25-1.25m1.25 4.75a1.25 1.25 0 1 0 0 2.5h.01a1.25 1.25 0 1 0 0-2.5z" /></svg>
                        </div>
                    </div>
                </div>
                {isBurgerOpen && (
                    <div className="sidebar-overlay" onClick={() => setIsBurgerOpen(false)}>
                        <div className="sidebar" onClick={(e) => e.stopPropagation()}>
                            <div className="sidebar-header">
                                <img src={img1} alt="logo" className="sidebar-logo" />
                                <button className="sidebar-close" onClick={() => setIsBurgerOpen(false)}>✕</button>
                            </div>
                            <div className="sidebar-lang-selector">
                                <button
                                    className="sidebar-lang-btn"
                                    onClick={() => setIsOpen(!isOpen)}
                                >
                                    <img src={currentLanguage.flag} alt={currentLanguage.label} />
                                    <span>{currentLanguage.label}</span>
                                    <i className={`arrow ${isOpen ? "open" : ""}`}></i>
                                </button>

                                {isOpen && (
                                    <ul className="sidebar-lang-dropdown">
                                        {languages.map(lang => (
                                            <li
                                                key={lang.code}
                                                onClick={() => changeLanguage(lang.code)}
                                                className={i18n.language === lang.code ? "active" : ""}
                                            >
                                                <img src={lang.flag} alt={lang.label} />
                                                <span>{lang.label}</span>
                                            </li>
                                        ))}
                                    </ul>
                                )}
                            </div>

                            <div className="sidebar-body">
                            <nav className="sidebar-nav">
                                <Link to="/" className="sidebar-nav-link" onClick={() => setIsBurgerOpen(false)}>
                                    {t('home')}
                                </Link>
                                <Link to="/about" className="sidebar-nav-link" onClick={() => setIsBurgerOpen(false)}>
                                    {t('about')}
                                </Link>
                                <Link to="/collection" className="sidebar-nav-link" onClick={() => setIsBurgerOpen(false)}>
                                    {t('collection')}
                                </Link>
                                <Link to="/gallery" className="sidebar-nav-link" onClick={() => setIsBurgerOpen(false)}>
                                    {t('gallery')}
                                </Link>

                                <div className="sidebar-dropdown">
                                    <button
                                        className="sidebar-dropdown-toggle"
                                        onClick={() => setIsNewsOpen(!isNewsOpen)}
                                    >
                                        {t('news')}
                                        <span className={`dropdown-chevron ${isNewsOpen ? 'open' : ''}`}>^</span>
                                    </button>
                                    {isNewsOpen && (
                                        <div className="sidebar-submenu">
                                            <Link to="/news" className="sidebar-submenu-link" onClick={() => setIsBurgerOpen(false)}>
                                                {t('news')}
                                            </Link>
                                            <Link to="/announcements" className="sidebar-submenu-link" onClick={() => setIsBurgerOpen(false)}>
                                                {t('announcements')}
                                            </Link>
                                        </div>
                                    )}
                                </div>

                                <Link to="/contact" className="sidebar-nav-link" onClick={() => setIsBurgerOpen(false)}>
                                    {t('contact')}
                                </Link>
                            </nav>
                            </div>

                            <div className="sidebar-footer">
                                <div className="sidebar-shop">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 32 32">
                                        <path fill="currentColor" d="m20.448 31.974l9.625-2.083s-3.474-23.484-3.5-23.641s-.156-.255-.281-.255c-.13 0-2.573-.182-2.573-.182s-1.703-1.698-1.922-1.88a.4.4 0 0 0-.161-.099l-1.219 28.141zm-4.833-16.901s-1.083-.563-2.365-.563c-1.932 0-2.005 1.203-2.005 1.521c0 1.641 4.318 2.286 4.318 6.172c0 3.057-1.922 5.01-4.542 5.01c-3.141 0-4.719-1.953-4.719-1.953l.859-2.781s1.661 1.422 3.042 1.422c.901 0 1.302-.724 1.302-1.245c0-2.156-3.542-2.255-3.542-5.807c-.047-2.984 2.094-5.891 6.438-5.891c1.677 0 2.5.479 2.5.479l-1.26 3.625zm-.719-13.969c.177 0 .359.052.536.182c-1.313.62-2.75 2.188-3.344 5.323a76 76 0 0 1-2.516.771c.688-2.38 2.359-6.26 5.323-6.26zm1.646 3.932v.182c-1.005.307-2.115.646-3.193.979c.62-2.37 1.776-3.526 2.781-3.958c.255.667.411 1.568.411 2.797zm.718-2.973c.922.094 1.521 1.151 1.901 2.339c-.464.151-.979.307-1.542.484v-.333c0-1.005-.13-1.828-.359-2.495zm3.99 1.718c-.031 0-.083.026-.104.026c-.026 0-.385.099-.953.281C19.63 2.442 18.625.927 16.849.927h-.156C16.183.281 15.558 0 15.021 0c-4.141 0-6.12 5.172-6.74 7.797c-1.594.484-2.75.844-2.88.896c-.901.286-.927.313-1.031 1.161c-.099.615-2.438 18.75-2.438 18.75L20.01 32z" />
                                    </svg>
                                    <span>Khiva Museum Shop</span>
                                </div>

                                <div className="sidebar-shop">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20">
                                        <path fill="currentColor" d="M11 9a1 1 0 1 1-2 0a1 1 0 0 1 2 0m-4 1a1 1 0 1 1-2 0a1 1 0 0 1 2 0m8 0a1 1 0 1 1-2 0a1 1 0 0 1 2 0M3.97 4.02A1.7 1.7 0 0 0 2 5.697v8.605a1.7 1.7 0 0 0 1.97 1.677a37.9 37.9 0 0 1 12.06 0A1.7 1.7 0 0 0 18 14.302V5.697a1.7 1.7 0 0 0-1.97-1.677a37.9 37.9 0 0 1-12.06 0M3 5.697a.7.7 0 0 1 .81-.69c4.1.662 8.28.662 12.38 0a.7.7 0 0 1 .81.69v8.605a.7.7 0 0 1-.81.69l-.19-.03v-1.963a1 1 0 0 0-1-1h-2v2.613a39 39 0 0 0-1-.065V12a1 1 0 0 0-1-1H9a1 1 0 0 0-1 1v2.548q-.5.026-1 .065V12H5a1 1 0 0 0-1 1v1.963l-.19.03a.7.7 0 0 1-.81-.69z"/>
                                    </svg>
                                    <span>Khiva 360°</span>
                                </div>

                                <div className="sidebar-socials">
                                    <a href="#">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 1024 1024">
                                            <path fill="currentColor" d="M960 509.2c0-2.2 0-4.7-.1-7.6c-.1-8.1-.3-17.2-.5-26.9c-.8-27.9-2.2-55.7-4.4-81.9c-3-36.1-7.4-66.2-13.4-88.8a139.52 139.52 0 0 0-98.3-98.5c-28.3-7.6-83.7-12.3-161.7-15.2c-37.1-1.4-76.8-2.3-116.5-2.8c-13.9-.2-26.8-.3-38.4-.4h-29.4c-11.6.1-24.5.2-38.4.4c-39.7.5-79.4 1.4-116.5 2.8c-78 3-133.5 7.7-161.7 15.2A139.35 139.35 0 0 0 82.4 304C76.3 326.6 72 356.7 69 392.8c-2.2 26.2-3.6 54-4.4 81.9c-.3 9.7-.4 18.8-.5 26.9c0 2.9-.1 5.4-.1 7.6v5.6c0 2.2 0 4.7.1 7.6c.1 8.1.3 17.2.5 26.9c.8 27.9 2.2 55.7 4.4 81.9c3 36.1 7.4 66.2 13.4 88.8c12.8 47.9 50.4 85.7 98.3 98.5c28.2 7.6 83.7 12.3 161.7 15.2c37.1 1.4 76.8 2.3 116.5 2.8c13.9.2 26.8.3 38.4.4h29.4c11.6-.1 24.5-.2 38.4-.4c39.7-.5 79.4-1.4 116.5-2.8c78-3 133.5-7.7 161.7-15.2c47.9-12.8 85.5-50.5 98.3-98.5c6.1-22.6 10.4-52.7 13.4-88.8c2.2-26.2 3.6-54 4.4-81.9c.3-9.7.4-18.8.5-26.9c0-2.9.1-5.4.1-7.6zm-72 5.2c0 2.1 0 4.4-.1 7.1c-.1 7.8-.3 16.4-.5 25.7c-.7 26.6-2.1 53.2-4.2 77.9c-2.7 32.2-6.5 58.6-11.2 76.3c-6.2 23.1-24.4 41.4-47.4 47.5c-21 5.6-73.9 10.1-145.8 12.8c-36.4 1.4-75.6 2.3-114.7 2.8c-13.7.2-26.4.3-37.8.3h-28.6l-37.8-.3c-39.1-.5-78.2-1.4-114.7-2.8c-71.9-2.8-124.9-7.2-145.8-12.8c-23-6.2-41.2-24.4-47.4-47.5c-4.7-17.7-8.5-44.1-11.2-76.3c-2.1-24.7-3.4-51.3-4.2-77.9c-.3-9.3-.4-18-.5-25.7c0-2.7-.1-5.1-.1-7.1v-4.8c0-2.1 0-4.4.1-7.1c.1-7.8.3-16.4.5-25.7c.7-26.6 2.1-53.2 4.2-77.9c2.7-32.2 6.5-58.6 11.2-76.3c6.2-23.1 24.4-41.4 47.4-47.5c21-5.6 73.9-10.1 145.8-12.8c36.4-1.4 75.6-2.3 114.7-2.8c13.7-.2 26.4-.3 37.8-.3h28.6l37.8.3c39.1.5 78.2 1.4 114.7 2.8c71.9 2.8 124.9 7.2 145.8 12.8c23 6.2 41.2 24.4 47.4 47.5c4.7 17.7 8.5 44.1 11.2 76.3c2.1 24.7 3.4 51.3 4.2 77.9c.3 9.3.4 18 .5 25.7c0 2.7.1 5.1.1 7.1zM423 646l232-135l-232-133z" />
                                        </svg>
                                    </a>
                                    <a href="#">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24">
                                            <g fill="none"><rect width="17" height="17" x="3.5" y="3.5" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" rx="5.5" /><circle cx="12" cy="12" r="3.606" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" /><circle cx="16.894" cy="7.106" r="1.03" fill="currentColor" /></g>
                                        </svg>
                                    </a>
                                    <a href="#">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24">
                                            <path fill="currentColor" d="M5.856 6.84a.75.75 0 0 0-1.106.66V17a.75.75 0 0 0 1.5 0V8.756l5.394 2.904c.222.12.49.12.712 0l5.394-2.904V17a.75.75 0 0 0 1.5 0V7.5a.75.75 0 0 0-1.106-.66L12 10.148z" />
                                            <path fill="currentColor" fillRule="evenodd" d="M17.31 3.722a59.6 59.6 0 0 0-10.62 0l-1.518.135a3.53 3.53 0 0 0-3.179 3.006a35.5 35.5 0 0 0 0 10.274a3.53 3.53 0 0 0 3.18 3.005l1.516.136c3.534.316 7.088.316 10.622 0l1.517-.136a3.53 3.53 0 0 0 3.179-3.005a35.5 35.5 0 0 0 0-10.274a3.53 3.53 0 0 0-3.18-3.006zM6.824 5.216a58 58 0 0 1 10.354 0l1.517.136a2.03 2.03 0 0 1 1.829 1.728a34 34 0 0 1 0 9.84a2.03 2.03 0 0 1-1.829 1.728l-1.517.136c-3.444.308-6.91.308-10.354 0l-1.517-.136a2.03 2.03 0 0 1-1.829-1.728a34 34 0 0 1 0-9.84a2.03 2.03 0 0 1 1.829-1.728z" clipRule="evenodd" />
                                        </svg>
                                    </a>
                                    <a href="#">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24">
                                            <path fill="currentColor" d="M6.54 5c.06.89.21 1.76.45 2.59l-1.2 1.2c-.41-1.2-.67-2.47-.76-3.79zm9.86 12.02c.85.24 1.72.39 2.6.45v1.49c-1.32-.09-2.59-.35-3.8-.75zM7.5 3H4c-.55 0-1 .45-1 1c0 9.39 7.61 17 17 17c.55 0 1-.45 1-1v-3.49c0-.55-.45-1-1-1c-1.24 0-2.45-.2-3.57-.57a.8.8 0 0 0-.31-.05c-.26 0-.51.1-.71.29l-2.2 2.2a15.15 15.15 0 0 1-6.59-6.59l2.2-2.2c.28-.28.36-.67.25-1.02A11.4 11.4 0 0 1 8.5 4c0-.55-.45-1-1-1" />
                                        </svg>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </header>
    );
};

export default Header;
