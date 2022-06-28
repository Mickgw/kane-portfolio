import { NavLink } from "react-router-dom";
import { gsap } from "gsap";
import { useEffect } from "react";

const NavbarMenu = ({ state }) => {
  useEffect(() => {
    gsap
      .timeline()
      .fromTo("#menu", { y: "-100vh", skewY: 5 }, { y: 0, skewY: 0 });
  }, [state]);

  return (
    <div className="navbar-menu" id="menu">
      <div className="container">
        <nav className="nav">
          <div className="navlink-container">
            <span className="navlink">
              <NavLink to="/portfolio">Portfolio</NavLink>
            </span>
            <span className="navlink-description">
              A showcase of all my photo's
            </span>
          </div>

          <div className="navlink-container">
            <span className="navlink">
              <NavLink to="/about">About</NavLink>
            </span>
            <span className="navlink-description">
              Find out who I am
            </span>
          </div>

          <div className="navlink-container">
            <span className="navlink">
              <NavLink to="/motion">Motion</NavLink>
            </span>
            <span className="navlink-description">
              A showcase of some video projects of mine
            </span>
          </div>
        </nav>
      </div>
    </div>
  );
};

export default NavbarMenu;
