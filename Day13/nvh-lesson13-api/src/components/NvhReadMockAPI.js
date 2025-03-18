import React, { useEffect, useState } from 'react'
import axios from 'axios'

export default function NvhReadMockAPI() {
    // khởi tạo state 
    const [nvhListUser, setNvhListUser] = useState([])
    // api
    const nvhApiOnline = "https://67d90a6300348dd3e2a925dc.mockapi.io/k23cnt2_nongvanhung/nvh_users"
    // Đọc dữ liệu từ api bằng axios
    useEffect(()=>{
        axios
            .get(nvhApiOnline)
            .then((nvh_response)=>{
                setNvhListUser(nvh_response.data)
            })
            .catch((error)=>{
                console.log("Lỗi phát sinh");
            })
    },[])

    // view data
    const nvhElementUser = nvhListUser.map((nvh_item, index)=>{
        return(
            <tr>
                <td>{nvh_item.nvhId}</td>
                <td>{nvh_item.nvhFullName}</td>
                <td>{nvh_item.nvhAge}</td>
                <td>{nvh_item.nvhActive?'Hoạt động':'Khóa'}</td>
                <td>
                    <button>Sửa</button>
                    <button>Xóa</button>
                </td>
            </tr>
        )
    })
  return (
    <div className='alert alert-danger'>
        <h2>Danh sách</h2>
        <table className='table table-bordered'>
            <thead>
                <tr>
                    <th>Id</th>
                    <th>FullName</th>
                    <th>Age</th>
                    <th>Active</th>
                    <th>Action</th>
                </tr>
            </thead>
            <tbody>
                {
                   nvhElementUser
                }
            </tbody>
        </table>
    </div>
  )
}