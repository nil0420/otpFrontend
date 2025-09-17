import { Link } from "react-router-dom";
import logo from "../../assets/images/newlogo.png";
import "../../App.css";

const Navbar = () => {
  return (
    <nav className="navbar-container">
      <div className="navbar-left">
        <img src={logo} alt="Talrn Logo" className="logo" />
      </div>
      <div className="navbar-right">
        <ul className="nav-links">
          <li><a href="#">Why</a></li>
          <li className="dropdown">
            <a href="#">Industries <span className="dropdown-arrow">&#9662;</span></a>
          </li>
          <li><a href="#">Find IOS Dev</a></li>

         
          <li>
            <Link to="/register" style={{ color: "#333" }}>
              Apply as Vendor
            </Link>
          </li>
        </ul>
        <button className="hire-button">Hire IOS Dev</button>
        <button className="login-button">Login</button>
      </div>
    </nav>
  );
};

export default Navbar;
