import React,{ useState} from 'react'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import NvhNavNar from "./components/NvhNavNar";
import NvhHome from "./components/NvhHome";
import NvhGioiThieu from "./components/NvhGioiThieu";
import NvhSanPham from "./components/NvhSanPham";
import NvhTinTuc from "./components/NvhTinTuc";
import NvhLienHe from "./components/NvhLienHe";
import NvhThem from './components/NvhThem';

export default function NvhApp() {
  const listUsers  = [
      {id:"MA01", nvhTenSP:"Cây Bàng Mã Bạch Tử", nvhGia:300.000, nvhSL:177,nvhGhiChu:""},
      {id:"MA02", nvhTenSP:"Cây Lưỡi Hổ", nvhGia:300.000, nvhSL:177,nvhGhiChu:""},
      {id:"MA03", nvhTenSP:"Cây Đại Lộc", nvhGia:300.000, nvhSL:177,nvhGhiChu:""},
      
    ]
  
    const[nvhUsers, setNvhUsers] = useState(listUsers)
  
    // Hàm xử lý sự kiện thêm mới
    const nvhHandleAdd = (nvhParam)=>{
      console.log("nvhHandleAdd:", nvhParam);
      
      setNvhUsers(prev =>{ 
        return [
          ...prev,
          nvhParam
        ]
      })
    }
  return (
    <div>
      <Router>
      <NvhNavNar />
      <Routes>
        <Route path="/" element={<NvhHome />} />
        <Route path="/gioi-thieu" element={<NvhGioiThieu />} />
        <Route path="/san-pham" element={<NvhSanPham  renderNvhSanPham={nvhUsers}/>} />
        <Route path="/tin-tuc" element={<NvhTinTuc />} />
        <Route path="/lien-he" element={<NvhLienHe />} />
        <Route path="/them" element={<NvhThem onNvhAddNew={nvhHandleAdd}/>} /> 
      </Routes>
    </Router>
      
    </div>
  )
}

