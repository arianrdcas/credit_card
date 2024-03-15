import React, { useState } from "react";
import "../Estilos/Formulario.css";

const Formulario = ({
  onNameChange,
  onCardNumberChange,
  onMonthChange,
  onYearChange,
  onCcvChange,
}) => {
  const [name, setName] = useState("");
  const [cardNumber, setCardNumber] = useState("");
  const [month, setMonth] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [year, setYear] = useState("");
  const [ccv, setCcv] = useState("");
  const [isTyping, setIsTyping] = useState(false);

  const handleInputChange = (event) => {
    const { value } = event.target;
    setName(value);
    setIsTyping(true);
    onNameChange(value);
  };
  const handleInputCardChange = (event) => {
    const { value } = event.target;
    const isValid = /^\d{0,16}$/.test(value);
    if(isValid){setCardNumber(value);
    setIsTyping(true);
    onCardNumberChange(value);
  }else{
    console.log("El valor ingresado no es un número válido entre 1 y 12");
  }
    
  };
  const handleInputMonthChange = (event) => {
    const { value } = event.target;
    const isValid = /^(1[0-2]?|[1-9]?)$/.test(value);

    if (isValid) {
      setMonth(value);
      setIsTyping(true);
      onMonthChange(value);
    } else {
      // Si el valor no es válido, puedes manejarlo aquí, como mostrar un mensaje de error
      setErrorMessage("Solo números válidos entre 1 y 12");
    }
  };
  const handleInputYearChange = (event) => {
    const { value } = event.target;
    const isValid = /^\d{0,2}$/.test(value);

    if (isValid) {
      setYear(value);
      setIsTyping(true);
      onYearChange(value);
    } else {
      // Si el valor no es válido, puedes manejarlo aquí, como mostrar un mensaje de error
      console.log("El valor ingresado no es un número de dos dígitos");
    }
  };
  const handleInputCcvChange = (event) => {
    const { value } = event.target;
    const isValid = /^\d{1,3}$/.test(value);
    if (isValid) {
      setCcv(value);
      setIsTyping(true);
      onCcvChange(value);
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
  };

  return (
    <div className="formulario">
      <form method="post" onSubmit={handleSubmit}>
        <div className="input-group">
          <label htmlFor="cardholder-name">CARDHOLDER NAME</label>
          <input
            placeholder="e.g. Jane Appleseed"
            type="text"
            id="cardholder-name"
            name="cardholder-name"
            value={name}
            onChange={handleInputChange}
            required
          />
        </div>
        <div className="input-group">
          <label htmlFor="card-number">CARD NUMBER</label>
          <input
            placeholder="e.g. 1234 5678 9101 1213"
            type="text"
            id="card-number"
            name="card-number"
            value={cardNumber}
            onChange={handleInputCardChange}
            required
          />
        </div>
        <div className="input-grupo">
          <div className="expirate-date" id="expire-date">
            <label htmlFor="expire-date">EXP. DATE (MM/YY)</label>
            <div className="input-exp-date" id="expire-date">
              <input
                placeholder="MM"
                type="text"
                id="expire-date-month"
                name="expire-date-month"
                value={month}
                onChange={handleInputMonthChange}
                required
              />
              {errorMessage && (
                <span className="error-message">{errorMessage}</span>
              )}
              <input
                placeholder="YY"
                type="text"
                id="expire-date-year"
                name="expire-date-year"
                value={year}
                onChange={handleInputYearChange}
                required
              />
            </div>
          </div>
          <div className="input-grupo-ccv">
            <label htmlFor="ccv">CCV</label>
            <input
              placeholder="e.g. 123"
              type="text"
              id="ccv"
              name="ccv"
              value={ccv}
              onChange={handleInputCcvChange}
              required
            />
          </div>
        </div>
        <button type="submit" value="Submit">
          Confirm
        </button>
      </form>
    </div>
  );
};

export default Formulario;
