
import React,{ useState} from 'react'

export default function NvhUseStateListObject() {
    const listStudent =[
        {nvhId:"SV001",nvhName:"Nông Văn Hưng", nvhAge:20, nvhClass:"K23CNT2"},
        {nvhId:"SV002",nvhName:"Nguyễn Văn A", nvhAge:22, nvhClass:"K23CNT2"},
        {nvhId:"SV003",nvhName:"Nguyễn Văn B", nvhAge:24, nvhClass:"K23CNT2"},
        {nvhId:"SV004",nvhName:"Nguyễn Văn C", nvhAge:25, nvhClass:"K23CNT2"},

    ];
    //tao state voi hook
    const [nvhStudents, setNvhStudents] = useState(listStudent);


        let nvhElemant = nvhStudents.map((nvhItem, index)=>{
            return(
                <tr>
                    <td>{index}</td>
                    <td>{nvhItem.nvhId}</td>
                    <td>{nvhItem.nvhName}</td>
                    <td>{nvhItem.nvhAge}</td>
                    <td>{nvhItem.nvhClass}</td>
                    <td>
                        <button>Sửa</button>
                        <button>Xóa</button>
                    </td>
                    

                </tr>
        )
    })
    return (
        <div>
            <h2>Danh sách sinh viên</h2>
        <table>
            <thead>
                <tr>
                    <th>STT</th>
                    <th>nvhId</th>
                    <th>nvhName</th>
                    <th>nvhAge</th>
                    <th>nvhClass</th>
                    <th>Chức năng</th>
                </tr>
            </thead>
            <thead>
                {nvhElemant}
            </thead>
        </table>
        </div>
  )
}
