import { useState } from "react";
import Formulario from "./Componentes/formulario";
import bgmobile from "./assets/imagenes/bg-main-mobile.png";
import bgcardback from "./assets/imagenes/bg-card-back.png";
import bgcardfront from "./assets/imagenes/bg-card-front.png";
import "./App.css";

function App() {
  return (
    <>
      <div className="container">
        <img className="bgmobile" src={bgmobile} alt="Background" />
        <img className="bg-card back" src={bgcardback} alt="Card Back" />
        <p>000</p>
      </div>
      <div className="frontal">
        <img className="card front" src={bgcardfront} alt="Card Front" />
        <div className="circulo"></div>
        <div className="circulo dos"></div>
        <p className="credit_card_number">1234567891234567</p>
        <span className="nombre">Pepe Perez</span>
        <span className="fecha_expiracion">05/30</span>
      </div>
      <div className="form-container">
        <Formulario />
      </div>
    </>
  );
}

export default App;
