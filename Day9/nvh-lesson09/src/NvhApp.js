import React from 'react'
import NvhUseState from './components/NvhUseState'
import NvhUseStateListObject from './components/NvhUseStateListObject'
import NvhUseEffect1 from './components/NvhUseEffect1'

export default function NvhApp() {
  return (
    <div className='container border mt-3'>
      <h1>React Hook</h1>
      <hr/>
      <NvhUseState />
      <NvhUseStateListObject />
      <NvhUseEffect1 />
      
    </div>
  )
}
