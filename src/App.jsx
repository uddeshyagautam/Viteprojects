import React, { useState } from 'react'

function App() {
  return (
    <div>
      <b> hi there</b>
      <Counter></Counter>
    </div>
  )
}
//mounting ,re-rendering ,ummounting
function Counter() {
  const [count, setCount] = useState(0)

  //hooking into the lifecycle events of react
  console.log("counter");
   
    //gaurd our setInterval from re-renders
    /*
  function increaseCount() {
    setCount(count + 1)
  }
  function decreaseCount() {
    setCount(count - 1)
  }
  function resetCount() {
    setCount(0)
  }
  */
        useEffect(function(){
          setInterval(function(){
            setCount(function(count){
               return count + 1;
          })
        },1000)
        console.log("mounted")
        },[])
  return (
    <div>
      <h1 id='text'>{count}</h1>
     
    </div>
  )
}
export default App

/*
 <button onClick={increaseCount}>Increase count</button>
      <button onClick={decreaseCount}>Decrease count</button>
      <button onClick={resetCount}>Reset</button>
      */