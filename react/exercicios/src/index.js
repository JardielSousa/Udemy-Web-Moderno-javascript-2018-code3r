import React from "react";
import ReactDOM from "react-dom";

// import Bomdia from "./componentes/Bomdia";
// import { BoaTarde, BoaNoite } from "./componentes/Multiplos";
import Saudacao from "./componentes/Saudacao";

ReactDOM.render(
  <div>
    <Saudacao tipo="Boa tarde" nome="Laila"/>
  </div>
  , document.getElementById("root"))