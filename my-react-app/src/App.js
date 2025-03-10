import React, { useState } from "react";

function App() {
  // Dữ liệu mẫu
  const [data, setData] = useState([
    { id: 1, name: "Nguyễn Văn A", email: "a@gmail.com" },
    { id: 2, name: "Trần Thị B", email: "b@gmail.com" },
    { id: 3, name: "Lê Văn C", email: "c@gmail.com" }
  ]);

  const [form, setForm] = useState({ id: null, name: "", email: "" });
  const [editingId, setEditingId] = useState(null); // ID đang chỉnh sửa

  // Xử lý nhập dữ liệu vào form
  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  // Thêm hoặc cập nhật thông tin
  const handleSubmit = (e) => {
    e.preventDefault();

    if (editingId !== null) {
      // Cập nhật dữ liệu
      setData(data.map(item => item.id === editingId ? { ...form, id: editingId } : item));
      setEditingId(null);
    } else {
      // Thêm mới
      setData([...data, { ...form, id: Date.now() }]);
    }

    setForm({ id: null, name: "", email: "" }); // Reset form
  };

  // Xóa dữ liệu
  const handleDelete = (id) => {
    if (window.confirm("Bạn có chắc chắn muốn xóa?")) {
      setData(data.filter(item => item.id !== id));
    }
  };

  // Sửa dữ liệu
  const handleEdit = (id) => {
    const item = data.find(item => item.id === id);
    setForm(item);
    setEditingId(id);
  };

  return (
    <div style={{ width: "400px", margin: "auto", textAlign: "center" }}>
      <h2>Quản lý thông tin</h2>

      {/* Form nhập thông tin */}
      <form onSubmit={handleSubmit}>
        <input type="text" name="name" placeholder="Nhập tên" value={form.name} onChange={handleChange} required />
        <input type="email" name="email" placeholder="Nhập email" value={form.email} onChange={handleChange} required />
        <button type="submit">{editingId !== null ? "Cập nhật" : "Thêm mới"}</button>
      </form>

      {/* Danh sách dữ liệu */}
      <ul style={{ listStyle: "none", padding: 0 }}>
        {data.map(item => (
          <li key={item.id} style={{ margin: "10px 0", border: "1px solid #ddd", padding: "10px" }}>
            <strong>{item.name}</strong> - {item.email}
            <button onClick={() => handleEdit(item.id)}>✏ Sửa</button>
            <button onClick={() => handleDelete(item.id)}>🗑 Xóa</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
