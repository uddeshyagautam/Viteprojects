<<<<<<< HEAD
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
=======
import { useState } from 'react'
import PostComponent from './Post'

import React from 'react'

function App() {
  const [count, setCount] = useState(1)
  function increaseCount() {
    setCount(count + 1)
  }
  setInterval(increaseCount, 1000)
  return (
    <div>
      <div style={{ display: 'flex' }}>
        <div
          style={{
            background: 'red',
            borderRadius: 20,
            width: 20,
            height: 25,
            paddingLeft: 10,
            paddingTop: 5,
          }}
        >
          {count}
        </div>
        <div
          style={{
            background: 'red',
            borderRadius: '20',
            width: 20,
            height: 20,
          }}
        >
          1
        </div>
      </div>
      <img
        style={{ cursor: 'pointer' }}
        src={
          'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ6OxiWujd38RQ52kPQibOUa4Wka2kzkc8ZwQ&s'
        }
        width={40}
      />
      <button onClick={increaseCount}>Increase the count</button>
    </div>
  )
}

export default App
>>>>>>> 6b2be95 (add second project in subfolder)
