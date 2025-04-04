import React from 'react'
import {Link} from 'react-router-dom'
import NvhHome from './NvhHome'

export default function NvhNavBar() {
  return (
    <nav>
        <Link to='/' >Home</Link> |
        <Link to='/nvh-list-user' >nvh-task</Link> |
        <Link to='/nvh-create-user' >nvh-task-add</Link>
    </nav>
  )
}