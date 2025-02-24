import React, { Component } from 'react'

export default class NVHClassCompEventPostData extends Component {
    constructor(props){
        super(props);
    }

    nvhEventHandleClick1 = ()=>{
        this.props.onNVHDaTaToApp("Dữ liệu từ commonent con - NVHClassCompEventPostData")
    }
    render() {
    return (
      <div className='alert alert-success'>
        <button className='btn btn-primery' onClick={this.nvhEventHandleClick1}>Button 1 -Chuyển dữ liệu lên App</button>

      </div>
    )
  }
}
