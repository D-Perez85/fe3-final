import React from "react";

const Form = () => {
   return (
    <div>
         <form>
          <label>Nombre:</label>
          <input type="text"/>
          <label>Correo Electronico:</label>
          <input type="text"/>
          <button>Enviar</button>
        </form>
        <h2>
            Gracias nombre, te contactaremos cuando antes vía mail.
        </h2>
      <h3>Por favor verifique su información nuevamente.</h3>
    </div>
  );
};
export default Form;
