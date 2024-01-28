import React, { useEffect, useState } from 'react'

function Aarambha() {
    let [data,setData]=useState([])
    useEffect(()=> {
        fetch('https://jsonplaceholder.typicode.com/posts').then((a)=>a.json()).then((b)=>setData(b))
    },[])
  return (
    <div>
      <h2>useeffect</h2>
      <ol>
  
  {data.map((a)=> (
    <li key={a}>{a.title}</li>
  ))}

      </ol>
    </div>
  )
}

export default Aarambha
