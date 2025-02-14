import React from "react";
import HvtCompInfor from "./HvtCompInfor";

function App() {
  // Thông tin cá nhân
  const personalInfo = {
    fullName: "Nông Văn Hưng",
    studentId: "2310900042",
    birthDate: "14/08/2005",
    phone: "0833484935",
    className: "K23CNT2",
  };

  return (
    <div className="App">
      <h1>Thông tin cá nhân</h1>
      {/* Truyền dữ liệu sang component HvtCompInfor */}
      <HvtCompInfor info={personalInfo} />
    </div>
  );
}

export default App;
