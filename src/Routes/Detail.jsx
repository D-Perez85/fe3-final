import React from "react";
import Button from "../Components/Button";

const Detail = () => {
  return (
    <>
      <div>
        <h1>Detail Dentist id : ID</h1>
        <table>
          <thead>
            <tr>
              <th>Nombre</th>
              <th>Email</th>
              <th>Teléfono</th>
              <th>Sitio Web</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Nombre</td>
              <td>Email</td>
              <td>Telefono</td>
              <td>Sitio Web</td>
            </tr>
          </tbody>
        </table>
      </div>
      <Button />
    </>
  );
};

export default Detail;
