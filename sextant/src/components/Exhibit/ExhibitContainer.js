import React from 'react'
import Exhibit from './Exhibit';
import "../Exhibit/ExhibitStyle.css";
import AddressFetcher from '../AddressFetcher';

function ExhibitContainer() {
  return (
    <div className='Exhibit-Container'>
        <Exhibit name="Your IPv4 Address">
          <AddressFetcher />
          </Exhibit>
        <Exhibit name="Your IPv6 Address">
          <AddressFetcher />
        </Exhibit>
    </div>
  )
}

export default ExhibitContainer