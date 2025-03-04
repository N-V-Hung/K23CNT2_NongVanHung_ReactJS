import React, { Component } from 'react'
import NvhLoginControl from './components/NvhLoginControl'
import NvhRenderList from './components/NvhRenderList'
import NvhRenderListStudent from './components/NvhRenderListStudent'


export default class NvhApp extends Component {
  render() {
    return (
      <div className='container border my-3'>
        <h1 className='text-center'>Nông Văn Hưng - Render condition , List Key</h1>
        <hr/>
        <NvhLoginControl />
         
        <NvhRenderList />

        <NvhRenderListStudent />
      </div>
    )
  }
}

