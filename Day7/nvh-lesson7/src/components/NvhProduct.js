import React, { Component } from 'react'

export default class NvhRenderListStudent extends Component {
  constructor(props){
    super(props);
    this.state = {
        nvhProduct:[
            {nvhProductID:"P001" ,nvhProductName:"Iphone11",nvhQuantity:15,nvhPrice:"1000"},
            {nvhProductID:"P002" ,nvhProductName:"Iphone12",nvhQuantity:20,nvhPrice:"1250"},
            {nvhProductID:"P003" ,nvhProductName:"Iphone13",nvhQuantity:10,nvhPrice:"1500"},
            {nvhProductID:"P004" ,nvhProductName:"Iphone14",nvhQuantity:15,nvhPrice:"2000"},
           
        ]
    }
  }
  
    render() {
        let nvhElement = this.state.nvhProduct.map((nvhitem, index)=>{
            return(
                <tr>
                    <td>{index}</td>
                    <td>{nvhitem.nvhProductID}</td>
                    <td>{nvhitem.nvhProductName}</td>
                    <td>{nvhitem.nvhQuantity}</td>
                    <td>{nvhitem.nvhPrice}</td>
                    <td>
                        <button>Sửa</button>
                        <button>Xóa</button>
                    </td>
                </tr>
            )
        })
    return (
      <div className='alert alert-info'>
        <h2>Danh sách Điện Thoại </h2>
        <table className='table table-bordered'>
            <thead>
                <tr>
                    <th>STT</th> 
                    <th>ID</th> 
                    <th>Name</th> 
                    <th>Quantity</th> 
                    <th>Price</th> 
                    <th>Action</th> 
                </tr>
            </thead>
            <tbody>
                <tr>
                    <th></th>
                    <th></th>
                    <th></th>
                    <th></th>
                    <th></th>
                    <th></th>
                </tr>
            </tbody>
            <tbody>
                {nvhElement}
            </tbody>
        </table>
        
      </div>
    )
  }
}
