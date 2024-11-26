import { useState } from "react"


function App() {
   const [Color, setColor] = useState("olive")

  return (
    <>
      <div className="w-full h-screen duration-200" 
      style={{backgroundColor: Color}}
      >
        <h1> Hello , BackGround changer Project in React js.</h1>
        <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-3">
          <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-2xl">

            <button 
            onClick={() => setColor('red')}
             className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
             style={{backgroundColor: "Red"}}
             >Red</button>

            <button 
            onClick={() => setColor('Blue')}
             className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
             style={{backgroundColor: "Blue"}}
             >Blue</button>

            <button 
            onClick={() => setColor("Orange")}
             className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
             style={{backgroundColor: "Orange"}}
             >Orange</button>

            <button 
            onClick={() => setColor('Green')}
             className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
             style={{backgroundColor: "Green"}}
             >Green</button>

            <button 
            onClick={() => setColor('DeepPink')}
             className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
             style={{backgroundColor: "DeepPink"}}
             >DeepPink</button>

            <button 
            onClick={() => setColor('Black')}
             className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
             style={{backgroundColor: "Black"}}
             >Black</button>

            <button 
            onClick={() => setColor('HotPink')}
             className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
             style={{backgroundColor: "HotPink"}}
             >HotPink</button>

            <button 
            onClick={() => setColor('GreenYellow')}
             className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
             style={{backgroundColor: "GreenYellow"}}
             >GreenYellow</button>

            <button 
            onClick={() => setColor('Indigo')}
             className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
             style={{backgroundColor: "Indigo"}}
             >Indigo</button>

            <button 
            onClick={() => setColor('Aqua')}
             className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
             style={{backgroundColor: "Aqua"}}
             >Aqua</button>

            <button 
            onClick={() => setColor('Brown')}
             className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
             style={{backgroundColor: "Brown"}}
             >Brown</button>

            <button 
            onClick={() => setColor('DarkSlateGrey')}
             className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
             style={{backgroundColor: "DarkSlateGray"}}
             >DarkSlateGray</button>

            <button 
            onClick={() => setColor('Lime')}
             className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
             style={{backgroundColor: "Lime"}}
             >Lime</button>

            <button 
            onClick={() => setColor('OrangeRed')}
             className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
             style={{backgroundColor: "OrangeRed"}}
             >OrangeRed</button>

          </div>
        </div>
      </div>
    </>
  )
}

export default App
