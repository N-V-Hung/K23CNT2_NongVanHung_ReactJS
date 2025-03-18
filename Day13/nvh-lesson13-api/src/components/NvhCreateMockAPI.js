// Thêm mới dữ liệu 

import React, { useState } from 'react'
import axios from 'axios'
export default function NvhCreateMockAPI() {
    // khởi tạo state
    const [nvhFullName,setNvhFullName] = useState('')
    const [nvhAge,setNvhAge] = useState(0)
    const [nvhActive,setNvhActive] = useState(true)

    // api post
    const nvhCreateUserApi = "https://67d90a6300348dd3e2a925dc.mockapi.io/k23cnt2_nongvanhung/nvh_users";

    // khi submit form
    const nvhHandleSubmit = (event)=>{
        event.preventDefault();
        console.log("nvhActive:",nvhActive);
        let nvhNewUser = {nvhFullName,nvhAge,nvhActive};
        console.log(nvhNewUser);

        // ghi dữ liệu vào api
        axios
            .post(nvhCreateUserApi, nvhNewUser)
            .then((nvh_response)=>{
                
            })
        
    }
  return (
    <div className='alert alert-info'>
        <h2>Thêm mới users</h2>
        <hr/>
        <form>
            <div className=' mb-1'>
                <label for="nvhFullName">Full Name</label>
                <input type='text' name='nvhFullName' id="nvhFullName" 
                    value={nvhFullName}
                    onChange={(ev)=>setNvhFullName(ev.target.value)} />
            </div>
            <div className=' mb-1'>
                <label for="nvhAge">Age</label>
                <input type='number' name='nvhAge' id="nvhAge" 
                    value={nvhAge}
                    onChange={(ev)=>setNvhAge(ev.target.value)} />
            </div>
            <div className=' mb-1'>
                <label for="nvhActive">Active</label>
                <input type='radio' name='nvhActive' id="nvhActive_hd" value={'true'} 
                    onChange={(ev)=>setNvhActive(ev.target.value)} />
                    <label for="nvhActive_hd"> Hoạt động</label>
                <input type='radio' name='nvhActive' id="nvhActive_kh" value={'false'} 
                    onChange={(ev)=>setNvhActive(ev.target.value)}/>
                    <label for="nvhActive_kh"> Khóa</label>
            </div>
            <button onClick={nvhHandleSubmit}>Create</button>
        </form>
    </div>
  )
}