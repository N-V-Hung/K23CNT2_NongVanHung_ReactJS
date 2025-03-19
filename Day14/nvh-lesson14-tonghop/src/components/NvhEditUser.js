import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom';

export default function NvhEditUser() {
  // api
  const nvhApiUrl = "https://67d90a6300348dd3e2a925dc.mockapi.io/k23cnt2_nongvanhung/nvh_users";
  // lấy biến nvhId trên url;
  const {nvhId} = useParams(); // <Route path='/edit-user/:nvhId' element={<NvhEditUser />} />; navigate(`/edit-user/${nvhId}`);
  // Khởi tạo state cho componnet
  const [nvh_editUser, setNvhEditUser] = useState({
    nvhFullName:'', nvhEmail:'', nvhPhone:'', nvhActive:false
  })
  // đọc dữ liệu từ api và set cho state: nvh_editUser
  useEffect(()=> {
    axios
      .get(`${nvhApiUrl}+${nvhId}`)
      .then((nvh_response) => {
        const nvh_editUser = nvh_response.data;
        setNvhEditUser(nvh_editUser);
      })
      .catch((error) => {
        console.error('Lỗi khi tải công việc:', error);
      });
  },[nvhId])
 
  // Hàm xử lý khi người dùng thay đổi trạng thái Active (radio button)
  const nvhHandleRadioChange = (ev) => {
    setNvhEditUser({
      ...nvh_editUser,
      nvhActive: ev.target.value, // Cập nhật trạng thái nvhActive theo giá trị của radio button
    });
  };
  // tạo navigate từ react router dom để điều hướng khi cập nhật thành công hoặc back
  const navigate = useNavigate();

  // Khi người dùng nhấn nút submit (cập nhật dữ liệu) => lấy dữ liệu từ form, post vào api
  // Hàm cập nhật những thay đổi trên form vào api
  const nvhHandleSubmit = (event) => {
    event.preventDefault();  // Prevent default form submission
  
    axios
      .put(`${nvhApiUrl}/${nvhId}`, nvh_editUser)  // Correct API URL format
      .then((nvh_editUser) => {
        alert('Cập nhật thành công!');
        navigate('/list-user');  // Navigate back after successful update
      })
      .catch((error) => {
        console.error('Lỗi khi cập nhật người dùng:', error);
      });
  };
  
  // khi click vào nút back
  const nvhHandleBack=(event)=>{
    event.preventDefault();
    navigate('/list-user')
  }
  return (
    <div>
      <h2 className="alert alert-success">Sửa thông tin User</h2>
      <form className='table table-border' onSubmit={nvhHandleSubmit}>
        <div className="mb-3 row">
          <label htmlFor="nvhFullName" className="col-sm-2 col-form-label">Full Name</label>
          <div className="col-sm-6">
            <input
              type="text"
              className="form-control"
              id="nvhFullName"
              name="nvhFullName"
              value={nvh_editUser.nvhFullName}
              onChange={(ev)=>setNvhEditUser({...nvh_editUser,nvhFullName:ev.target.value})} 
            />
          </div>
        </div>
        <div className="mb-3 row">
          <label htmlFor="nvhEmail" className="col-sm-2 col-form-label">Email</label>
          <div className="col-sm-6">
            <input
              type="email"
              className="form-control"
              id="nvhEmail"
              name="nvhEmail"
              value={nvh_editUser.nvhEmail}
              onChange={(ev)=>setNvhEditUser({...nvh_editUser,nvhEmail:ev.target.value})} 
            />
          </div>
        </div>
        <div className="mb-3 row">
          <label htmlFor="nvhPhone" className="col-sm-2 col-form-label">Phone</label>
          <div className="col-sm-6">
            <input
              type="tel"
              className="form-control"
              id="nvhPhone"
              name="nvhPhone"  
              value={nvh_editUser.nvhPhone}
              onChange={(ev)=>setNvhEditUser({...nvh_editUser,nvhPhone:ev.target.value})} 
            />
          </div>
        </div>
        <div className="mb-3 row">
          <label className="col-sm-2 col-form-label">Active</label>
          <div className="col-sm-6">
            <input
              type="radio"
              id="nvhActive_true"
              name="nvhActive"
              value={'true'}
              checked={nvh_editUser.nvhActive === 'true' || nvh_editUser.nvhActive === true}
              onChange={nvhHandleRadioChange} 
            /> 
            <label htmlFor="nvhActive_true" className="mx-2 text-success">Hoạt động</label>
            
            <input
              type="radio"
              id="nvhActive_false"
              name="nvhActive"
              value={'false'}
              checked={nvh_editUser.nvhActive === 'false' || nvh_editUser.nvhActive === false}
              onChange={nvhHandleRadioChange} 
            /> 
            <label htmlFor="nvhActive_false" className="mx-2 text-danger">Đang khóa</label>
          </div>
        </div>
        <div className="mb-3 row">
          <label className="col-sm-2 col-form-label"></label>
          <div className="col-sm-6">
            <button type="submit" className="mx-1">Update</button>
            <button type="button" className="px-3" onClick={nvhHandleBack}>Back</button>
          </div>
        </div>
      </form>

    </div>
  )
}