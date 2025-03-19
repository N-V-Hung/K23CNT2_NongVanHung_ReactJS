import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import axios from "axios";

export default function NvhCreateUser() {
  
  let nvhuser = {
    nvhId:'',
    nvhFullName:"",
    nvhEmail:"",
    nvhPhone:"",
    nvhActive:false
  }

  const [nvh_user, setNvhUser] = useState(nvhuser)
  const nvhApiUrl = "https://67d90a6300348dd3e2a925dc.mockapi.io/k23cnt2_nongvanhung/nvh_users"
  
  const navigate = useNavigate();

  const nvhHandleSubmit = (event)=>{
    event.preventDefault();
    console.log(nvh_user);
    axios
      .post(nvhApiUrl, nvh_user)
      .then((response) => {
        navigate('/list-user')
      })
      .catch((error) => console.log('Lỗi khi thêm user.'));

  }

  const nvhHandleBack=(event)=>{
    event.preventDefault();
    navigate('/list-user')
  }
  return (
    <div>
      <h2 className="alert alert-success">Thêm mới thông tin User</h2>
      <form>
        <div className="mb-3 row">
          <label htmlFor="nvhFullName" className="col-sm-2 col-form-label">
            Full Name
          </label>
          <div className="col-sm-6">
            <input
              type="text"
              className="form-control"
              nvhId="nvhFullName"
              name="nvhFullName"
              value={nvh_user.nvhFullName}
              onChange={(ev)=>setNvhUser({...nvh_user,nvhFullName:ev.target.value})} 
            />
          </div>
        </div>
        <div className="mb-3 row">
          <label htmlFor="nvhEmail" className="col-sm-2 col-form-label">
            Email
          </label>
          <div className="col-sm-6">
            <input
              type="email"
              className="form-control"
              nvhId="nvhEmail"
              name="nvhEmail"
              value={nvh_user.nvhEmail}
              onChange={(ev)=>setNvhUser({...nvh_user,nvhEmail:ev.target.value})} 
            />
          </div>
        </div>
        <div className="mb-3 row">
          <label htmlFor="nvhPhone" className="col-sm-2 col-form-label">
            Phone
          </label>
          <div className="col-sm-6">
            <input
              type="tel"
              className="form-control"
              nvhId="nvhPhone"
              name="nvhPhone"
              value={nvh_user.nvhPhone}
              onChange={(ev)=>setNvhUser({...nvh_user,nvhPhone:ev.target.value})} 
            />
          </div>
        </div>
        <div className="mb-3 row">
          <label htmlFor="nvh_active" className="col-sm-2 col-form-label">
            Active
          </label>
          <div className="col-sm-6">
            <input
              type="radio"
              nvhId="nvh_active_true"
              name="nvh_active"
              value={'true'}
              onChange={(ev)=>setNvhUser({...nvh_user,nvh_active:ev.target.value})} 
            /> <label htmlFor="nvh_active_true" className="mx-2 text-success">Hoạt động</label>
            <input
              type="radio"
              nvhId="nvh_active_false"
              name="nvh_active"
              value={'false'}
              onChange={(ev)=>setNvhUser({...nvh_user,nvh_active:ev.target.value})} 
            /> <label htmlFor="nvh_active_false" className="mx-2 text-danger">Đang khóa</label>
          </div>
        </div>
        <div className="mb-3 row">
          <label htmlFor="" className="col-sm-2 col-form-label"></label>
          <div className="col-sm-6">
            <button className="mx-1" onClick={nvhHandleSubmit}>Create</button>
            <button className="px-3" onClick={nvhHandleBack}>Back</button>
          </div>
        </div>
      </form>
    </div>
  );
}