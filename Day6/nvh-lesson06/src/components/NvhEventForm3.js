import React, { Component } from 'react'

export default class NvhEventForm3 extends Component {
    constructor(props) {
        super(props);
        this.state ={
            nvhGioiTinh: 'Nam',
        }
    }
    nvhHanldeChange =(event)=>{
        this.setState({
          nvhGioiTinh:event.target.value,
            
        })
    }
    nvhHanldeSubMit =(event)=>{
      event.preventDefault();
      alert("Gioi tinh cua ban la: " + this.state.nvhGioiTinh)

    }
  render() {
    return (
      <div>
        <h2>Form - Event</h2>
            <form>
                <div>
                    <label htmlFor=''>Gioi tinh:</label>
                    <input type='radio' name='nvhGioiTinh' value="Nam" id='nvhNam' className='mx-2' checked={this.state.nvhGioiTinh === 'Nam'} onChange={this.nvhHanldeChange}>Nam</input>
                    <input type='radio' name='nvhGioiTinh' value="Nu" id='nvhNu' className='mx-2' checked={this.state.nvhGioiTinh === 'Nu'} onChange={this.nvhHanldeChange}>Nu</input>
                    <input type='radio' name='nvhGioiTinh' value="Khac" id='nvhKhac' className='mx-2' checked={this.state.nvhGioiTinh === 'Khac'} onChange={this.nvhHanldeChange}>Khac</input>
                </div>
                <button onClick={this.nvhHanldeSubMit}>Submit</button>
            </form>
      </div>
    )
  }
}
