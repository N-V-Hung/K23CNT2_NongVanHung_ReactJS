import React, { useState } from 'react'
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom'
import NvhNavNar from './components/NvhNavNar'
import NvhHome from './components/NvhHome'
import NvhAbout from './components/NvhAbout'
import NvhContact from './components/NvhContact'
import NvhListUser from './components/NvhListUser'
import NvhFormUser from './components/NvhFormUser'
export default function NvhApp() {

  const listUsers  = [
    {id:"SV001", nvhFullName:"Nông Văn Hưng", nvhUserName:"VanHung", nvhPass:"123456a@"},
    {id:"SV002", nvhFullName:"Trịnh Quan Quang", nvhUserName:"QuanTrinh", nvhPass:"123456a@"},
    {id:"SV003", nvhFullName:"Nguyễn Quang A", nvhUserName:"QuangA", nvhPass:"123456a@"},
  ]

  const[nvhUsers, setNvhUsers] = useState(listUsers)

  // Hàm xử lý sự kiện thêm mới
  const nvhHandleAdd = (nvhParam)=>{
    console.log("nvhHandleAdd:", nvhParam);
    
    setNvhUsers(prev =>{ 
      return [
        ...prev,
        nvhParam
      ]
    })
  }
  return (
    <div className='container border my-3'>
        <h1>React Router Dom - Demo - [Nông Văn Hưng - K23CNT2]</h1>
        <hr/>
        <Router>
            <NvhNavNar />
            <Routes>
                <Route path='/' element = {<NvhHome />} />
                <Route path='/about' element = {<NvhAbout />} />
                <Route path='/contact' element = {<NvhContact />} />
                <Route path='/list-user' element = {<NvhListUser  renderNvhUsers={nvhUsers}/>} />
                <Route path='/create-user' element = {<NvhFormUser  onNvhAddNew={nvhHandleAdd}/>} />
            </Routes>
        </Router>
    </div>
  )
}