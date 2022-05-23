import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom';

function Home(props) {
  const navigate = useNavigate();
  let {time}=props  
  const [timeout, settimeout] = useState(time)
  useEffect(()=>{
     setInterval(() => {
       settimeout(timeout-1000)
     }, 5000);

  },[timeout])
  if(timeout===0){
    localStorage.clear()
    alert("Your time over")
    navigate('/')

  }

  useEffect(() => {
 
    if (!localStorage.getItem("key")) {
      navigate('/')
    } else {
      navigate('/Home') 
    
    
        // eslint-disable-next-line
      }},[])

  const logout = () => {
    navigate('/')
    localStorage.removeItem("key")
    localStorage.removeItem("name")
  }
 

  const [comment, setcomment] = useState("")
  const onChange = (e) => {
    e.preventDefault()
    setcomment(e.target.value)
  }
  let userid = localStorage.getItem("key")
  const handleSubmit = async (e) => {
    e.preventDefault();
    // // API Call 
   await fetch(`http://localhost:3001/Home`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ comment: comment, userid: userid })
    });


  }
  return (
    <>  <h1>{timeout/1000} <button onClick={logout}>logout</button></h1>
        <h1>Name :- {localStorage.getItem("name")}  :Welcome sir/Mam</h1>
        <form onSubmit={handleSubmit}>
        <label htmlFor="comment">Comment</label>
        <input type="text" placeholder='Enter here Comment' autoComplete='current-Name' value={comment} onChange={onChange} name="comment" id="comment" />
        <button disabled={(comment.length >= 1) ? "" : "disabled"} type="submit" className="btn btn-primary mx-4">Submit</button>

      </form></>
  )
}

export default Home