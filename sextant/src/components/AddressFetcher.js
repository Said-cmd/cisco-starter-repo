import React, { useEffect } from 'react'
import { useState } from 'react'

function AddressFetcher() {
  const [ipAddressData, setIpAddressData] = useState([]);

    useEffect(() => {
    fetch("https://api64.ipify.org?format=json")
        .then((r) => r.json())
        .then((data) => setIpAddressData(data))
    }, [])
        
  return (
    <div className='Exhibit-Fields'>{ipAddressData.ip}</div>
  )
}

export default AddressFetcher