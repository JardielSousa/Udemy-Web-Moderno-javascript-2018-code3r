import React from "react";
import ReactDOM from "react-dom";

// import Bomdia from "./componentes/Bomdia";
import { BoaTarde, BoaNoite } from "./componentes/Multiplos";

ReactDOM.render(
  <div>
    <BoaTarde nome="Laila"/>
    <BoaNoite nome="Caroline"/>
  </div>
  , document.getElementById("root"))