import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  let [Counter, setcounter] = useState(0)  // () ke ander  koi bhivalue de skte h

  // let Counter = 10

  const addvalue = () => {
    // console.log("value  Added", Math.random());
    console.log("value Added", Counter);
    Counter = Counter + 1
    setcounter(Counter)
  }

const removevalue = () => {
  setcounter(Counter - 1)
}

  return (
    <>
    <h1>Chai aur React</h1>
    <h2>Counter Value: {Counter}</h2>
    <button
    onClick={addvalue}
    >Add Value {Counter}</button>
    <br />
    <button
    onClick={removevalue}
    >Remove Value {Counter}</button>
    <p>footer : {Counter}</p>
    </>
  )
}

export default App
