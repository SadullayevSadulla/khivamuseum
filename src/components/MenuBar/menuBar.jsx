import React from "react";
import { Link } from "react-router-dom";
import { ChevronDown } from "lucide-react"; // Ikonka qo'shildi
import "./menuBar.css";
import { useTranslation } from "react-i18next";

const MenuBar = () => {
  const { t } = useTranslation();

  return (
    <header className="mnuH">
      <div className="menuH container">
        <nav className="navbar">
          <Link to="/" className="nav-link">{t('home')}</Link>
          <Link to="/about" className="nav-link">{t('about')}</Link>
          <Link to="/collection" className="nav-link">{t('collection')}</Link>
          <Link to="/gallery" className="nav-link">{t('gallery')}</Link>
          
          {/* Dropdown qismi */}
          <div className="dropdown-container">
           <div className="v">
             <div className="dropdown-label">
              <span className="dropdown-title">{t('news')}</span>
              <ChevronDown className="chevron-icon" size={18} />
            </div>
            <div className="dropdown-menu">
              <Link to="/news" className="menu-item">
                {t('news')}
              </Link>
              <div className="divider"></div>
              <Link to="/announcements" className="menu-item">
                {t('announcements')}
              </Link>
            </div>
           </div>
          </div>

          <Link to="/contact" className="nav-link">{t('contact')}</Link>
        </nav>
      </div>
    </header>
  );
};

export default MenuBar;