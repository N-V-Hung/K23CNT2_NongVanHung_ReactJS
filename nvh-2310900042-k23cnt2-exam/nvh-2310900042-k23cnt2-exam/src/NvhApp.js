import React from 'react'
import NvhMemberList from './components/NvhMemberList'
import NvhMemberNew from './components/NvhMemberNew'


export default function NvhApp() {
  return (
    <div>
       <NvhMemberList />
      <hr/>
      <NvhMemberNew />
    </div>
  )
}
