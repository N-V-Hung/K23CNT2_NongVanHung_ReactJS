import React, { Component } from 'react'
import NvhEventForm1 from './components/NvhEventForm1'
import NvhEventForm2 from './components/NvhEventForm2'
import NvhEventForm3 from './components/NvhEventForm3'
import NvhEventForm4 from './components/NvhEventForm4'
import NvhEventForm5 from './components/NvhEventForm5'



export default class NvhApp extends Component {
  render() {
    return (
      <div className='container boder my-3 bg-white'>
        <h1 className='text-center'>EventForm - Demo</h1>
        <hr/>
        <NvhEventForm1 />
        <hr/>
        <NvhEventForm2 />
        <hr/>
        <NvhEventForm3 />
        <hr/>
        <NvhEventForm4 />
        <hr/>
        <NvhEventForm5 onnvhHandleSubmit={this.nvhHandleSubmitForm}/>
      </div>
      
    )
  }
}
