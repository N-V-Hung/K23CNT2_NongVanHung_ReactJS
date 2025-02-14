import React from "react";

function HvtCompinfor({ info }){
    return (
        <div>
            <h2>Thông tin cá nhân</h2>
            <p><strong>Họ và tên:</strong> {info.fullname}</p>
            <p><strong>Mã sinh viên:</strong> {info.studentID}</p>
            <p><strong>Ngày sinh:</strong> {info.birtDate}</p>
            <p><strong>Diện thoại:</strong> {info.phone}</p>
            <p><strong>Tên Lớp:</strong> {info.className}</p>
        </div>
    )
}

export default HvtCompinfor;