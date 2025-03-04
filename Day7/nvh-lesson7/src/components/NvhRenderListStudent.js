import React, { Component } from 'react'

export default class NvhRenderListStudent extends Component {
  constructor(props){
    super(props);
    this.state = {
        nvhStudent:[
            {nvhID:"NTU001" ,nvhName:"Nông Văn Hưng",nvhAge:20,nvhClass:"K23CNt2"},
            {nvhID:"NTU002" ,nvhName:"Nguyễn Văn A",nvhAge:20,nvhClass:"K23CNt2"},
            {nvhID:"NTU003" ,nvhName:"Nguyễn Văn B",nvhAge:20,nvhClass:"K23CNt2"},
            {nvhID:"NTU004" ,nvhName:"Nguyễn Văn C",nvhAge:20,nvhClass:"K23CNt2"},
            {nvhID:"NTU005" ,nvhName:"Nguyễn Văn D",nvhAge:20,nvhClass:"K23CNt2"},
        ]
    }
  }
  
    render() {
        let nvhElement = this.state.nvhStudent.map((nvhitem, index)=>{
            return(
                <tr>
                    <td>{index}</td>
                    <td>{nvhitem.nvhID}</td>
                    <td>{nvhitem.nvhName}</td>
                    <td>{nvhitem.nvhAge}</td>
                    <td>{nvhitem.nvhClass}</td>
                    <td>
                        <button>Sửa</button>
                        <button>Xóa</button>
                    </td>
                </tr>
            )
        })
    return (
      <div className='alert alert-info'>
        <h2>Danh sách sinh viên </h2>
        <table className='table table-bordered'>
            <thead>
                <tr>
                    <th>STT</th> 
                    <th>nvhID</th> 
                    <th>nvhName</th> 
                    <th>nvhAge</th> 
                    <th>nvhClass</th> 
                    <th>Action</th> 
                </tr>
            </thead>
            <tbody>
                <tr>
                    <th></th>
                    <th></th>
                    <th></th>
                    <th></th>
                    <th></th>
                    <th></th>
                </tr>
            </tbody>
            <tbody>
                {nvhElement}
            </tbody>
        </table>
        
      </div>
    )
  }
}
