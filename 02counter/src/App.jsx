import { useState } from 'react';
import './App.css'

function App() {

  let [counter, setCounter] = useState(15)

  // let counter = 15

  const addValue = () => {
    console.log('Button Clicked', counter);
    counter = counter + 1
    setCounter(counter)
  }

  const removeValue = () => {
    console.log('Button Clicked', counter);
    counter = counter - 1
    setCounter(counter)
  }

  return (
    <>
      <h1>A React App</h1>
      <h2>Counter Value: {counter}</h2>

      <button onClick={addValue}>Increment {counter}</button>
      <button onClick={removeValue}>Decrement {counter}</button>
    </>
  )
}

export default App
