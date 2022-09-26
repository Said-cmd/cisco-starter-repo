import React, { useEffect, useState } from 'react'

function PylonLatency() {
  const [networkLatency, setNetworkLatency] = useState('');

  useEffect(() => {
  const ws = new WebSocket("ws://localhost:55455")

  ws.onmessage = (e) => {
    const currentTime = new Date().getTime();
    const packetTimeStamp = JSON.parse(e.data)
    setNetworkLatency(currentTime - packetTimeStamp)
  }
  },[])

  return (
    <div className='Exhibit-Fields'>{networkLatency}</div>
  )
}

export default PylonLatency