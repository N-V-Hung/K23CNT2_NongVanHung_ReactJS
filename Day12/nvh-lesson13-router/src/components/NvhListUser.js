import React from 'react'

export default function NvhListUser({renderNvhUsers}) {

    const nvhElements = renderNvhUsers.map((nvhItem, index)=>{
        return (
            <>
                <tr key={index}> 
                    <td>{index+1}</td>
                    <td>{nvhItem.id}</td>
                    <td>{nvhItem.nvhFullName}</td>
                    <td>{nvhItem.nvhUserName}</td>
                    <td>{nvhItem.nvhPass}</td>
                </tr>
            </>)
    })
  return (
    <div>
        <h2>Danh sách tài khoản</h2>
        <table className='table table-bordered'>
            <thead>
                <tr>
                    <th>#</th>
                    <th>ID</th>
                    <th>FullName</th>
                    <th>UserName</th>
                    <th>Password</th>
                </tr>
            </thead>
            <tbody>
                {nvhElements}
            </tbody>
        </table>
    </div>
  )
}