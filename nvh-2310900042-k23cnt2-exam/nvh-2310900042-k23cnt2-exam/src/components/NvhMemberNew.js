import React,{ useState} from 'react'

export default function NvhMemberNew() {
  
    const [nvhId, setNvhId] = useState("");
    const [nvhFullname, setNvhFullname] = useState("");
    const [nvhUsername, setNvhUsername] = useState("");
    const [nvhPassword, setNvhPassword] = useState("");

    const nvhHandleSubmit = (e) => {
      e.preventDefault();
      nvhAddMember({nvhId, nvhFullname, nvhUsername, nvhPassword });
      setNvhId("");
      setNvhFullname("");
      setNvhUsername("");
      setNvhPassword("");
    }
  }
  return (
    <div>
      <form onSubmit={nvhHandleSubmit}>
      <input type="text" placeholder="nvhId" value={nvhId} onChange={e => setNvhId(e.target.value)} required />
      <input type="text" placeholder="nvhFullname" value={nvhFullname} onChange={e => setNvhFullname(e.target.value)} required />
      <input type="text" placeholder="nvhUsername" value={nvhUsername} onChange={e => setNvhUsername(e.target.value)} required />
      <input type="password" placeholder="nvhPassword" value={nvhPassword} onChange={e => setNvhPassword(e.target.value)} required />
      <button type="submit">Thêm tài khoản</button>
    </form>
    </div>
  )



