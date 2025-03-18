import React, { useEffect, useState } from 'react'
import axios from 'axios'

export default function NvhReadApiLocal() {
    // khởi tạo state
    const [nvhListUser, setNvhListUser] = useState([])
    // đọc dữ liệu từ api local  và set cho nvhListUser
    const apiUrl = "http://localhost:3001/users"
    // Lấy danh sách từ apiUrl
    useEffect(()=>{
        axios
            .get(apiUrl)
            .then((nvhResponse)=>{
                setNvhListUser(nvhResponse.data)
            })
            .catch((error)=>{
                console.log("Lỗi");
            })
    },[])

  return (
    <div>
        <h2>Đọc dữ liệu từ API Local</h2>
        <table className='table table-bordered'>
            <thead>
                <tr>
                    <th>FullName</th>
                    <th>Age</th>
                </tr>
            </thead>
            <tbody>
                {
                    nvhListUser.map((nvhItem, index)=>{
                        return (
                            <tr>
                                <td>{nvhItem.fullName}</td>
                                <td>{nvhItem.age}</td>
                            </tr>
                        )
                    })
                }
            </tbody>
        </table>
    </div>
  )
}