import React, { useState } from 'react'

export default function NvhFormUser({onNvhAddNew}) {

    const [id, setNvhId] = useState('')
    const [nvhFullName, setNvhFullName] = useState('')
    const [nvhUserName, setNvhUserName] = useState('')
    const [nvhPass, setNvhPass] = useState('')

   

    const nvhHandleSubmit = (event) =>{
        event.preventDefault();
        console.log(id,nvhFullName,nvhUserName, nvhPass)
        
        onNvhAddNew({id,nvhFullName,nvhUserName, nvhPass})
    }
  return (
    <div>
        <form>
            <p>Mã sinh viên:
                <input type='text' name='id' value={id} onChange={(ev)=>setNvhId(ev.target.value)} /> </p>
            <p>Họ và tên:
                <input type='text' name='nvhFullName' value={nvhFullName} onChange={(ev)=>setNvhFullName(ev.target.value)}/> </p>
            <p>Tài khoản:
                <input type='text' name='nvhUserName' value={nvhUserName} onChange={(ev)=>setNvhUserName(ev.target.value)}/> </p>
            <p>Mật khẩu:
                <input type='password' name='nvhPass' value={nvhPass} onChange={(ev)=>setNvhPass(ev.target.value)} /> </p>

            <p>
                <button name='nvhSave' onClick={nvhHandleSubmit}>Save</button>
            </p>
        </form>
    </div>
  )
}