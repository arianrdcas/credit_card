import React, { useState } from "react";
import "../Estilos/Formulario.css";

const Formulario = ({ onNameChange }) => {
  const [name, setName] = useState("");
  const [isTyping, setIsTyping] = useState(false);

  const handleInputChange = (event) => {
    const { value } = event.target;
    setName(value);
    setIsTyping(true);
    onNameChange(value);
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
                required
              />

              <input
                placeholder="YY"
                type="text"
                id="expire-date-year"
                name="expire-date-year"
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
