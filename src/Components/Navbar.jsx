import React from "react";
import { Link } from "react-router-dom";
import { routes } from "./utils/routes";

const Navbar = () => {

  return (
    <nav>
      <div>
        <h2>DH Odonto</h2>
      </div>
      <div>
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
        <button>
          Modo 
        </button>
      </div>
    </nav>
  );
};
export default Navbar;