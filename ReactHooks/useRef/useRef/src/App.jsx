import { useState,useRef, useEffect } from 'react'

import './App.css'

function App() {
  const [name, setName] = useState('')
  const refFocus=useRef('');
  const prevName= useRef('');
  const renderCount=useRef(0);


  useEffect(()=>{
    renderCount.current=renderCount.current+1;
  })
  // it will persist the name from the previous state to current state. 
  useEffect(() => {
    prevName.current=name
  }, [name]);

// this is used to hold the referance the html element so on click the button it will be focused.
  function focus(){
    // console.log(refFocus.current);
    refFocus.current.focus();
  }
  return (
    <>
      <input ref={refFocus} value={name} onChange={e=>setName(e.target.value)}></input>
      <h3> My name is {name}</h3>
      <br></br>
      <h3>Current name is {name} and previous state name is {prevName.current} </h3>
      <button onClick={focus}>Click here to focus</button>
      <br></br>
      <h3>I render {renderCount.current} times!!!</h3>
    </>
  )
}

export default App
