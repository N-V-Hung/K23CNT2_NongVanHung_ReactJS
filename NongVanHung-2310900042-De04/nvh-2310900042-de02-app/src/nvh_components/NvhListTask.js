import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

export default function NvhListTask() {
    // state
    const [nvhListUser, setNvhListUser] = useState([])
    const nvhApi = "https://67ef9fbd2a80b06b889504ec.mockapi.io/nvhApi/2310900042/nvhTask"

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
   
    

    const nvhHandleDelete = async (nvhTaskId)=>{
        if(window.confirm('Bạn có muốn xóa không?')){
            await axios.delete(nvhApi+"/"+nvhTaskId);

            let nvhListUserDelete = nvhListUser.filter(x=>x.id !=nvhTaskId);
            setNvhListUser(nvhListUserDelete);
        }
    }
    const navigate = useNavigate();
    const nvhHandleUpdate = (nvhTaskId) =>{
        navigate(`/nvh-edit-user/${nvhTaskId}`);
    }
  return (
    <div>
        <h2>Danh sách user</h2>
        <table className='table table-bordered'>
            <thead>
                <tr>
                    <th>User Id</th>
                    <th>FullName</th>
                    <th>Level</th>
                    <th>Date</th>
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
                                <td>{nvhUserItem.nvhTaskId}</td>
                                <td>{nvhUserItem.nvhTaskName}</td>
                                <td>{nvhUserItem.nvhTaskLevel}</td>
                                <td>{nvhUserItem.nvhStartDate}</td>
                          
                                <td>
                                    {nvhUserItem.nvhTaskStatus?
                                    <span className='badge text-bg-success'>Done</span>
                                    :<span className='badge text-bg-danger'>Pending</span>}
                                </td>
                                <td>
                                    <button onClick={()=>nvhHandleUpdate(nvhUserItem.nvhTaskId)}>nvh-Edit</button>
                                    <button onClick={(ev)=> nvhHandleDelete(nvhUserItem.nvhTaskId)}>nvh-Delete</button>
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