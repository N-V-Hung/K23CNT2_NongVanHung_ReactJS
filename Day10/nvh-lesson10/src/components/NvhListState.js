import React, { useState } from 'react'

export default function NvhUseState() {
    // khởi tạo state 
    const [nvhCount, setNvhCount] = useState(0);

    // khởi tạo state là một mảng 
    const nvhArr = [10,12,20,22];
    const [nvhArray, setNvhArray] = useState(nvhArr);

    // khởi tạo state với mảng object
    const nvhStudents = [
        {nvhId:"SV001",nvhName:"Văn Hưng", nvhAge:20},
        {nvhId:"SV002",nvhName:"Nguyễn Quang A", nvhAge:146},
    ];
    const [nvhStudentList, setNvhStudentList] = useState(nvhStudents);

    // Hàm xử lý sự kiện khi thêm mới phần tử vào mảng
    const nvhHandleAddList=()=>{
        setNvhArray([
            ...nvhArray,
            parseInt(Math.random()*100),
        ])
    }

    // Hàm xử lý sự kiện thêm mới sinh viên
    const nvhHandleAddNewStudent = ()=>{
        let nvhStudent = {
            nvhId:"SV003",
            nvhName:"Nguyễn Quang B",
            nvhAge:22
        };
        // Thêm vào state nvhStudentList
        setNvhStudentList([
            ...nvhStudentList,
            nvhStudent
        ])

        console.log("List: ", nvhStudentList);
        
    }
  return (
    <div className='alert alert-danger '>
        <h2>useState Demo</h2>
        <div>
            <h3>Count: {nvhCount}</h3>
            <button onClick={()=>setNvhCount(nvhCount+1)}>Tăng + </button>
            <button onClick={()=>setNvhCount(nvhCount-1)}>Giảm - </button>
        </div>
        <div>
            <h3>Array: {nvhArray.toString()}</h3>
            <button onClick={nvhHandleAddList}>Thêm phần từ</button>
        </div>
        <div>
            <h3>Danh sách sinh viên</h3>
            <table className='table table-bordered'>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Nam</th>
                        <th>Age</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        nvhStudentList.map((nvhStudent,index)=>{
                            return <>
                                <tr>
                                    <td>{nvhStudent.nvhId}</td>
                                    <td>{nvhStudent.nvhName}</td>
                                    <td>{nvhStudent.nvhAge}</td>
                                </tr>
                            </>
                        })
                    }
                </tbody>
                <tfoot>
                    <button onClick={nvhHandleAddNewStudent}>Thêm mới sinh viên</button>
                </tfoot>
            </table>
        </div>
    </div>
  )
}