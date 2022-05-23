import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import Usercomponent from './Usercomponent';
function Login() {
  const [render, setrender] = useState(0)
  const [data, setdata] = useState([])
  const navigate = useNavigate();
  const [credentials, setCredentials] = useState({ email: "", name: "", number: "" })
  const onChange = (e) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value })
  }
  const handleSubmit = async (e) => {

    e.preventDefault();
    const response = await fetch(`http://localhost:3001/`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email: credentials.email, name: credentials.name, number: credentials.number })
    });
    const aboutuser = await response.json();
    if (aboutuser.success) {
      setrender(Math.random()+render)
      console.log(aboutuser.time)
      localStorage.setItem("key", aboutuser.user._id)
      console.log(aboutuser.user._id)
      navigate("/Home");
      localStorage.setItem("name", aboutuser.user.name)
    }
  }
  const admin = async (e) => {
    e.preventDefault();
    const response = await fetch(`http://localhost:3001/admin`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email: credentials.email, name: credentials.name, number: credentials.number })
    });
    let res=await response.json()
    if (res.success) {
      setdata(res.user)
      
      
      localStorage.setItem("admin", "admin")
      setrender(Math.random() + render)
    }
  }
  const logout = (e) => {
    e.preventDefault()
    setrender(Math.random())
    localStorage.removeItem("admin")
  }
  return (
    <div>
      {(!localStorage.getItem("admin"))?
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Name</label>
        <input type="text" placeholder='Enter here name' autoComplete='current-Name' value={credentials.name} onChange={onChange} name="name" id="name" />
        <label htmlFor="email" >Email address</label>
        <input type="email" autoComplete='username' value={credentials.email} onChange={onChange} id="email" name="email" aria-describedby="emailHelp" />
        <div id="emailHelp" >We'll never share your email with anyone else.</div>
        <label htmlFor="number" >Number</label>
        <input type="phone" placeholder='Enter here Number' autoComplete='current-number' value={credentials.number} onChange={onChange} name="number" id="number" />
        <button type="submit" disabled={(credentials.email.length >= 1) ? "" : "disabled"} className="btn btn-primary mx-4">LogIn</button>
        <button onClick={admin} disabled={(credentials.email.length >= 1) ? "" : "disabled"} className="btn btn-primary mx-4">Admin</button>
      </form>: <div><button onClick={logout}>LogOut</button>
       { data.map((e,key) => { return <Usercomponent key={key} user={e}/> })}</div> 
      }
      </div>
    )
}

export default Login