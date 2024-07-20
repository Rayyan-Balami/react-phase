import React, { useEffect, useState } from 'react'
import { useLoaderData } from 'react-router-dom'

function Github() {

  // const [data,setData] = useState({});

  // useEffect(() => {
  //   fetch('https://api.github.com/users/rayyan-balami')
  //   .then((res)=>res.json())
  //   .then((data)=>setData(data))
  //   .catch((error)=>setData({error:'api fetch error'}))
  // }, [data])

  const data = useLoaderData()
  
  return (
    <>
    <div>Github Followers :{data.followers}</div>
    <img src={data.avatar_url} alt={data.login} height='200px' />
    </>
  )
}

export default Github

export const gitAPI = async ()=>{
 const res = await fetch('https://api.github.com/users/rayyan-balami')
 return res.json()
}