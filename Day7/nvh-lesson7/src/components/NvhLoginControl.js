import React, { Component } from 'react';
import NvhLoginComp from './NvhLoginComp';
import NvhLogoutComp from './NvhLogoutComp';

class NvhLoginControl extends Component {
    constructor(props){
        super(props);
        this.state = {
            isLoggedIn:false,
        }
    }
    // Hàm xử lý sự kiện login
    tvcHandleLogin = (event)=>{
        event.preventDefault();
        this.setState({
            isLoggedIn:true,
        })
    }
    render() {
        let {isLoggedIn}=this.state
        let tvcElement = isLoggedIn?<NvhLoginComp /> : <NvhLogoutComp />
        return (
            <div className='alert alert-danger'>
                {tvcElement}
                {
                    isLoggedIn? 
                        <button onClick={()=>this.setState({isLoggedIn:false})}>Logout</button> 
                        :<button onClick={this.tvcHandleLogin}>Login</button>
                }
            </div>
        );
    }
}

export default NvhLoginControl;