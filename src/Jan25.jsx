import React,{useEffect, useState} from 'react'
import './test.css'

function Jan25() {
    let[isActive,setActive]=useState('false')
    let[isHead,setIsHead]=useState('')
    var abc=()=>{
        setActive(!isActive)
    }
    useEffect(()=>{
        window.addEventListener('scroll',()=>{ 
        if(scrollY> 100)
        {
            setIsHead('aa')
        }
        else{
            setIsHead('')
        }
    })
})
   
  return (
    <div>

        <header className={isHead}></header>
        <h1>hghvhgh</h1>
      <h1 className={isActive ? " ": "hide"}>this is demo</h1>
      <button onClick={abc}>toggle</button>
    </div>
  )
}

export default Jan25
