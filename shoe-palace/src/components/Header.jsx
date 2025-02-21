import { NavLink } from "react-router-dom";
import "../styles/Header.css";
import logo from "../assets/logo.png";
import { FaShoppingCart, FaUserCircle } from "react-icons/fa";

const Header = () => {
  return (
    <header className="header">
      <div className="logo-container">
        <img src={logo} alt="Shoe Palace Logo" className="logo" />
      </div>
      <nav>
        <ul className="nav-links">
          <li>
            <NavLink
              to="/"
              className={({ isActive }) => (isActive ? "active" : "")}>
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/about"
              className={({ isActive }) => (isActive ? "active" : "")}>
              About
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/product"
              className={({ isActive }) => (isActive ? "active" : "")}>
              Product
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/contact"
              className={({ isActive }) => (isActive ? "active" : "")}>
              Contact
            </NavLink>
          </li>
        </ul>
      </nav>
      <div className="icons">
        <FaShoppingCart className="icon1" />
        <FaUserCircle className="icon2" />
      </div>
    </header>
  );
};

export default Header;
