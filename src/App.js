import logo from './logo.svg';
import './App.css';
import React, { useState } from "react"
import { SongContainer } from "./SongContainer"

function App() {
  // let ourNum = 1

  // const addOne = () => {
  //   ourNum = ourNum + 1
  //   console.log(ourNum)
  // }

  // The code above is how we do it in vanilla JS with a basic variable
  // The code below is how we do the exact same thing, but with state and hooks

  const [ourNum, setNum] = useState(1)

  const addOne = () => {
    setNum(ourNum + 1)
  }

  return (
    <div className="App">
      <h1>Our Number: {ourNum}</h1>
      <button onClick={() => addOne()}>+ 1</button>
      <hr></hr>
      <SongContainer />
    </div>
  );
}

export default App;
