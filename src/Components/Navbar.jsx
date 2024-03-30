import React from "react";

const Navbar = () => {

  return (
    <nav>
      <div>
        <h2>DH Odonto</h2>
      </div>
      <div>
        <ul>
          <li>
              <h3>Home</h3>
          </li>
          <li>
              <h3>Contacto</h3>
          </li>
          <li>
              <h3>Destacados</h3>
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