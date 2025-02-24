import React, { Component } from 'react'

export default class NVHClassCompEvent1 extends Component {

    nvhEventHandleClick1 = ()=>{
      alert("Button 1 clicked");
    }

    nvhEventHandleClick2 = (name)=>{
      alert("Button 2 clicked; name=" + name);
    }
  render() {
    return (
      <div className='alert alert-info'>
        <button className='btn btn-primary mx-1' onClick={this.nvhEventHandleClick1}>Button 1</button>

        <button className='btn btn-primary mx-1' onClick={()=>this.nvhEventHandleClick2("Nông Văn Hưng")}>Button 2</button>
      </div>
    )
  }
}
