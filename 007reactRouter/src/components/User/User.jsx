import React from 'react'
import { useParams } from 'react-router-dom';

function User() {
    const {userid} = useParams();
  return (
    <div className='bg-black font-bold text-4xl py-3 text-white text-center'>User: {userid}</div>
  )
}

export default User