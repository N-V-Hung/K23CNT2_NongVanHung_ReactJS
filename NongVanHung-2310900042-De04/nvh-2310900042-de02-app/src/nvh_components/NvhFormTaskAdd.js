import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
export default function NvhCreateUser() {
    const nvhUser = {
        nvhTaskId:0,
            'nvhTaskName':'',
            'nvhTaskLevel':'',
            'nvhStartDate':'',
            'nvhTaskStatus':true
    }

    const [nvhTask, setNvh_User] = useState(nvhUser);
    const nvhApi = "https://67ef9fbd2a80b06b889504ec.mockapi.io/nvhApi/2310900042/nvhTask"
    const navigate = useNavigate();

    const nvhHandlSubmit = (ev)=>{
        ev.preventDefault();
        console.log(nvhTask);
        axios
            .post(nvhApi, nvhTask)
            .then(() => {
                navigate('/nvh-list-user')
            })
            .catch((error) => console.log('Lỗi khi thêm user.'));

    }
  return (
    <div>
      <h2>Thêm mới user</h2>
      <form>
        <div className="mb-3 row">
          <label htmlFor="nvhTaskName" className="col-sm-2 col-form-label">FullName</label>
          <div className="col-sm-10">
            <input type="text" className="form-control" id="nvhTaskName"
                name="nvhTaskName"
                value={nvhTask.nvhTaskName} 
                onChange={(ev)=>setNvh_User({...nvhTask,nvhTaskName:ev.target.value})} 
                />
          </div>
        </div>

        <div className="mb-3 row">
          <label htmlFor="nvhTaskLevel" className="col-sm-2 col-form-label">Email</label>
          <div className="col-sm-10">
            <input type="text" className="form-control" id="nvhTaskLevel" 
             name="nvhTaskLevel"
             value={nvhTask.nvhTaskLevel} 
             onChange={(ev)=>setNvh_User({...nvhTask,nvhTaskLevel:ev.target.value})} 

             />
          </div>
        </div>

        <div className="mb-3 row">
          <label htmlFor="nvhStartDate" className="col-sm-2 col-form-label">Phone</label>
          <div className="col-sm-10">
            <input type="text" className="form-control" id="nvhStartDate" 
             name="nvhStartDate"
             value={nvhTask.nvhStartDate} 
             onChange={(ev)=>setNvh_User({...nvhTask,nvhStartDate:ev.target.value})} 
             />
          </div>
        </div>

        <div className="mb-3 row">
          <label htmlFor="nvhTaskStatus" className="col-sm-2 col-form-label">Active</label>
          <div className="col-sm-10">
            <input type="radio" id="nvhTaskStatus_true"  className="mx-3"   
                onChange={(ev)=>setNvh_User({...nvhTask,nvhTaskStatus:ev.target.value})}
                value={true}
                name="nvhTaskStatus"  /> 
            <label htmlFor="nvhTaskStatus_true">Hoạt động</label>
            <input type="radio" id="nvhTaskStatus_false"  className="mx-3"
                onChange={(ev)=>setNvh_User({...nvhTask,nvhTaskStatus:ev.target.value})}
                value={false} 
                name="nvhTaskStatus" /> 
            <label htmlFor="nvhTaskStatus_false">Tạm khóa</label>
          </div>
        </div>

        <div className="mb-3 row">
            <label htmlFor="" className="col-sm-2 col-form-label"></label>
            <div className="col-sm-10">
                <button className="btn btn-primary mx-2 px-3" name="btnNvhCreate" 
                    onClick={nvhHandlSubmit}
                    >Create</button>
                <button className="btn btn-secondary mx-2 px-3" name="btnNvhBack">Back</button>
            </div>
        </div>
      </form>
    </div>
  );
}