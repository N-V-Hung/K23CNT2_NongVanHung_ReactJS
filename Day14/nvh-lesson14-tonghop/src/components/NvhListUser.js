import React from 'react'

import nvhAxiosUsers from '../api/nvhapi'
import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom';

export default function NvhListUsers() {
    const navigate = useNavigate();
    const [nvhListUser, setNvhListUser] = useState([]);
    const nvhGetAllUser = async()=>{
        //Goi API lay du lieu
        const nvh_resp = await nvhAxiosUsers.get("/nvh_users");
        setNvhListUser(nvh_resp.data);
    }
    
    // Gọi API và lấy dữ liệu cho biến state (nvhListUser)
    useEffect(()=>{
        nvhGetAllUser()
    },[])

    const nvhHandleUpdate = (nvhId)=>{
        navigate(`/edit-user/${nvhId}`);
    }
    const nvhHandleDelete = async (nvhId)=>{
        if(window.confirm('Bạn có muốn xóa không?')){
            await nvhAxiosUsers.delete("/nvh_users/"+nvhId);

            let nvhListUserDelete = nvhListUser.filter(x=>x.nvhId !=nvhId);
            setNvhListUser(nvhListUserDelete);
        }
    }
    // tạo hiển thị active
    const nvhActiveElement = (flag)=>{
        if(flag===true || flag =="true")
            return <span class='badge text-bg-success'>Hoạt động </span>
        else
            return <span class='badge text-bg-danger'>Khóa </span>
    }
    // duyệt dữ liệu từ state và hiển thị
    const nvhElementUser = nvhListUser.map((nvh_user)=>{
        return <tr key={nvh_user.nvhId}>
            <td className='text-center'>{nvh_user.nvhId}</td>
            <td>{nvh_user.nvhFullName}</td>
            <td>{nvh_user.nvhEmail}</td>
            <td>{nvh_user.nvhPhone}</td>
            <td>
                {
                    nvhActiveElement(nvh_user.nvhActive)
                }
            </td>
            <td className='text-center'>
                <button onClick={()=>nvhHandleUpdate(nvh_user.nvhId)} className='mx-1 px-3'>Edit</button>
                <button onClick={()=>nvhHandleDelete(nvh_user.nvhId)} className='mx-1'>Delete</button>
            </td>
        </tr>
    })

  return (
    <div>
        <table className='table table-border'>
                <thead>
                    <tr className='text-center'>
                        <th>User ID</th>
                        <th>Full Name</th>
                        <th>Email</th>
                        <th>Phone</th>
                        <th>Active</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {nvhElementUser}
                </tbody>
            </table>
    </div>
  )
}