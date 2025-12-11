import { Link, useNavigate } from "react-router-dom"
import { ChevronDown } from "lucide-react"
import "./menuBar.css"

const MenuBar = () => {
  const navigate = useNavigate()

  return (
    <header className="mnuH">
      <div className="menuH">
        <nav className="navbar">
          <Link to="/" className="nav-link">BOSH SAHIFA</Link>
          <Link to="/about" className="nav-link">BIZ HAQIMIZDA</Link>
          <Link to="/collection" className="nav-link">MUZEY KOLLEKSIYASI</Link>
          <Link to="/gallery" className="nav-link">GALEREYA</Link>
          <li className="dropdown">
            <div className="select-wrapper">
              <select
                className="select"
                onChange={(e) => {
                  if (e.target.value) {
                    navigate(`/${e.target.value}`)
                  }
                }}
              >
                <option value="news">Yangiliklar</option>
                <option value="elonlar">Elonlar</option>
              </select>
              <ChevronDown className="dropdown-icon" />
            </div>
          </li>
          <Link to="/contact" className="nav-link">Aloqa</Link>
        </nav>
      </div>
    </header>
  )
}

export default MenuBar