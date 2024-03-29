import React, { useEffect, useState } from 'react'
import { useLoaderData } from 'react-router-dom'

function Github() {
    const data = useLoaderData();
    console.log(data);

    // useEffect(()=>{
    //     fetch("https://api.github.com/users/facebook")
    //     .then((res) => res.json())
    //     .then((res) => {
    //         console.log(res)
    //         setdata(res)
    //     })
    // },[data])

  return (
    <div className='bg-black font-bold text-4xl py-3 text-white text-center'>
      Github Followers: {data.followers}
      <img className='h-80 w-auto' src={data.avatar_url} alt="" />
      </div>
  )
}

export default Github

export const gitfetcher = async () => {
  const res = await fetch("https://api.github.com/users/hiteshchoudhary")
  return res.json();
}