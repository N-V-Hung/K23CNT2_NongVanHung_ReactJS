import React from "react";

export default function NvhJsExpression() {

    //bien 
    const name="nong van hung";
  
    const user = {
        firstName:"Hung",
        lastName:"Nong Van"
    }

    //ham
    const fullname=(user)=>{
        return "<h2>" +user.firstName + ' ' + user.lastName + "</h2>";
    }

    const element =(
        <div>
            {fullname(user)}
            <hr/>
            <h3> Welccome to, {name}</h3>
        </div>
    )
   
    const sayWelcome =(name)=>{
        if(name){
            return <h3> Welcome to {name}</h3>
        }else{
            return <h3>Welcome to FIT-NTU - K23CNT2</h3>
        }
    }
    

    return (
        <div>
            <h1> NVH- JSX Expression</h1>
            {element}

            <hr/>
            {sayWelcome()}
            <hr/>
            {sayWelcome("Doan Ngoc Anh")}
        </div>
    )

}



