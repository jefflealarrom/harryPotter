import { useState } from "react";
import { Link } from "react-router-dom";
import './nav.css';

const Nav = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    // console.log("Cerrando menú"); 
    setIsMenuOpen(false);
  };
  

  return (
    <nav className="nav">
      <div>
        <Link to="/landing"><img className="logo" src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/9b/HP_-_Harry_Potter_wordmark.svg/438px-HP_-_Harry_Potter_wordmark.svg.png" alt="Logo" /></Link>
      </div>
      <div className="menu-toggle" onClick={toggleMenu}>
        <div className={`menu-bar ${isMenuOpen ? 'open' : ''}`}></div>
        <div className={`menu-bar ${isMenuOpen ? 'open' : ''}`}></div>
        <div className={`menu-bar ${isMenuOpen ? 'open' : ''}`}></div>
      </div>
      <ul className={`menu ${isMenuOpen ? 'open' : ''} `}>
        <li>
          <Link to="/landing" onClick={closeMenu}>Home</Link>
        </li>
        <li>
          <Link to="/in" onClick={closeMenu}>Characters</Link>
        </li>
        <li>
          <Link to="/out" onClick={closeMenu}>Logout</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
