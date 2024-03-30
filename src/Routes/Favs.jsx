import React, { useState } from "react";
import Card from "../Components/Card";
import { useContextGlobal } from "../Components/utils/global.context";
import Button from "../Components/Button";

const Favs = () => {
  const { state, dispatch } = useContextGlobal();
  const [isFav, setIsFav] = useState(true);
  
  const handleRemoveAll = () => {
    dispatch({ type: "REMOVE_ALL_FAVS" });
    localStorage.removeItem("favs");
  };
  
  const handleRemoveSingle = (id) => {
    dispatch({ type: "REMOVE_SINGLE_FAV", payload: id });
    const updatedFavs = state.favs.filter((dentist) => dentist.id !== id);
    localStorage.setItem("favs", JSON.stringify(updatedFavs));
  };

  return (
    <>
      <h1>Destacados</h1>
      <div className="card-grid">
        {state.favs.map((item) => (
          <Card key={item.id} item={item} isFav={isFav}
            handleRemoveSingle={handleRemoveSingle}/>))}
      </div>
      {state.favs != 0 ? ("") : 
      (<p className="p-destacados">Ud. no tiene favoritos agregados aún!</p>)}
      {state.favs.length >= 2 ? (
        <button onClick={handleRemoveAll} className="button-delAll">
          BORRAR TODOS
        </button>) : ("")}
      <Button />
    </>
  );
};
export default Favs;
