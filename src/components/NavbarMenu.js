
import { NavLink } from "react-router-dom";

const NavbarMenu = () => {
  return (
    <div className="navbar-menu">
      <div className="container">
        <nav className="nav">
          <span className="navlink">
            <NavLink to="/portfolio">Portfolio</NavLink>
          </span>
          <span className="navlink">
            <NavLink to="/about">About</NavLink>
          </span>
          <span className="navlink">
            <NavLink to="/motion">Motion</NavLink>
          </span>
        </nav>
      </div>
    </div>
  );
};

export default NavbarMenu;
