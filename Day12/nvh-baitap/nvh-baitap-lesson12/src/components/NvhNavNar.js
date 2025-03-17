import React from 'react'
import {Link} from 'react-router-dom'
export default function NvhNavNar() {
  return (
    <div>
        <ul>
            <Link to={"/"}>Home</Link> | 
            <Link to={"gioi-thieu"}>Gioi Thieu</Link> |
            <Link to={"/san-pham"}>San Pham</Link>  | 
            <Link to={"/tin-tuc"}>Tin Tuc</Link>  | 
            <Link to={"/lien-he"}>Lien He</Link>  | 
            <Link to={"/them"}>Them</Link>  | 
        </ul>
    </div>
  )
}