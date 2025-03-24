import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

export default function NvhListUser() {
    // state
    const [nvhListUser, setNvhListUser] = useState([])
    const nvhApi = "https://67e0cf5158cc6bf78522f6f9.mockapi.io/nvh-k23cnt2-2310900042/nvh_users"

    useEffect(()=>{
        axios.get(nvhApi)
        .then(nvh_response => {
            // Xử lý dữ liệu trả về từ API
            console.log(nvh_response.data); // Dữ liệu từ API
            setNvhListUser(nvh_response.data)
        })
        .catch(error => {
            // Xử lý lỗi
            console.error('Có lỗi xảy ra:', error);
        });
    },[])
   
    

    const nvhHandleDelete = async (nvhId)=>{
        if(window.confirm('Bạn có muốn xóa không?')){
            await axios.delete(nvhApi+"/"+nvhId);

            let nvhListUserDelete = nvhListUser.filter(x=>x.id !=nvhId);
            setNvhListUser(nvhListUserDelete);
        }
    }
    const navigate = useNavigate();
    const nvhHandleUpdate = (nvhId) =>{
        navigate(`/nvh-edit-user/${nvhId}`);
    }
  return (
    <div>
        <h2>Danh sách user</h2>
        <table className='table table-bordered'>
            <thead>
                <tr>
                    <th>User Id</th>
                    <th>FullName</th>
                    <th>Email</th>
                    <th>Phone</th>
                    <th>Active</th>
                    <th>Action</th>
                </tr>
            </thead>
            <tbody>
                {/* // hiển thị danh sách user */}
                {
                    nvhListUser.map((nvhUserItem,index)=>{
                        return (
                            <tr>
                                <td>{nvhUserItem.id}</td>
                                <td>{nvhUserItem.nvh_name}</td>
                                <td>{nvhUserItem.nvh_email}</td>
                                <td>{nvhUserItem.nvh_phone}</td>
                                <td>
                                    {nvhUserItem.nvh_active?
                                    <span className='badge text-bg-success'>Hoạt động</span>
                                    :<span className='badge text-bg-danger'>Tạm khóa</span>}
                                </td>
                                <td>
                                    <button onClick={()=>nvhHandleUpdate(nvhUserItem.id)}>Edit</button>
                                    <button onClick={(ev)=> nvhHandleDelete(nvhUserItem.id)}>Delete</button>
                                </td>
                            </tr>
                        )
                    })
                }
            </tbody>
        </table>
    </div>
  )
}