import React from 'react'

export default function NvhRenderList() {
    const nvhList =["Văn Hưng","React","Fit-NTU"];

    const nvhElment = nvhList.map(item=>{
        return <li>{item}</li>
    })


  return (
    <div className='alert alert-success'>
      <h2>Danh sách:</h2>
      <ul>
      {
                nvhList.map(item=>{
                    return <li>{item}</li>
                })
            }
      </ul>
      {nvhElment}
    </div>
  )
}
