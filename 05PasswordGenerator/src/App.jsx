import { useCallback, useState, useEffect, useRef } from 'react'

function App() {
  const [Length, setLength] = useState(8)
  const [NumberAllowed, setNumberAllowed] = useState(false)
  const [CharAllowed, setCharAllowed] = useState(false)
  const [Password, setPassword] = useState("")

  // useRef hook
  const passwardRef = useRef(null)

  const passwordGenerator = useCallback(() => {
     let pass = ""
     let str = "ABCDEFGHIJKLMNOPQRSTVXYZabcdefghijklmnopqrstuvwxyz"

     if (NumberAllowed) str += "0123456789"
     if (CharAllowed) str += "!~#$%^&*()_`?-+=/{}[]:<>'"

     for (let i = 1; i <= Length; i++) {
         let char = Math.floor(Math.random() * str.length + 1)

         pass += str.charAt(char)
      
     }

     setPassword(pass)

  }, [Length, NumberAllowed, CharAllowed, setPassword])

  const copyPasswordToClipboard = useCallback(() => {
    passwardRef.current?.select()
    // passwardRef.current?.setSelectionRange(0,3)
     window.navigator.clipboard.writeText(Password)
  }, [Password])

 useEffect(() => {
  passwordGenerator()
 }, [Length, NumberAllowed, CharAllowed,passwordGenerator])

  return (
    <>
    <div className="w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-3 my-8 text-orange-400 bg-gray-600">
    <h1 className='text-4xl text-center text-yellow-300'>Password Generator</h1>
      <div className='flex shadow rounded-lg overflow-hidden mb-4'>
           <input 
           type="text" 
           value={Password}
           className="outline-none w-full py-1 px-3"
           placeholder='password'
           readOnly
           ref={passwardRef}
           />
           <button 
           onClick={copyPasswordToClipboard}
           className='bg-blue-500 outline-none px-3 py-0.5 shrink-0'>copy</button>
      </div>

      <div className='flex text-sm gap-x-2'>

      <div className='flex items-center gap-x-1'>
        <input 
        type="range"
        min={2}
        max={100}
        value={Length}
         className='cursor-pointer'
         onChange={(event) => {setLength(event.target.value)}}
          />
          <label>Length: {Length}</label>
      </div>

      <div className="flex items-center gap-x-1">
      <input
          type="checkbox"
          defaultChecked={NumberAllowed}
          id="numberInput"
          onChange={() => {
              setNumberAllowed((prev) => !prev);
          }}
      />
      <label htmlFor="numberInput">Numbers</label>
      </div>

      <div className="flex items-center gap-x-1">
          <input
              type="checkbox"
              defaultChecked={CharAllowed}
              id="characterInput"
              onChange={() => {
                  setCharAllowed((prev) => !prev )
              }}
          />
          <label htmlFor="characterInput">Characters</label>
      </div>

    </div>
  </div>
    </>
  )
}

export default App
