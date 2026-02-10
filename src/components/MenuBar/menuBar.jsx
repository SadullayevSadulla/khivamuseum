import React from "react";
import { Link, useNavigate } from "react-router-dom"
import { ChevronDown } from "lucide-react"
import "./menuBar.css"
import { useTranslation } from "react-i18next"

const MenuBar = () => {
  const navigate = useNavigate()
  const { t } = useTranslation()

  return (
    <header className="mnuH">
      <div className="menuH container">
        <nav className="navbar">
          <Link to="/" className="nav-link">{t('home')}</Link>
          <Link to="/about" className="nav-link">{t('about')}</Link>
          <Link to="/collection" className="nav-link">{t('collection')}</Link>
          <Link to="/gallery" className="nav-link">{t('gallery')}</Link>
          <div className="dropdown-container">
            <div className="dropdown-label">
              {t('select_news')} <span className="arrow"></span>
            </div>

            {/* Ochiluvchi menyu */}
            <div className="dropdown-menu">
              <Link to="/news" className="sidebar-submenu-link" onClick={() => setIsBurgerOpen(false)}>
                <div className="menu-item">{t('news')}</div>
              </Link>
              <div className="divider"></div>
              <Link to="/announcements" className="sidebar-submenu-link" onClick={() => setIsBurgerOpen(false)}>
                <div className="menu-item">{t('announcements')}</div>
              </Link>
            </div>
          </div>
          <Link to="/contact" className="nav-link">{t('contact')}</Link>
        </nav>
      </div>
    </header>
  )
}

export default MenuBar