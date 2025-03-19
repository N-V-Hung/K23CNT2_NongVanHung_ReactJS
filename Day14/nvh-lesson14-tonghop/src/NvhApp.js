import React from 'react'
import {Route, BrowserRouter as Router, Routes} from 'react-router-dom'
import NvhListUser from './components/NvhListUser'
import NvhNavBar from './components/NvhNavBar'
import NvhHome from './components/NvhHome'
import NvhCreateUser from './components/NvhCreateUser'
import NvhEditUser from './components/NvhEditUser'

export default function NvhApp() {
  return (
    <div className='container border my-3 p-3'>
        <h1 className='text-center'>Nông Văn Hưng - Mini Project</h1>
      <Router >
          <NvhNavBar />
          <hr/>
          <Routes>
            <Route path='/' element={<NvhHome></NvhHome>} />
            <Route path='/list-user' element={<NvhListUser />} />
            <Route path='/create-user' element={<NvhCreateUser />} />
            <Route path='/edit-user/:nvhId' element={<NvhEditUser />} />
          </Routes>
      </Router>
        
    </div>
  )
}