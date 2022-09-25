import React from 'react'
import "../Banner/Banner.css";
import { GiSextant } from 'react-icons/gi';
import Logo from "../Banner/Cisco-Emblem-700x394 .png";

function Banner() {
  return (
    <div className='Banner'>
      <img src={Logo} alt="Cisco Logo" className='Logo'/>
      <h1 className='Banner-Text'>Sextant - Your Network Dashboard</h1>
      <GiSextant size="4.2vw" />
      </div>
  )
}

export default Banner