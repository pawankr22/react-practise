import { useState } from 'react';

function App() {
  const [color, setColor] = useState();

  return (
    <>
      <div className="w-full h-screen duration-200"
        style={{ backgroundColor: color }}
      >
        <div className="fixed flex felx-wrap 
        justify-center bottom-12 inset-x-0 px-2">
          <div className="flex flex-wrap justify-center gap-3
          shadow-lg p-2 bg-white px-3 py-5 rounded-3xl">

            <button
              onClick={() => setColor('red')}
              className="outline-none px-4 py-1 rounded-full
            text-white shadow-lg cursor-pointer"
              style={{ backgroundColor: "red" }}>
              Red
            </button>

            <button
              onClick={() => setColor('yellow')}
              className="outline-none px-4 py-1 rounded-full
            text-white shadow-lg cursor-pointer"
              style={{ backgroundColor: "yellow" }}>
              Yellow
            </button>

            <button
              onClick={() => setColor('blue')}
              className="outline-none px-4 py-1 rounded-full
            text-white shadow-lg cursor-pointer"
              style={{ backgroundColor: "blue" }}>
              blue
            </button>

            <button
              onClick={() => setColor('olive')}
              className="outline-none px-4 py-1 rounded-full
            text-white shadow-lg cursor-pointer"
              style={{ backgroundColor: "olive" }}>
              olive
            </button>

            <button
              onClick={() => setColor('pink')}
              className="outline-none px-4 py-1 rounded-full
            text-white shadow-lg cursor-pointer"
              style={{ backgroundColor: "pink" }}>
              Pink
            </button>

            <button
              onClick={() => setColor('orange')}
              className="outline-none px-4 py-1 rounded-full
            text-white shadow-lg cursor-pointer"
              style={{ backgroundColor: "orange" }}>
              Orange
            </button>

            <button
              onClick={() => setColor('green')}
              className="outline-none px-4 py-1 rounded-full
            text-white shadow-lg cursor-pointer"
              style={{ backgroundColor: "Green" }}>
              Green
            </button>

            <button
              onClick={() => setColor('purple')}
              className="outline-none px-4 py-1 rounded-full
            text-white shadow-lg cursor-pointer"
              style={{ backgroundColor: "purple" }}>
              Purple
            </button>

            <button
              onClick={() => setColor('violet')}
              className="outline-none px-4 py-1 rounded-full
            text-white shadow-lg cursor-pointer"
              style={{ backgroundColor: "violet" }}>
              Violet
            </button>

            <button
              onClick={() => setColor('grey')}
              className="outline-none px-4 py-1 rounded-full
            text-white shadow-lg cursor-pointer"
              style={{ backgroundColor: "grey" }}>
              Grey
            </button>

            <button
              onClick={() => setColor('black')}
              className="outline-none px-4 py-1 rounded-full
            text-white shadow-lg cursor-pointer"
              style={{ backgroundColor: "black" }}>
              Black
            </button>

            <button
              onClick={() => setColor('Olive')}
              className="outline-none px-4 py-1 rounded-full
            text-white shadow-lg cursor-pointer"
              style={{ backgroundColor: "olive" }}>
              Olive
            </button>

            <button
              onClick={() => setColor('gold')}
              className="outline-none px-4 py-1 rounded-full
            text-white shadow-lg cursor-pointer"
              style={{ backgroundColor: "gold" }}>
              Gold
            </button>

          </div>
        </div>

      </div>
    </>
  )
}

export default App
