import React, { Component } from 'react';

class NvhEventForm5 extends Component {
    constructor(props){
        super(props);
        this.state = {
            nvhName:'Hung',
            nvhAge:20,
            nvhGender:'Female',
            nvhCourse:'CSS3'
        }
    }

    // Hàm xử lý sự kiện change
    nvhHandleChange = (event)=>{
        // lấy tên điều khiển
        let name = event.target.name;
        // Lấy giá trị trên điều khiển đang thao tác
        let value = event.target.value;

        // Cập nhật state
        this.setState({
            [name]:value,
        })
    }
    // Sự kiện khi submit form
    nvhHandleSubmit = (ev)=>{
        ev.preventDefault();
        alert(this.state.nvhName + "\n" + this.state.nvhAge);

        // Chuyển dữ liệu trên form lên App component (nvhApp);
        this.props.onnvhHandleSubmit(this.state);
    }
    render() {
        return (
            <div className='alert alert-danger'>
                <h2>Form Student Info </h2>
                <form>
                    <div>
                        <label htmlFor='nvhName'>Student Name:</label>
                        <input type='text' name='nvhName' id='nvhName'
                            value={this.state.nvhName}
                            onChange={this.nvhHandleChange} />
                    </div>
                    <div>
                        <label htmlFor='nvhAge'>Student Age:</label>
                        <input type='text' name='nvhAge' id='nvhAge'
                            value={this.state.nvhAge}
                            onChange={this.nvhHandleChange} />
                    </div>
                    <div>
                        <label htmlFor='nvhGender'>Student Gender:</label>
                        <div>
                            <input type='radio' name='nvhGender' id='nvhMale' className='mx-2'
                                value={'Male'}
                                checked={this.state.nvhGender === 'Male'}
                                onChange={this.nvhHandleChange} />
                            <label htmlFor='nvhMale'> Male</label>
                        </div>
                        <div>
                            <input type='radio' name='nvhGender' id='nvhFemale' className='mx-2'
                                value={'Female'}
                                checked={this.state.nvhGender === 'Female'}
                                onChange={this.nvhHandleChange} />
                            <label htmlFor='nvhFemale'> Female</label>
                        </div>
                        <div>
                            <input type='radio' name='nvhGender' id='nvhNone' className='mx-2'
                                value={'None'}
                                checked={this.state.nvhGender === 'None'}
                                onChange={this.nvhHandleChange} />
                            <label htmlFor='nvhNone'> None</label>
                        </div>
                    </div>
                    <div>
                        <label htmlFor='nvhCourse'>
                            <select name='nvhCourse' id='nvhCourse'
                                    value={this.state.nvhCourse}
                                    onChange={this.nvhHandleChange} >
                                <option value={'HTML5'}>HTML5</option>
                                <option value={'CSS3'}>CSS3</option>
                                <option value={'Javascript'}>Javascript</option>
                                <option value={'Jquery'}>Jquery</option>
                                <option value={'Bootstrap'}>Bootstrap</option>
                            </select>
                        </label>
                    </div>
                    <button onClick={this.nvhHandleSubmit}>Submit</button>
                </form>
            </div>
        );
    }
}

export default NvhEventForm5;