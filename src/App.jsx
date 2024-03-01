import { useState } from 'react'
import bgmobile from "./assets/imagenes/bg-main-mobile.png"
import bgcardback from "./assets/imagenes/bg-card-back.png";
import bgcardfront from "./assets/imagenes/bg-card-front.png"
import './App.css'

function App() {
  

  return (
    <>
      <div>
        <img src={bgmobile} />
      </div>
      <img className="bg-card back" src={bgcardback} />
      <img className="bg-card front" src={bgcardfront} />
      <p>000</p>
      <div className='ciculo'></div>
    </>
  );
}

export default App
