import React, { useEffect, useState } from 'react'

export default function NvhUseEffect() {
    // state
    const [nvhCount, setNvhCount] = useState(0);

    // useEffect sử dụng 1 tham số: Được thực hiện mỗi khi render / re-render
    useEffect(()=>{
        console.log("Đây là useEffect một tham số");
    });

    // useEffect sử dụng 2 tham số; tham số thứ 2 là mảng rỗng => Được gọi duy nhất một lần khi render
    useEffect(()=>{
        console.log("Đây là useEffect 2 tham số, tham số thứ 2 là mảng rỗng []");
    },[]);


    // useEffect sử dụng 2 tham số; tham số thứ 2 là mảng các đối số phụ thuộc
    //  => Được gọi mỗi khi đối số thay đổi
    // khởi tạo state là một mảng 
    const nvhArr = [10,12,20,22];
    const [nvhArray, setNvhArray] = useState(nvhArr);
    useEffect(()=>{
        console.log("Đây là useEffect 2 tham số, tham số thứ 2 là mảng đối số phụ thuộc [nvhArray]");
    },[nvhArray]);

    useEffect(()=>{
        console.log("Đây là useEffect 2 tham số, tham số thứ 2 là mảng [nvhCount]");
    },[nvhCount]);
    // Hàm xử lý sự kiện khi thêm mới phần tử vào mảng
    const nvhHandleAddList=()=>{
        setNvhArray([
            ...nvhArray,
            parseInt(Math.random()*100),
        ])
    }
  return (
    <div className='alert alert-info'>
        <h2>Demo useEffect</h2>
        <h3>Count: {nvhCount}</h3>
        <button onClick={()=>setNvhCount(nvhCount+1)}>Click here</button>

        <div>
            <h3>Array: {nvhArray.toString()}</h3>
            <button onClick={nvhHandleAddList}>Thêm </button>
        </div>
    </div>
  )
}