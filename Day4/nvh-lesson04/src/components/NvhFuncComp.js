import React from 'react'

export default function NvhFuncComp(props) {
    return (
        <div>
            <h2>Demo: Function Component</h2>
            <p>Lấy dữ liệu từ props để hiển thị</p>
            <p>Name: {props.name} </p>
            <p>Address: {props.address} </p>
            <p>company: {props.company} </p>
            <p>note: {props.note} </p>
        </div>
    )
}