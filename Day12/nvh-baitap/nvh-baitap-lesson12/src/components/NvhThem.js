import React, { useState } from 'react'

export default function NvhThem({onNvhAddNew}) {

    const [id, setNvhId] = useState('')
    const [nvhTenSP, setNvhTenSP] = useState('')
    const [nvhGia, setNvhGia] = useState('')
    const [nvhSL, setNvhSL] = useState('')
    const [nvhGhiChu, setNvhGhiChu] = useState('')

   

    const nvhHandleSubmit = (event) =>{
        event.preventDefault();
        console.log(id,nvhTenSP,nvhGia, nvhSL,nvhGhiChu)
        
        onNvhAddNew({id,nvhTenSP,nvhGia, nvhSL,nvhGhiChu})
    }
  return (
    <div>
        <form>
            <p>Mã Sản Phẩm:
                <input type='text' name='id' value={id} onChange={(ev)=>setNvhId(ev.target.value)} /> </p>
            <p>Tên Sản Phẩm:
                <input type='text' name='nvhTenSP' value={nvhTenSP} onChange={(ev)=>setNvhTenSP(ev.target.value)}/> </p>
            <p>Giá:
                <input type='text' name='nvhGia' value={nvhGia} onChange={(ev)=>setNvhGia(ev.target.value)}/> </p>
            <p>Số Lượng:
                <input type='text' name='nvhSL' value={nvhSL} onChange={(ev)=>setNvhSL(ev.target.value)} /> </p>
            <p>Ghi Chú:
                <input type='text' name='nvhGhiChu' value={nvhSL} onChange={(ev)=>setNvhGhiChu(ev.target.value)} /> </p>


            <p>
                <button name='nvhSave' onClick={nvhHandleSubmit}>Save</button>
            </p>
        </form>
    </div>
  )
}