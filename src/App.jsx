import React, { useState } from "react";
import Formulario from "./Componentes/formulario";
import bgmobile from "./assets/imagenes/bg-main-mobile.png";
import bgcardback from "./assets/imagenes/bg-card-back.png";
import bgcardfront from "./assets/imagenes/bg-card-front.png";
import "./App.css";

function App() {

  const [name, setName] = useState("");
  const [cardNumber, setCardNumber] = useState('')
  const [month, setMonth] = useState("");
  const [year, setYear] = useState("");
  const [ccv, setCcv] = useState("");


  const handleNameChange = (newName) => {
    setName(newName);
  };

  const handleCardNumber = (newCardNumber) => {
    setCardNumber(newCardNumber)
  }

  const handleMonth = (newMonth) => {
    setMonth(newMonth)
  }

  const handleYear = (newYear) => {
    setYear(newYear)
  }

  const handleCcv = (newCcv) => {
    setCcv(newCcv)
  }

  return (
    <>
      <img className="bgmobile" src={bgmobile} alt="Background" />
      <div className="container">
        <img className="bg-card back" src={bgcardback} alt="Card Back" />
        <p className="ccv">{ccv || "000"}</p>
        <img className="card front" src={bgcardfront} alt="Card Front" />
        <div className="circulo"></div>
        <div className="circulo dos"></div>
        <p className="credit_card_number">{cardNumber || "1234567891234567"}</p>
        <span className="nombre">{name || "Pepe Perez"}</span>
        <span className="fecha_expiracion">{month || "05"}</span>
        <span className="fecha_expiracion">{ year || "/30"}</span>
      </div>
      <Formulario
        onNameChange={handleNameChange}
        onCardNumberChange={handleCardNumber}
        onMonthChange={handleMonth}
        onYearChange={handleYear}
        onCcvChange={handleCcv}
      />
    </>
  );
}

export default App;
