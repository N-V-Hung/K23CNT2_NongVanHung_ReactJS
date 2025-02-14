import React from "react";

function HvtCompInfor({ info }) {
  return (
    <div>
      <h2>Họ và Tên: {info.fullName}</h2>
      <p><strong>Mã sinh viên:</strong> {info.studentId}</p>
      <p><strong>Ngày sinh:</strong> {info.birthDate}</p>
      <p><strong>Điện thoại:</strong> {info.phone}</p>
      <p><strong>Tên lớp:</strong> {info.className}</p>
    </div>
  );
}

export default HvtCompInfor;