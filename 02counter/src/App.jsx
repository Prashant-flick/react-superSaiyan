import { useState } from 'react'
import './App.css'

function App() {
  // let count = 15;

  //using hooks in react
  let [count, setCount] =useState(10);

  const increase = () =>{
    if(count<20){
      // count=count+1;
      setCount(prevcount => prevcount+1);
      setCount(prevcount => prevcount+1);
      setCount(prevcount => prevcount+1);
      console.log(count);
    }else{
      console.log(count);
    }
    
  }
  const decrease = () =>{
    if(count>0){
      // count=count-1;
      setCount(prevcount => prevcount-1);
      setCount(prevcount => prevcount-1);
      setCount(prevcount => prevcount-1);
      console.log(count);
    }else{
      console.log(count);
    }
   
  }

  return (
    <>
      <h1>TRYING REACT</h1>
      <h2>MADE BY PRASHANT KUMAR</h2>
      <button onClick={increase}>INCREMENT COUNT={count}</button>
      <br />
      <button onClick={decrease}>DECREMENT COUNT={count}</button>
    </>
  )
}

export default App
