import { useState, useEffect } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import NavbarMenu from "./NavbarMenu";

const Navbar = () => {
  const location = useLocation();
  const body = document.querySelector("body");
  const [disabled, setDisabled] = useState(false);
  const [state, setState] = useState({
    initial: false,
    clicked: null,
    menuName: "Menu",
  });

  //Listening for page changes.
  useEffect(() => {
    setState({ clicked: false, menuName: "Menu" });
    body.classList.remove("disable-scroll");
  }, [location]);

  const handleMenu = () => {
    disableMenu();
    if (state.initial === false) {
      console.log(1);
      setState({
        initial: null,
        clicked: true,
        menuName: "close",
      });
    } else if (state.clicked === true) {
      console.log(2);
      body.classList.remove("disable-scroll");
      setState({
        clicked: !state.clicked,
        menuName: "menu",
      });
    } else if (state.clicked === false) {
      console.log(3);
      body.classList.add("disable-scroll");
      setState({
        clicked: !state.clicked,
        menuName: "close",
      });
    }
  };

  const disableMenu = () => {
    setDisabled(!disabled);
    setTimeout(() => {
      setDisabled(false);
    }, 1200);
  };

  console.log(state);

  return (
    <div className="navbar">
      <div className="navbar-inner">
        <div className="logo">
          <Link to="/">
            <h1>kane</h1>
          </Link>
        </div>
        <div className="menu">
          <button
            className={state.clicked ? "menu-button active" : "menu-button"}
            onClick={() => {
              handleMenu();
            }}
            disabled={disabled}
          >
            <span>{state.menuName}</span>
          </button>
        </div>
      </div>
      {state.clicked && <NavbarMenu state={state} />}
    </div>
  );
};

export default Navbar;
