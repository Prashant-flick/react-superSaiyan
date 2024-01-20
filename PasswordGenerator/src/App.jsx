import { useState, useCallback, useEffect } from 'react'

function App() {
  const [length, setlength] = useState(10)
  const [numbersAllowed, setnumberAllowed] = useState(false)
  const [spcharactersAllowed, setspcharactersAllowed] = useState(false)
  const [password, setPassword] = useState("");


  let changePassword = useCallback(()=>{
    let pass = ""
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
    if(numbersAllowed)str+="0123456789"
    if (spcharactersAllowed)str += "`~!@#$%^&"

    for(let i=0; i<length; i++){
      const char = Math.floor(Math.random() * str.length)
      pass+=str.charAt(char);
    }
    setPassword(pass);
  },[length, numbersAllowed, spcharactersAllowed, setPassword])

  useEffect(()=>{
      changePassword()
  },[length, numbersAllowed, spcharactersAllowed, changePassword])

  return (
    <>
      <div className="bg-black w-full h-screen">
        <div className="bg-gray-400 py-4 flex flex-col justify-center items-center">
          <h1 className='text-white py-3 text-4xl font-bold text-center'>Password Generator</h1>
          <div className="shadow-lg rounded-xl bg-slate-600 h-36 w-3/5 flex flex-col p-6 gap-y-7">
            <div className="flex flex-row">
              <input 
                className="rounded-l-3xl h-10 w-full text-2xl text-center" 
                type="text" 
                value={password}
                placeholder='password'
                readOnly/>
              <button className="bg-black h-10 rounded-r-3xl text-white">Copy</button>
            </div>
            
            <div className="flex text-lg justify-evenly">
              <div>
                <input type="range"
                min={1}
                max={100}
                value={length}
                onChange={(e) => setlength(e.target.value)}
                />
                <label>length : {length}</label>
              </div>
              <div>
                <input type="checkbox"
                defaultChecked={numbersAllowed}
                onChange={() => setnumberAllowed((prev) => !prev)}
                />
                <label>numbers</label>
              </div>
              <div>
                <input type="checkbox"
                defaultChecked={spcharactersAllowed}
                onChange={() => setspcharactersAllowed((prev) => !prev)}
                />
                <label>characters</label>
              </div>
            </div>
          </div>
        </div>
        
      </div>
    </>
  )
}

export default App
