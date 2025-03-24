import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
export default function NvhEditUser() {
     const nvhUser = {
            id:0,
            'nvh_name':'',
            'nvh_email':'',
            'nvh_phone':'',
            'nvh_active':true
        }
    
        const [nvh_user, setNvh_User] = useState(nvhUser);
        const nvhApi = "https://67e0cf5158cc6bf78522f6f9.mockapi.io/nvh-k23cnt2-2310900042/nvh_users"

        const {id} = useParams();

        useEffect(()=>{
            axios.get(nvhApi+"/"+`${id}`)
            .then(nvh_response => {
                // Xử lý dữ liệu trả về từ API
                console.log(nvh_response.data); // Dữ liệu từ API
                setNvh_User(nvh_response.data)
            })
            .catch(error => {
                // Xử lý lỗi
                console.error('Có lỗi xảy ra:', error);
            });
        },[])
        const navigate = useNavigate();
        const nvhHandlSubmit = (ev)=>{
            ev.preventDefault();
            console.log(nvh_user);
            axios
            .put(nvhApi+`/${id}`, nvh_user)
            .then((nvh_response) => {
                alert('Cập nhật thành công!');
                navigate('/nvh-list-user'); // Sau khi lưu, chuyển về trang danh sách
            })
        }
  return (
    <div>
      <h2>Sửa thông tin user</h2>
      <form>
        <div className="mb-3 row">
          <label htmlFor="nvh_name" className="col-sm-2 col-form-label">FullName</label>
          <div className="col-sm-10">
            <input type="text" className="form-control" id="nvh_name"
                name="nvh_name"
                value={nvh_user.nvh_name} 
                onChange={(ev)=>setNvh_User({...nvh_user,nvh_name:ev.target.value})} 
                />
          </div>
        </div>

        <div className="mb-3 row">
          <label htmlFor="nvh_email" className="col-sm-2 col-form-label">Email</label>
          <div className="col-sm-10">
            <input type="text" className="form-control" id="nvh_email" 
             name="nvh_email"
             value={nvh_user.nvh_email} 
             onChange={(ev)=>setNvh_User({...nvh_user,nvh_email:ev.target.value})} 

             />
          </div>
        </div>

        <div className="mb-3 row">
          <label htmlFor="nvh_phone" className="col-sm-2 col-form-label">Phone</label>
          <div className="col-sm-10">
            <input type="text" className="form-control" id="nvh_phone" 
             name="nvh_phone"
             value={nvh_user.nvh_phone} 
             onChange={(ev)=>setNvh_User({...nvh_user,nvh_phone:ev.target.value})} 
             />
          </div>
        </div>

        <div className="mb-3 row">
          <label htmlFor="nvh_active" className="col-sm-2 col-form-label">Active</label>
          <div className="col-sm-10">
            <input type="radio" id="nvh_active_true"  className="mx-3"   
                onChange={(ev)=>setNvh_User({...nvh_user,nvh_active:ev.target.value})}
                value={true}
                name="nvh_active"  /> 
            <label htmlFor="nvh_active_true">Hoạt động</label>
            <input type="radio" id="nvh_active_false"  className="mx-3"
                onChange={(ev)=>setNvh_User({...nvh_user,nvh_active:ev.target.value})}
                value={false} 
                name="nvh_active" /> 
            <label htmlFor="nvh_active_false">Tạm khóa</label>
          </div>
        </div>

        <div className="mb-3 row">
            <label htmlFor="" className="col-sm-2 col-form-label"></label>
            <div className="col-sm-10">
                <button className="btn btn-primary mx-2 px-3" name="btnNvhCreate" 
                    onClick={nvhHandlSubmit}
                    >Update</button>
                <button className="btn btn-secondary mx-2 px-3" name="btnNvhBack">Back</button>
            </div>
        </div>
      </form>
    </div>
  )
}