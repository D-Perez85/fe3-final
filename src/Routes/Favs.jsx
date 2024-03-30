import React from "react";
import Card from "../Components/Card";
import Button from "../Components/Button";

const Favs = () => {
  return (
    <>
      <h1>Destacados</h1>
      <div>
        <Card />
      </div>
      <p>Ud. no tiene favoritos agregados aún!</p>
      <button>BORRAR TODOS</button>
      <Button />
    </>
  );
};
export default Favs;
