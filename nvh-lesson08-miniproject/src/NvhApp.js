import React, { Component } from 'react'
import NvhControl from './components/NvhControl'
import NvhStudetsList from './components/NvhStudetsList'
import NvhForm from './components/NvhForm'

export default class NvhApp extends Component {
  constructor(props){
    super(props);
    this.state = {
      nvhStudents:[
        {nvhId:"SV001",nvhStudentName:"Nông Văn Hưng",nvhAge:20,nvhGender:"Nam",nvhBirthday:"14/08/2005",nvhBirthPlace:"HN",nvhAddress:"Tòa VCN, 25 Vũ Trọng Phụng"},
        {nvhId:"SV002",nvhStudentName:"Nguyễn Thị A",nvhAge:20,nvhGender:"Nữ",nvhBirthday:"15/06/2005",nvhBirthPlace:"DN",nvhAddress:"Tòa VCN, 25 Vũ Trọng Phụng"},
        {nvhId:"SV003",nvhStudentName:"Trần Văn B",nvhAge:20,nvhGender:"Nam",nvhBirthday:"14/01/2005",nvhBirthPlace:"HP",nvhAddress:"Tòa VCN, 25 Vũ Trọng Phụng"},
        
      ],
      nvhStudent:"",
    }
  }

//Hàm xử lý sự kiện view student
  nvhHandleView =(nvhStudent)=>{
    this.setState({
        nvhStudent:nvhStudent,
      })
  }


  render() {
    console.log("View Student:", this.state.nvhStudent);
    return (
      <div>
        <h1 className='text-center'>
          Nông Văn Hưng - K23CNT2 - Mini ProJect 1
        </h1>
        <div className="row">
  <div className="col-lg-7 grid-margin stretch-card">
    <div className="card">

      {/* header */}
      <NvhControl />
    
    {/*Danh sách sinh viên */}
    <NvhStudetsList renderNvhStudents={this.state.nvhStudents} onNvhHandleView={this.nvhHandleView}/>
     
    </div>
  </div>
  <div className="col-5 grid-margin">
    {/* form */}
    <NvhForm renderNvhStudent = {this.state.nvhStudent} />
  </div>
</div>

      </div>
    )
  }
}
