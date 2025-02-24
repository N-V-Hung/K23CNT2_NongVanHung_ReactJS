import React from 'react'

export default function NVHFuncCompEvent1() {
    const nvhEventButton1Click = ()=>{
        alert("Button 1 - Clicked");
    };

    const nvhEventButton2Click = ()=>{
        alert("Button 2 - clicked");
    };

    const nvhEventButton3Click = (name)=>{
        alert("Name:" + name);
    };

  return (
    <div className='alert alert-info'>
       {/* <button className='btn btn-primary' onClick={nvhEventButton1Click()}>Button 1</button>*/}

        <button className='btn btn-success mx-1' onClick={nvhEventButton2Click}>Button 2</button>

        {/*<button className='btn btn-success' onClick={nvhEventButton3Click("Nông Văn Hưng")}>Button 3</button>*/}

        <button className='btn btn-success mx-1' onClick={()=>nvhEventButton3Click("Nông Văn Hưng")}>Button 4</button>
      
    </div>
  )
}

