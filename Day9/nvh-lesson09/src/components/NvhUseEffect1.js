import React, { useEffect, useState } from 'react'

export default function NvhUseEffect1() {
    const [count, setCount] = useState(0);
    useEffect(()=>{
        console.log("useEfect (callback");
    })

    useEffect(()=>{
        console.log("useEfect (callback,[]; chỉ 1 lần duy nhất");
    })

    useEffect(()=>{
        console.log('Count has changer:',count);
    })
  return (
    <div className='alert alert-danger'>
        <h1>useEffect</h1>
      <button onClick={()=>setCount(count+1)}>click</button>
    </div>
  )
}
