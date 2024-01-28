import React from 'react'
import { useParams } from 'react-router-dom'

function Abouts() {
    let {id}=useParams()
  return (
    <div>
      <h1>newwww{id}</h1>
    </div>
  )
}

export default Abouts
