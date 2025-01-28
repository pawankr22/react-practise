import { useState } from 'react';
import './App.css'

function App() {

  let [counter, setCounter] = useState(15)

  // let counter = 15

  const addValue = () => {
    // console.log('Button Clicked', counter);
    if (counter < 4005) {
      // counter = counter + 1
      setCounter(counter+1)
    }
  }

  const removeValue = () => {
    // console.log('Button Clicked', counter);
    if (counter > 0) {
      // counter = counter - 1
      setCounter(counter-1)
    }
  }

  return (
    <>
      <h1>Counter App</h1>
      <h2>Counter Value: {counter}</h2>

      <button onClick={addValue}>Increment</button>
      <button onClick={removeValue}>Decrement</button>
    </>
  )
}

export default App
