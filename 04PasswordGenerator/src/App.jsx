import { useState , useCallback, useEffect, useRef} from 'react'
import './App.css'

function App() {
  const [length, setlength] = useState(8);
  const [numberallowed, setnumberallowed] = useState(false);
  const [charallowed, setcharallowed] = useState(false);
  const [password, setpassword] = useState("");
  const passref = useRef(null);

  const passwordGenerator = useCallback(() => {
    let pass="";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    if(numberallowed) str+="0123456789";
    if(charallowed) str+="!@#$%^&*(){}[]_";
    for(let i=1; i<=length; i++){
      pass+=(str.charAt(Math.floor((Math.random())*str.length+1)));
    }

    setpassword(pass);

  }, [length, numberallowed, charallowed])

  //using useEffect hook
  useEffect(()=>{
    passwordGenerator();
  }, [length, numberallowed, charallowed, passwordGenerator])

  //using useref
  const copypasstoclipboard = useCallback(()=>{
    passref.current?.select()
    passref.current?.setSelectionRange(0,20);
    window.navigator.clipboard.writeText(password.slice(0,20))
  }, [password])

  return (
    <>
    <div className='w-full max-w-md mx-auto rounded-lg bg-black px-4 py-3 my-8 text-orange-300'>
      <div className='flex shadow mb-4 rounded-lg'></div>
        <h1 className='text-white text-2xl text-center my-3'>PASSWORD GENERATOR</h1>
        <div className='flex shadow rounded-lg overflow-hidden mb-4'>
          <input 
            type="text"
            value={password}
            readOnly
            placeholder='password'
            className='w-full px-3 py-1 outline-none rounded-l-lg text-indigo-500'
            ref={passref}
          />
          
          <button className='outline-none bg-blue-400 text-white px-3 py-0.5 shrink-0'
            onClick={copypasstoclipboard}
          >
            COPY
          </button>
        </div>
        <div className='flex text-sm gap-x-2'>
          <div className='flex items-center gap-x-1'>
            <input 
              type="range" 
              min={6}
              max={100}
              value={length}
              className='cursor-pointer'
              onChange={(e) => {setlength(e.target.value)}}
            />
            <label>Lenght: {length}</label>
          </div>
          <div className='flex items-center gap-x-1'>
            <input 
              type="checkbox"
              defaultChecked={numberallowed}
              id='numberInput'
              onChange={() => {
                setnumberallowed((prev)=>!prev);
              }}
            />
            <label htmlFor='numberInput'>NUMBERS</label>
          </div>
          <div className='flex items-center gap-x-1'>
            <input 
              type="checkbox"
              defaultChecked={charallowed}
              id='charInput'
              onChange={() => {
                setcharallowed((prev)=>!prev);
              }}
            />
            <label htmlFor='charInput'>CHARACTERS</label>
          </div>
        </div>
    </div>
    </>
  )
}

export default App
