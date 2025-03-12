import React, { useState }  from 'react'

export default function NvhMemberList() {
    const nvhStudents = [
        { nvhId:"SV001",nvhFullname: "Nông Văn Hưng", nvhUsername: "nongvanhung", nvhPassword: "123456" },
        { nvhId:"SV002",nvhFullname: "Nguyễn Văn A", nvhUsername: "nguyenvana", nvhPassword: "123456" },
        { nvhId:"SV003",nvhFullname: "Nguyễn Văn B", nvhUsername: "nguyenvanb", nvhPassword: "123456" },
 
      ];
    const [nvhStudentList, setNvhSTudentList] = useState(nvhStudents);

    
  return (
    <div className='alert alert-danger'>
        <h1 className='text-center'>Danh sách sinh viên</h1>
        <table className='table table-bordered'>
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>FullName</th>
                        <th>UserName</th>
                        <th>Password</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        nvhStudentList.map((nvhStudents,index)=>{
                            return <>
                            <tr>
                                <td>{nvhStudents.nvhId}</td>
                                <td>{nvhStudents.nvhFullname}</td>
                                <td>{nvhStudents.nvhUsername}</td>
                                <td>{nvhStudents.nvhPassword}</td>
                            </tr>
                            </>
                        })
                    }
                </tbody>

            </table>
      
    </div>
  )
}
