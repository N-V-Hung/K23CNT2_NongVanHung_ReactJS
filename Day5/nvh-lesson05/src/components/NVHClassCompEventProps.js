import React, { Component } from 'react'

export default class NVHClassCompEventProps extends Component {
    nvhEventHandleclick1 = ()=>{
        alert("Hello..." + this.props.nvhRenderTitle);
    }

    render() {
    return (
      <div className='alert alert-danger'>
        <button className='btn btn-primary' onClick={this.nvhEventHandleclick1}>Button 1</button>
      </div>
    )
  }
}
