import React, { useState } from 'react'

export default function NvhUseState() {

    //tao state
    const [count,setCount] = useState(0);
 
    //ham su ly su kien 
    const nvhHandleTang=()=>{
       
        setCount(count+1);
    }

    //
    const danh_sach = [100,120,150,200];
    //
    const [list, setList] = useState(danh_sach);
    //
    const nvhHandleAddNewRandom = ()=>{
       // setList(prev =>{
         //   return [
           //     ...prev,
             //   parseInt(Math.random()*100)
            //]
        //}
        //)
        setList([
            ...list,
            parseInt(Math.random()*1009)
        ])
    }


return (
    <div className='alert alert-info'>
        <h2>Sử dụng useState</h2>
        <div>
            <b>Count: {count} </b>
            <button onClick={nvhHandleTang}>Tăng</button>
            <button onClick={()=>setCount(count-1)}>Giảm</button>
            <button onClick={()=>setCount(0)}>Đặt lại </button>
        </div>
        <div>
            <h3>List: {list.toString()}</h3> 
            <button onClick={nvhHandleAddNewRandom}>Add new (random)</button>
        </div>
      
    </div>
  )
}
