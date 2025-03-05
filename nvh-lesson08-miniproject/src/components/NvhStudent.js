import React, { Component } from "react";

class NvhStudent extends Component {
    constructor(props){
        super(props);
    }

    // Hàm xử lý chức năng xem
    nvhHandleView = (nvhStudent)=>{
        // Chuyển lên NvhStudentList
        this.props.onNvhHandleView(nvhStudent);
    }
  render() {
    // lấy đối tượng dữ liệu chuyển từ NvhStudentList
    let {renderNvhStudent, key} = this.props;
    console.log("Student:",renderNvhStudent);
    
    return (
      <>
        <tr>
          <td>{key}</td>
          <td>{renderNvhStudent.nvhId}</td>
          <td>{renderNvhStudent.nvhStudentName}</td>
          <td>{renderNvhStudent.nvhAge}</td>
          <td>{renderNvhStudent.nvhGender}</td>
          <td>
            <div className="template-demo">
              <button type="button" className="btn btn-danger btn-icon-text" 
                    onClick={()=>this.nvhHandleView(renderNvhStudent)}
                    >
                Xem
              </button>
              <button type="button" className="btn btn-warning btn-icon-text">
                Sửa
              </button>
              <button type="button" className="btn btn-success btn-icon-text">
                Xóa
              </button>
            </div>
          </td>
        </tr>
      </>
    );
  }
}

export default NvhStudent;