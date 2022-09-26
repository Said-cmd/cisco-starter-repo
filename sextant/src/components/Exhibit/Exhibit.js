import React from 'react'
import "../Exhibit/ExhibitStyle.css";

function Exhibit({ name, children }) {
  return (
    <div className='Exhibit'>
      <h2 className='Exhibit-Text'>{name}</h2>
      <div className='Exhibit-Content'>{children}</div>
      </div>
  )
}

export default Exhibit

