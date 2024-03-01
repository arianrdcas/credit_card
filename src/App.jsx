import { useState } from "react";
import bgmobile from "./assets/imagenes/bg-main-mobile.png";
import bgcardback from "./assets/imagenes/bg-card-back.png";
import bgcardfront from "./assets/imagenes/bg-card-front.png";
import "./App.css";

function App() {
  return (
    <>
      <div className="container">
        <img src={bgmobile} alt="Background" />
        <img className="bg-card back" src={bgcardback} alt="Card Back" />
        <img className="bg-card front" src={bgcardfront} alt="Card Front" />
        <p>000</p>
        <div className="circulo"></div>
        <div className="circulo dos"></div>
      </div>
    </>
  );
}

export default App;
