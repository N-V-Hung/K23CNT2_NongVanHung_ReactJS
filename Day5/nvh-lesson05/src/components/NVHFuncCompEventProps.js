import React from 'react'

export default function NVHFuncCompEventProps(nvhProps) {
    const nvhHanldeButttonClick1 = ()=>{
        alert("Dữ liệu từ props:" + nvhProps.nvhRenderName);
        console.log("Xin chào:",nvhProps.nvhRenderName);
    }

    const nvhHanldeButttonClick2 = (param)=>{
        alert("Dữ liệu từ props (Button 2 click):" + nvhProps.nvhRenderName);

        console.log('=============');
        console.log("Hi:" ,param);
        console.log('=============');
    }
  return (
    <div className='alert alert-'>
        <button className='btn btn-primary mx-1 ' onClick={nvhHanldeButttonClick1}>Button 1</button>

        <button className='btn btn-success mx-1 ' onClick={()=>nvhHanldeButttonClick2("Button 2")}>Button 2</button>

      
    </div>
  )
}
