import React,{useState} from 'react'

function Counter() {
   let [Counter,setCounter]= useState(15);
    const addValue = () => {
        setCounter(Counter+1);
    }
    const decValue = () =>{
        setCounter(Counter-1);
    }
  return (
    <>
      <h2>Counter Value {Counter}</h2>
      <button onClick={addValue}
      
      >Increase Value</button>
      <br />
      <button onClick={decValue}>Decrease Value</button>
    </>
  )
}

export default Counter
