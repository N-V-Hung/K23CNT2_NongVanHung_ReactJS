import React from 'react'
import { BrowserRouter as NvhRouter,Routes, Route } from 'react-router-dom'
import NvhNavBar from './nvh_components/NvhNavBar'
import NvhHome from './nvh_components/NvhHome'
import NvhListTask from './nvh_components/NvhListTask'
import NvhFormTaskAdd from './nvh_components/NvhFormTaskAdd'
import NvhFormTaskEdit from './nvh_components/NvhFormTaskEdit'

export default function NvhApp() {
  return (
    <div className='container border my-3 p-3'>
      <h1 className='alert alert-danger text-center'>Bài Thi Cuối Học Phần - Nông Văn Hưng : 2310900042</h1>
      
      <NvhRouter>
        <NvhNavBar />
        <Routes>
          <Route path='/' element={<NvhHome/>} />          
          <Route path='/nvh-list-user' element={<NvhListTask/>} />          
          <Route path='/nvh-create-user' element={<NvhFormTaskAdd/>} />          
          <Route path='/nvh-edit-user/:id' element={<NvhFormTaskEdit/>} />          

        </Routes>
      </NvhRouter>
    </div>
  )
}
