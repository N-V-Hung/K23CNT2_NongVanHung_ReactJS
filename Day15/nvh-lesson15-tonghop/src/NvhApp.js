import React from 'react'
import { BrowserRouter as NvhRouter,Routes, Route } from 'react-router-dom'
import NvhNavBar from './components/NvhNavBar'
import NvhHome from './components/NvhHome'
import NvhListUser from './components/NvhListUser'
import NvhEditUser from './components/NvhEditUser'
import NvhCreateUser from './components/NvhCreateUser'

export default function NvhApp() {
  return (
    <div className='container border my-3 p-3'>
      <h1 className='alert alert-danger text-center'>K23CNT2 - Nông Văn Hưng - 2310900042</h1>
      <hr/>
      <NvhRouter>
        <NvhNavBar />
        <Routes>
          <Route path='/' element={<NvhHome/>} />          
          <Route path='/nvh-list-user' element={<NvhListUser/>} />          
          <Route path='/nvh-create-user' element={<NvhCreateUser/>} />          
          <Route path='/nvh-edit-user/:id' element={<NvhEditUser/>} />          

        </Routes>
      </NvhRouter>
    </div>
  )
}
