import React, { useState } from 'react'

function Sajan() {
    let[cup,setCup]=useState(10)
  return (
    <div>
        UseState Hook
        <h1>{cup}</h1>
        <button onClick={()=>setCup (cup-1)}>--</button>
        <button onClick={()=>setCup (cup+1)}>++</button>
      
    </div>
  )
}

export default Sajan
