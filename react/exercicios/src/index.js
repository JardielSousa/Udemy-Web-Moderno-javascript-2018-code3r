import React from "react";
import ReactDOM from "react-dom";

// import Bomdia from "./componentes/Bomdia";
// import { BoaTarde, BoaNoite } from "./componentes/Multiplos";
// import Saudacao from "./componentes/Saudacao";
import Pai from "./componentes/Pai";
import Filho from "./componentes/Filho";

ReactDOM.render(
  <div>
    <Pai nome="Jardiel" sobrenome="Sousa">
      <Filho nome="Laila Caroline" />
      <Filho nome="Filho 02" />
    </Pai>
  </div>
  , document.getElementById("root"))