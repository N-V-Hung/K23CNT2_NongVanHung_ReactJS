import React from 'react'
import NvhReadApiLocal from './components/NvhReadApiLocal'
import NvhReadMockAPI from './components/NvhReadMockAPI'
import NvhCreateMockAPI from './components/NvhCreateMockAPI'

export default function NvhApp() {
  return (
    <div className='container border my-3 p-3'>
        <h1> ReactJS - API - Nông Văn Hưng</h1>
        <hr/>
        <NvhReadApiLocal />
        
        <hr/>
        <h2>Đọc dữ liệu từ MockAPi (mockapi.io)</h2>
        <NvhReadMockAPI />

        <NvhCreateMockAPI />
    </div>
  )
}