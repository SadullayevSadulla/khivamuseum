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
          <li className="dropdown">
            <div className="select-wrapper">
              <select
                className="select"
                defaultValue=""
                onChange={(e) => {
                  if (e.target.value) {
                    navigate(`/${e.target.value}`);
                  }
                }}
              >
                <option value="" disabled>{t('select_news')}</option>
                <option value="news">{t('news')}</option>
                <option value="announcements">{t('announcements')}</option>
              </select>
              <ChevronDown className="dropdown-icon" />
            </div>
          </li>
          <Link to="/contact" className="nav-link">{t('contact')}</Link>
        </nav>
      </div>
    </header>
  )
}

export default MenuBar