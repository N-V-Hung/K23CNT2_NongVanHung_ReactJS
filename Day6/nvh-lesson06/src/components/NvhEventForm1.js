import React, { Component } from 'react'

export default class NvhEventForm1 extends Component {
    constructor(props){
        super(props);
        this.state = {
            nvhStudentName:'Van Hung',
        }
    }

//ham su ly su kien khi du lieu tren textbox (nvhStudentName) thay doi
    nvhHandleChange = (event)=>{
        //cap nhat lai state
        this.setState({
            nvhStudentName:event.target.value,
        })
    }

    //khi submit,lay du lieu va hien thi
    nvhHandleSubmit =(ev)=>{
        alert('xin chao:' +this.state.nvhStudentName)
    }
  render() {
    return (
      <div className='alert alert-info'>
        <h2>
            Form Input
        </h2>
        <form onSubmit={this.nvhHandleSubmit}>
            <label htmlFor='nvhStudentName'>
                <input type='text' name='nvhStudentName' id='nvhStudentName' 
                    value={this.state.nvhStudentName}
                    onChange={this.nvhHandleChange}/>
            </label>
            <button className='btn btn-primary'>Click here</button>
        </form>
      </div>
    )
  }
}
