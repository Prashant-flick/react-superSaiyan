import { useState } from 'react'

function App() {
  const [color, setColor] = useState("purple");

  return (
      <div className="w-full h-screen duration-200"
        style={{backgroundColor: color}}
      >
        <div className='fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2'>
          <div className='flex flex-wrap justify-center bg-white shadow-lg gap-3 px-3 py-2 rounded-3xl'>
            <button 
              onClick={()=>setColor("red")}
              className='outline-none px-4 py-1 rounded-full text-white shadow-2xl'
              style={{backgroundColor: "red"}}
            >Red</button>
            <button 
              onClick={()=>setColor("blue")}
              className='outline-none px-4 py-1 rounded-full text-white shadow-2xl'
              style={{backgroundColor: "blue"}}
            >Blue</button>
            <button 
              onClick={()=>setColor("green")}
              className='outline-none px-4 py-1 rounded-full text-white shadow-lg'
              style={{backgroundColor: "green"}}
            >Green</button>
            <button 
              onClick={()=>setColor("gray")}
              className='outline-none px-4 py-1 rounded-full text-white shadow-2xl'
              style={{backgroundColor: "gray"}}
            >Gray</button>
            <button 
              onClick={()=>setColor("black")}
              className='outline-none px-4 py-1 rounded-full text-white shadow-2xl'
              style={{backgroundColor: "black"}}
            >Black</button>
            <button 
              onClick={()=>setColor("white")}
              className='outline-none px-4 py-1 text-black rounded-full border border-black'
              style={{backgroundColor: "white"}}
            >White</button>
            <button 
              onClick={()=>setColor("violet")}
              className='outline-none px-4 py-1 rounded-full text-white shadow-2xl'
              style={{backgroundColor: "violet"}}
            >Violet</button>
            <button 
              onClick={()=>setColor("lightblue")}
              className='outline-none px-4 py-1 rounded-full text-white shadow-2xl'
              style={{backgroundColor: "lightblue"}}
            >LightBlue</button>
            <button 
              onClick={()=>setColor("wheat")}
              className='outline-none px-4 py-1 rounded-full text-white shadow-2xl'
              style={{backgroundColor: "wheat"}}
            >Wheat</button>
            <button 
              onClick={()=>setColor("navy")}
              className='outline-none px-4 py-1 rounded-full text-white shadow-2xl'
              style={{backgroundColor: "navy"}}
            >Navy</button>
            <button 
              onClick={()=>setColor("indigo")}
              className='outline-none px-4 py-1 rounded-full text-white shadow-2xl'
              style={{backgroundColor: "indigo"}}
            >Indigo</button>
          </div>
        </div>
      </div>
  )
}

export default App
