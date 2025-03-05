import React, { Component } from "react";
import NvhStudent from "./NvhStudent";

class NvhStudentList extends Component {
    constructor(props){
        super(props);

    }
        // Hàm xử lý sự kiện xêm
    nvhHandleView = (nvhStudent)=>{
        // Chuyển dữ liệu lên NvhApp
        this.props.onNvhHandleView(nvhStudent);
    }


  render() {
    // lấy dữ liệu trong props từ NvhApp chuyển xuống
    let {renderNvhStudents} = this.props;
    console.log("List:",renderNvhStudents);
    
    // chuyển dữ liệu vào NvhStudent để hiển thị
    let nvhElementStudent = renderNvhStudents.map((nvhItem,index)=>{
        return <NvhStudent key={index} renderNvhStudent={nvhItem} onNvhHandleView={this.nvhHandleView} />
    })
    return (
      <div className="card-body">
        <h3 className="card-title">Danh sách sinh viên</h3>
        <div className="table-responsive pt-3">
          <table className="table table-bordered">
            <thead>
              <tr>
                <th>#</th>
                <th>Mã sinh viên</th>
                <th>Tên sinh viên</th>
                <th>Tuổi</th>
                <th>Giới tính</th>
                <th>Hành động</th>
              </tr>
            </thead>
            <tbody>

             {nvhElementStudent}
              
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}

export default NvhStudentList;