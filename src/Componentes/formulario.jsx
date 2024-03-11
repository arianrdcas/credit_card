import React from 'react'
import "../Estilos/Formulario.css"


const Formulario = () => {
  return (
    <>
      <span className="item-form">CARDHOLDER NAME</span>
      <input className="item-form"></input>
      <span className="item-form">CARD NUMBER</span>
      <input className="item-form"></input>
      <span className="item-form">EXP. DATE ["MM/YY"]</span>
      <input className="item-form"></input>
      <input className="item-form"></input>
      <span className="item-form">CCV</span>
      <input className="item-form"></input>
      <button>Confirmar</button>
    </>
  );
}

export default Formulario