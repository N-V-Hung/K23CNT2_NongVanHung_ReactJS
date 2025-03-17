import React,{ useState } from 'react'

export default function NvhSanPham({renderNvhSanPham}) {

    const nvhElements = renderNvhSanPham.map((nvhItem, index)=>{
        return (
            <>
                <tr key={index}> 
                    <td>{index+1}</td>
                    <td>{nvhItem.id}</td>
                    <td>{nvhItem.nvhTenSP}</td>
                    <td>{nvhItem.nvhGia}</td>
                    <td>{nvhItem.nvhSL}</td>
                    <td>{nvhItem.nvhGhiChu}</td>
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
                    <th>Ten san pham</th>
                    <th>Giá </th>
                    <th>Số Lượng còn</th>
                    <th>Ghi chú</th>
                </tr>
            </thead>
            <tbody>
                {nvhElements}
            </tbody>
        </table>
    </div>
  )
}