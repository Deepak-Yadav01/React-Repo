import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  let [Counter, setcounter] = useState(0)  // () ke ander  koi bhivalue de skte h

  const maxCount = 20; // Maximum value for the counter

  // let Counter = 10

  const addvalue = () => {
    if (Counter < maxCount) {
      // console.log("value  Added", Math.random());
   
    // Counter = Counter + 1
    setcounter(Counter + 1)
     console.log("value Added", Counter + 1);
    }
    
  }

const removevalue = () => {
  if (Counter > 0) {
    setcounter(Counter - 1)
  }

}

  return (
    <>
    <h1>Chai aur React</h1>
    <h2>Counter Value: {Counter}</h2>

     {/* Add button: Will be disabled if counter reaches maxCount */}

    <button
    onClick={addvalue} disabled={Counter >= maxCount}
    >Add Value {Counter}</button>
    <br />

    {/* Remove button: Will be disabled if counter is 0 */}

    <button
    onClick={removevalue} disabled={Counter <= 0}
    >Remove Value {Counter}</button>
    
    <p>footer : {Counter}</p>
    </>
  )
}

export default App
