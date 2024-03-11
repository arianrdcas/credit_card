import React from 'react'
import "../Estilos/Formulario.css"


const Formulario = () => {
  return (
    <>
      <div class="formulario">
        <form action="#" method="post">
          <div className="input-group">
            <label for="cardholder-name">CARDHOLDER NAME</label>
            <input
              placeholder="e.g. Jane Appleseed"
              type="text"
              id="cardholder-name"
              name="cardholder-name"
              required
            />
          </div>
          <div className="input-group">
            <label for="card-number">CARD NUMBER</label>
            <input
              placeholder="e.g. 1234 5678 9101 1213"
              type="text"
              id="card-number"
              name="card-number"
              required
            />
          </div>
          <div class="input-grupo">
            <div className="expirate-date">
              <label for="expire-date">EXP. DATE (MM/YY)</label>
              <div className="input-exp-date">
                <input
                  placeholder="MM"
                  type="text"
                  id="expire-date"
                  name="expire-date"
                  required
                />
                <input
                  placeholder="YY"
                  type="text"
                  id="expire-date"
                  name="expire-date"
                  required
                />
              </div>
            </div>
            <div className="input-grupo-ccv">
              <label for="ccv">CCV</label>
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
    </>
  );
}

export default Formulario