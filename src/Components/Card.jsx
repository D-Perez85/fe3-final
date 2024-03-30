import React from "react";
import { Link } from "react-router-dom";

const Card = ({item}) => {
  return (
    <div className="card">
      <img className="imgDoctor" src="../../public/images/doctor.jpg" alt="" />
      <Link to={"/dentista/" + item.id}>
        <h4>{item.name}</h4>
      </Link>
      <h4>{item.username}</h4>

      <button className="button">Eliminar favorito ❌</button>

      <button className="button">Agregar a favoritos⭐</button>
    </div>
  );
};
export default Card;
