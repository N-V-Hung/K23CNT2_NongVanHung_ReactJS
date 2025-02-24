import React, { Component } from 'react'
import NVHFuncCompEvent1 from './components/NVHFuncCompEvent1'
import NVHClassCompEvent1 from './components/NVHClassCompEvent1'
import NVHFuncCompEventProps from './components/NVHFuncCompEventProps'
import NVHClassCompEventProps from './components/NVHClassCompEventProps'
import NVHClassCompEventState from './components/NVHClassCompEventState'
import NVHClassCompEventPostData from './components/NVHClassCompEventPostData'

export default class NVHApp extends Component {
  constructor(props){
    super(props);
    this.state = {
      nvhNoiDung:"chưa có",
    } 
  }
  nvhHandleDataToApp =(content)=>{
    alert(content);
  }
  render() {
    return (
      <div className='container boder mt-3'>
        <h1 className='text-center alert alert-info my-2 '>K23CNT2 - Nông Văn Hưng - Event and Form</h1>
        <hr/>
        <div>
          <h2>function components - Event</h2>
          <NVHFuncCompEvent1 />
        </div>

        <hr/>

        <div>
          <h2>Class Component - Event</h2>
          <NVHClassCompEvent1 />
        </div>
        <hr/>

        <div>
          <h2>function Component - Event; props</h2>
          <NVHFuncCompEventProps nvhRenderName="Nông Văn Hưng" />

        </div>
        <div>
          <h2>Class Component - Event; props</h2>
          <NVHClassCompEventProps  nvhRenderTitle = "Welcome to Văn Hưng"/>
        </div>

        <div>
          <h2>Class Component - Event; state</h2>
          <NVHClassCompEventState />
        </div>

        <div>
          <h1>{this.state.nvhNoiDung}</h1>
          <h2>Class Component - Event; Post Data to App</h2>
          <NVHClassCompEventPostData onNVHDataToApp={this.nvhHandleDataToApp}/>
        </div>
      </div>
    )
  }
}
