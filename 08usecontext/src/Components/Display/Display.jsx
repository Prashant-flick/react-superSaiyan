import React from 'react'
import { useContext } from 'react'
import Usercontext from '../usecontext/Usercontext'

function Display() {
    const {user} = useContext(Usercontext)

  if(!user)return <h1>login user</h1>
  return (
    <div>Welcome {user.username}</div>
  )
}

export default Display