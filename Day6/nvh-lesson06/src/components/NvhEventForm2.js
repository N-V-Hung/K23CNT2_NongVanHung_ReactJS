import React, { Component } from 'react'

export default class NvhEventForm2 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      nvhCourne: 'CSS'
    };
  }
  nvhHandleChange = (event) =>  {
    this.setState({
      nvhCourne: event.target.value
    })
  }
  nvhHandleSubmit =(event) =>{
    alert('Khoa hoc da chon khi submit: '+this.state.nvhCourne);
    event.preventDefault();
  }
  render() {
    return (
      <div>
         <h2>Form Input</h2>
        <form onSubmit={this.nvhHandleSubmit}>
          <label >
            Chon Khoa Hoc:
            <select value={this.state.nvhCourne} onChange={this.nvhHandleChange}>
              <option value="html">HTMH</option>
              <option value="CSS">CSS</option>
              <option value="Javascript">Javascript</option>
              <option value="ReactJS">ReactJS</option>
            </select>
          
          </label>
          <input type="submit" value="submit"/>
          <button className='btn btn-primary'>Click here</button>
        </form>
    </div>
    )
  }
}
