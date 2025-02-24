import React, { Component } from 'react'

export default class NVHClassCompEventState extends Component {
    constructor(props){
        super(props);
        this.state = {
            nvhFullName:"Nông Văn Hưng",
            nvhAge:45,
        }
    }

    nvhEventHandleClick1 = ()=>{
        alert("FullName: " +this.state.nvhFullName + "\n Age:" +this.state.nvhAge);
    }
    render() {
    return (
      <div className='alert alert-danger'>
        <button className='btn btn-primary' onClick={this.nvhEventHandleClick1}>Button 1 - Dữ liệu trong state</button>
       
      </div>
    )
  }
}
