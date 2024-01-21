import React, {useState, useContext} from 'react'
import Usercontext from '../usecontext/Usercontext'

function Login() {
  const [username, setusername] = useState("")
  const [password, setpassword] = useState("")

  const {setuser} = useContext(Usercontext)

  const set = (e) => {
    e.preventDefault()
    setuser({username, password})
  }
  
  return (
    <div className='flex flex-col gap-3'>
        <h1 className='text-center pb-3'>Login</h1>
        <input type="text"
            placeholder='username'
            value={username}
            onChange={(e) => setusername(e.target.value)}
        />
        <input type="text" 
            placeholder='password'
            value={password}
            onChange={(e) => setpassword(e.target.value)}
        />
        <button
          onClick={set}
          className='border-black bg-gray-400 border-2 rounded-lg object-center'>
            submit
        </button>
    </div>
  )
}

export default Login