import BurgerLogo from "../assets/burgerlogo.png";
import { Link } from "react-router-dom";
import "../styles/Navbar.css";

function Navbar() {
  return (
    <div className="navbar">
      <div className="main">
        <img className="nav-logo" src={BurgerLogo} alt="" />
        <div className="nav-link">
          <Link to="/">Anasayfa</Link>
          <Link to="/menu">Menu</Link>
          <Link to="/about">About</Link>
          <Link to="/contact">Contact</Link>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
