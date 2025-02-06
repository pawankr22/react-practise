import { useState } from 'react'


function App() {
  const [color] = useState("white")

  return (
    
      <div className="w-full h-screen duration-200" 
      style={{backgroundColor: color}}></div>
    
  )
}

export default App
