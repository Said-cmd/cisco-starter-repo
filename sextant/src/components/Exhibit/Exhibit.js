import React from 'react'
import "../Exhibit/ExhibitStyle.css";
import AddressFetcher from '../AddressFetcher';

function Exhibit({ name }) {
  return (
    <div className='Exhibit'>
      <h2 className='Exhibit-Text'>{name}</h2>
      <div className='Exhibit-Content'><AddressFetcher/></div>
      </div>
  )
}

export default Exhibit

