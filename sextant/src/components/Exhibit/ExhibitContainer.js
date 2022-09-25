import React from 'react'
import Exhibit from './Exhibit';
import "../Exhibit/ExhibitStyle.css";

function ExhibitContainer() {
  return (
    <div className='Exhibit-Container'>
        <Exhibit />
        <Exhibit />
        <Exhibit />
    </div>
  )
}

export default ExhibitContainer