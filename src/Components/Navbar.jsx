import React from "react";
import { Link } from "react-router-dom";
import { routes } from "./utils/routes";
import { useContextGlobal } from "./utils/global.context";

const Navbar = () => {
  const { theme, setTheme } = useContextGlobal();
  const toggleTheme = () => {setTheme(theme === false ? true : false)};

  return (
    <nav className={`Navbar ${theme ? "light" : "dark"}`}>
      <div className="cont-title">
        <h2>DH Odonto</h2>
      </div>
      <div className="cont-data">
        <ul>
          <li>
            <Link to={routes.home}>
              <h3>Home</h3>
            </Link>
          </li>
          <li>
            <Link to={routes.contacto}>
              <h3>Contacto</h3>
            </Link>
          </li>
          <li>
            <Link to={routes.favs}> 
              <h3>Destacados</h3>
            </Link>
          </li>
        </ul>
        <button className="button-nav" onClick={toggleTheme}>
          Modo
        </button>
      </div>
    </nav>
  );
};
export default Navbar;